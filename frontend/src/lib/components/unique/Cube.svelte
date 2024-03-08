<script lang="ts">
  import { onDestroy, onMount, tick } from 'svelte';
  import { spring, tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { T, useTask, useThrelte, useLoader } from '@threlte/core';
  import { Mesh } from 'three';
  import * as THREE from 'three';
  import { TextureLoader, Color } from 'three';
  import { RoundedBoxGeometry, Text, interactivity, Environment } from '@threlte/extras';
  import { FontLoader, SVGLoader, TextGeometry } from 'three/examples/jsm/Addons.js';
  import { goto } from '$app/navigation';
  import { createRoundedPlaneGeometry } from '$lib/functions/threeEnhance';

  let windowWidth = 0;
  let windowHeight = 0;

  const { renderStage, autoRender, renderer, scene, camera } = useThrelte();

  // load assets
  const { load: loadTexture } = useLoader(TextureLoader);
  const textures = loadTexture({
    age: '/images/age.png',
    me: '/images/me.png',
    like: '/images/like.png'
  });
  // const { load: loadFont } = useLoader(FontLoader);
  // const satoshiBold = loadFont('/fonts/satoshi/Satoshi-Bold.ttf');
  // const satoshiRegular = loadFont('/fonts/satoshi/Satoshi-Regular.ttf');

  let mesh: Mesh;
  let rotate = tweened(0, {
    duration: 600,
    easing: cubicOut
  });
  let scale = tweened(1, {
    duration: 200,
    easing: cubicOut
  });

  $: cubeSize = windowWidth > 479 ? 2 : 1.5;
  $: textPos = cubeSize / 2 + 0.01;

  // follow mouse effect
  const mouseOptions = { damping: 0.9, shiftness: 0.1 };
  let mouseX = spring(0, mouseOptions);
  let mouseY = spring(0, mouseOptions);

  const manageMouse = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = -0.5 + clientX / innerWidth;
    const y = (-0.5 + clientY / innerHeight) * 0.5;
    mouseX.update((_) => x);
    mouseY.update((_) => y);
  };

  const geometry = createRoundedPlaneGeometry(1, 1, 0.1, 32, 32);

  onMount(() => {
    if (windowWidth > 479) {
      window.addEventListener('mousemove', manageMouse);
    }
  });
  onDestroy(() => {
    if (windowWidth > 479) {
      window.removeEventListener('mousemove', manageMouse);
    }
  });

  interactivity();
</script>

<svelte:window bind:innerWidth={windowWidth} />

<T.PerspectiveCamera makeDefault position={[0, 0, 5]}>
  <!-- <OrbitControls
		enableDamping
		enablePan={false}
		minPolarAngle={Math.PI * 0.5}
		maxPolarAngle={Math.PI * 0.5}
	/> -->
</T.PerspectiveCamera>

<T.Mesh
  bind:ref={mesh}
  rotation={[$mouseY, $mouseX - $rotate, 0]}
  scale={$scale}
  interactive
  on:click={(e) => {
    rotate.update((r) => r + Math.PI / 2);
    scale.update((s) => 1.1);
    const timeout = setTimeout(() => scale.update((s) => 1), 200);
  }}
>
  <RoundedBoxGeometry args={[cubeSize, cubeSize, cubeSize]} radius={0.2} />

  <!-- <T.MeshStandardMaterial color={new Color('#121212')} /> -->
  <T.MeshStandardMaterial color={new Color('#1B1B1B')} />
  <!-- <T.MeshToonMaterial color={new Color("#5856D6")} /> -->

  <T.DirectionalLight position={[0, cubeSize, cubeSize]} intensity={1.5} />
  <T.DirectionalLight
    position={[0, cubeSize, -cubeSize]}
    intensity={1.5}
    rotation={[0, Math.PI, 0]}
  />
  <T.DirectionalLight
    position={[cubeSize, cubeSize, 0]}
    intensity={1.5}
    rotation={[0, -Math.PI / 2, 0]}
  />
  <T.DirectionalLight
    position={[-cubeSize, cubeSize, 0]}
    intensity={1.5}
    rotation={[0, Math.PI / 2, 0]}
  />
</T.Mesh>

<T.Group position={[0, 0, 0]} rotation={[$mouseY, $mouseX - $rotate, 0]} scale={$scale}>
  <!-- Me text -->
  <T.Mesh position={[0, 0, textPos]}>
    <Text
      text={`Hi !`}
      font="/fonts/satoshi/Satoshi-Bold.ttf"
      fontSize={0.6}
      textAlign="center"
      position={[-((4 * 0.26) / 2), 0.4, 0]}
    />
  </T.Mesh>
  <T.Mesh position={[textPos, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
    <Text
      text={`I'm`}
      font="/fonts/satoshi/Satoshi-Regular.ttf"
      fontSize={0.3}
      textAlign="center"
      position={[-((8 * 0.14) / 2), 0.4, 0]}
    />
    <Text
      text={`Célestin`}
      font="/fonts/satoshi/Satoshi-Bold.ttf"
      fontSize={0.3}
      position={[-((8 * 0.14) / 2), 0.0, 0]}
    />
  </T.Mesh>
  <T.Mesh position={[0, 0, -textPos]} rotation={[0, Math.PI, 0]}>
    <Text
      text={`18 yo`}
      font="/fonts/satoshi/Satoshi-Bold.ttf"
      fontSize={0.4}
      textAlign="center"
      position={[-((6 * 0.18) / 2), 0.25, 0]}
    />
  </T.Mesh>
  <T.Mesh
    position={[-textPos, 0, 0]}
    rotation={[0, -(Math.PI / 2), 0]}
    interactive
    on:click={() => {
      if ($rotate >= Math.PI / 2) {
        goto('/#about-me');
      }
    }}
    geometry={geometry}
  >
    <T.MeshStandardMaterial color={new Color('#5856d6')} />
    <Text
      text={`?`}
      font="/fonts/satoshi/Satoshi-Regular.ttf"
      fontSize={0.3}
      textAlign="center"
      position={[-((1 * 0.13) / 2), 0.20, 0.01]}
      color={new Color('#fff')}
    />
  </T.Mesh>
</T.Group>

<T.Mesh position={[0, -1, 0]}>
  <T.PlaneGeometry args={[0.005, 1, 1]} />
  <T.MeshStandardMaterial color={new Color('#fff')} />
</T.Mesh>

<T.Mesh position={[0, -1.6, 0]}>
  <Text
    text="Click me"
    font="/fonts/satoshi/Satoshi-Regular.ttf"
    fontSize={0.1}
    position={[-((8 * 0.05) / 2), 0, 0]}
  />
</T.Mesh>

<T.AmbientLight intensity={2} />

<style lang="scss">
</style>
