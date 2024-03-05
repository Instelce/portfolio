<script lang="ts">
  import {onDestroy, onMount, tick} from 'svelte';
  import {spring} from 'svelte/motion'
  import {T, useTask, useThrelte, useLoader} from "@threlte/core";
	import { AmbientLight, BoxGeometry, PerspectiveCamera, Mesh, MeshStandardMaterial, PlaneGeometry, Group } from "three";
  import {TextureLoader, Color} from 'three'
	import { OrbitControls, RoundedBoxGeometry, Text3DGeometry, Text } from '@threlte/extras';
	import { text } from '@sveltejs/kit';
 
  const { renderStage, autoRender, renderer, scene, camera } = useThrelte()

  const {load} = useLoader(TextureLoader)

  const textures = load({
    age: '/images/age.png',
    me: '/images/me.png'
  })

  let mesh: Mesh;
  let rotate = 0
  let time = 0

  const mouseOptions = {damping: .9, shiftness: .1}
  let mouseX = spring(0, mouseOptions)
  let mouseY = spring(0, mouseOptions)

  // useTask((delta) => {
  //   if (!mesh) return
  //   mesh.rotation.y += delta * 0.5
  //   mesh.rotation.x += delta * 0.5
  // })

  const manageMouse = (e: MouseEvent) => {
    const {innerWidth, innerHeight} = window
    const {clientX, clientY} = e
    const x = (-0.5 + clientX / innerWidth);
    const y = ((-0.5 + clientY / innerHeight) * .5);
    mouseX.update(_ => x)
    mouseY.update(_ => y)
  }

  onMount(() => {
    window.addEventListener('mousemove', manageMouse)
  })
  onDestroy(() => {
    window.removeEventListener('mousemove', manageMouse)
  })

</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 5]}>
  <OrbitControls
    enableDamping
    enableZoom={false}
    enablePan={false}
    minPolarAngle={Math.PI * 0.5}
    maxPolarAngle={Math.PI * 0.5}
  />
</T.PerspectiveCamera>

<T.Mesh bind:ref={mesh} rotation={[$mouseY, $mouseX, 0]}>
  <RoundedBoxGeometry args={[2, 2, 2]} radius={.2} />

  {#if $textures}
    <!-- <T.MeshStandardMaterial map={$textures.age} attach={(parent, self) => {
      if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
      else parent.material = [self]
    }} />
    <T.MeshStandardMaterial map={$textures.me} attach={(parent, self) => {
      if (Array.isArray(parent.material)) parent.material = [...parent.material, self]
      else parent.material = [self]
    }} /> -->
    <T.MeshStandardMaterial color={new Color("#121212")} />
    <!-- <T.MeshToonMaterial color={new Color("#5856D6")} /> -->
  {/if}
  <T.DirectionalLight position={[0, 2, 2]} intensity={1.5} />
</T.Mesh>

{#if $textures}
<T.Group position={[0,0,0]}>
    <!-- Me text -->
    <T.Mesh position={[$mouseX, -$mouseY, 1.01]} rotation={[$mouseY, $mouseX, 0]}>
      <Text text={`Célestin\nBesson`} font="/fonts/satoshi/Satoshi-Bold.ttf" fontSize={.4} textAlign='center' position={[-((8 * .18) / 2), .55, 0]} />
    </T.Mesh>

    <T.Mesh position={[1.01,$mouseY,0]} rotation={[0,Math.PI / 2 + $mouseX,$mouseY]}>
      <Text text={`18 ans`} font="/fonts/satoshi/Satoshi-Bold.ttf" fontSize={.4} textAlign='center' position={[-((6 * .18) / 2), .25, 0]} />
    </T.Mesh>
  </T.Group>
{/if}

<T.AmbientLight intensity={2} />

<style lang="scss">
  
</style>