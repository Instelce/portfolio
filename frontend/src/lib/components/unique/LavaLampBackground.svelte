<script lang="ts">
  import { OrbitControls } from '@threlte/extras';
  import { T } from '@threlte/core';
  import vertex from '$lib/shaders/vertex.glsl';
  import fragment from '$lib/shaders/fragment.glsl';
  import { tick } from 'svelte';
  import * as THREE from 'three';
  import { useThrelte, useTask } from '@threlte/core';
  import { interactivity, transitions } from '@threlte/extras';

  interactivity();
  transitions();

  const { renderStage, autoRender, renderer, scene, camera } = useThrelte();

  let time = 0;
  let material = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    // wireframe: true,
    uniforms: {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2() }
    }
  });

  let paletteHex = [
    '#0D0D0D',
    '#2A2A2A',
    '#1E1D46',
    '#1E1D46',
    // "#00FF00",
    '#5856D6'
  ];
  // "#1E1D46",
  // "#26255C",
  let palette = paletteHex.map((color) => new THREE.Color(color));
  material.uniforms.uColor = { value: palette };

  // autoRender.set(false)

  useTask((delta) => {
    time += delta * 0.01;
    material.uniforms.time.value = time;
  });

  // useTask(
  //   async () => {
  //     await tick()
  //     time += 0.0001
  //     material.uniforms.time.value = time
  //     renderer.render(scene, camera.current)
  //   },
  //   { stage: renderStage, autoInvalidate: false }
  // )
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 0.5]}>
  <!-- <OrbitControls
    enableDamping
  /> -->
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.5} />

<T.Mesh {material}>
  <T.PlaneGeometry args={[2.5, 2.5, 100, 100]} />
</T.Mesh>

<style lang="scss">
</style>
