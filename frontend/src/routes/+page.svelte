<script lang="ts">

  import ShadyBackground from "$lib/components/ShadyBackground.svelte";
  import {Canvas} from "@threlte/core";

  let seed = 0;
</script>

<header role="presentation" on:mousemove={() => seed = Math.floor(Math.random() * 100) + 1}>

  <Canvas>
    <ShadyBackground/>
  </Canvas>

  <div class="grainy-background"></div>

  <svg>
    <filter id="grainy">
      <feTurbulence
        type="turbulence"
        baseFrequency=".2"
        numOctaves="4"
        seed="0"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      />
      <feSpecularLighting surfaceScale="12" specularConstant="1" specularExponent="20"
                          lighting-color="rgb(var(--color-gray))" x="0%" y="0%" width="100%" height="100%"
                          in="turbulence">
        <feDistantLight azimuth="3" elevation="67"></feDistantLight>
      </feSpecularLighting>
    </filter>
  </svg>

</header>


<style lang="scss">
  header {
    width: 100%;
    height: 100vh;
    //background: rgb(var(--color-black));
    overflow: hidden;
  }

  .grainy-background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: url("#grainy");
  }

  :global(canvas) {
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    position: absolute;
  }
</style>