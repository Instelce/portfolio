<script lang="ts">
  import {OrbitControls} from "@threlte/extras"
  import {T} from "@threlte/core";
  import vertex from "$lib/shaders/vertex.glsl";
  import fragment from "$lib/shaders/fragment.glsl";
	import { tick } from "svelte";
  import * as THREE from "three";
  import { useThrelte, useTask } from "@threlte/core";
  import {interactivity, transitions} from "@threlte/extras";

  interactivity()
  transitions()

  const { renderStage, autoRender, renderer, scene, camera } = useThrelte()

  let time = 0
  let material = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    // wireframe: true,
    uniforms: {
      time: {value: 0},
      resolution: {value: new THREE.Vector2()}
    }
  })

  let paletteHex = [
    "#FFB5A7",
    "#FCD5CE",
    "#F8E2E0",
    "#F9DCC4",
    "#F9EDA4",
  ]
  let palette = paletteHex.map(color => new THREE.Color(color))
  material.uniforms.uColor = {value: palette}

  autoRender.set(false)

  useTask(
    async () => {
      await tick()
      time += 0.0002
      material.uniforms.time.value = time
      renderer.render(scene, camera.current)
    },
    { stage: renderStage, autoInvalidate: false }
  )
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 1]}
>
  <OrbitControls
  enableDamping
  />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.5} />

<T.Mesh material={material}>
  <T.PlaneGeometry args={[1, 1, 100, 100]}/>
</T.Mesh>

<style lang="scss">
  
</style>