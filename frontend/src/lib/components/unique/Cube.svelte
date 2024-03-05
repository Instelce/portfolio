<script lang="ts">
  import { onDestroy, onMount, tick } from 'svelte';
  import { spring, tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { T, useTask, useThrelte, useLoader } from '@threlte/core';
  import {
    AmbientLight,
    BoxGeometry,
    PerspectiveCamera,
    Mesh,
    MeshStandardMaterial,
    PlaneGeometry,
    Group,
    ShapeGeometry
  } from 'three';
  import { TextureLoader, Color } from 'three';
  import {
    OrbitControls,
    RoundedBoxGeometry,
    Text3DGeometry,
    Text,
    useCursor,
    interactivity
  } from '@threlte/extras';
  import { SVGLoader, TextGeometry } from 'three/examples/jsm/Addons.js';

  const { renderStage, autoRender, renderer, scene, camera } = useThrelte();

  // load assets
  const { load: loadTexture } = useLoader(TextureLoader);
  const textures = loadTexture({
    age: '/images/age.png',
    me: '/images/me.png',
    like: '/images/like.png'
  });

  const { load: loadSvg } = useLoader(SVGLoader);
  const svg = loadSvg('/images/like.svg');

  let mesh: Mesh;
  let rotate = tweened(0, {
    duration: 600,
    easing: cubicOut
  });
  let scale = tweened(1, {
    duration: 200,
    easing: cubicOut
  });
  let time = 0;

  useTask((delta) => {
    if (!mesh) return;
    mesh.rotation.y += delta * 0.5;
  });

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

  onMount(() => {
    window.addEventListener('mousemove', manageMouse);
  });
  onDestroy(() => {
    window.removeEventListener('mousemove', manageMouse);
  });

  interactivity();
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 5]}>
  <!-- <OrbitControls
		enableDamping
		enableZoom={false}
		enablePan={false}
		minPolarAngle={Math.PI * 0.5}
		maxPolarAngle={Math.PI * 0.5}
	/> -->
</T.PerspectiveCamera>

{#if $textures && $svg}
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
    <RoundedBoxGeometry args={[2, 2, 2]} radius={0.2} />

    <!-- <T.MeshStandardMaterial color={new Color('#121212')} /> -->
    <T.MeshStandardMaterial color={new Color('#1B1B1B')} />
    <!-- <T.MeshToonMaterial color={new Color("#5856D6")} /> -->

    <T.DirectionalLight position={[0, 2, 2]} intensity={1.5} />
    <T.DirectionalLight position={[0, 2, -2]} intensity={1.5} rotation={[0, Math.PI, 0]} />
  </T.Mesh>

  <T.Group position={[0, 0, 0]} rotation={[$mouseY, $mouseX - $rotate, 0]} scale={$scale}>
    <!-- Me text -->
    <T.Mesh position={[0, 0, 1.01]}>
      <Text
        text={`Hi !`}
        font="/fonts/satoshi/Satoshi-Bold.ttf"
        fontSize={0.6}
        textAlign="center"
        position={[-((4 * 0.26) / 2), 0.4, 0]}
      />
    </T.Mesh>
    <T.Mesh position={[1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
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
    <T.Mesh position={[0, 0, -1.01]} rotation={[0, Math.PI, 0]}>
      <Text
        text={`18 yo`}
        font="/fonts/satoshi/Satoshi-Bold.ttf"
        fontSize={0.4}
        textAlign="center"
        position={[-((6 * 0.18) / 2), 0.25, 0]}
      />
    </T.Mesh>
    <T.Mesh position={[-1.01, 0, 0]} rotation={[0, -(Math.PI / 2), 0]}>
      <Text
        text={`Learn more`}
        font="/fonts/satoshi/Satoshi-Bold.ttf"
        fontSize={0.2}
        textAlign="center"
        position={[-((6 * 0.18) / 2), 0.4, 0]}
      />
    </T.Mesh>
  </T.Group>
{/if}

<T.AmbientLight intensity={2} />

<style lang="scss">
</style>
