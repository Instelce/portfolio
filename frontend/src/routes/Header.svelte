<script>
  import {Canvas} from "@threlte/core";
  import LavaLampBackground from "$lib/components/LavaLampBackground.svelte";
  import Cube from "$lib/components/unique/Cube.svelte";
</script>


<!-- Header -->
<header role="presentation" on:mousemove={() => (seed = Math.floor(Math.random() * 100) + 1)}>
  <div class="lavallamp">
    <Canvas>
      <LavaLampBackground/>
    </Canvas>
  </div>

  <div class="cube">
    <Canvas>
      <Cube/>
    </Canvas>
  </div>

  <p>click me</p>

  <!-- <div class="grainy-background"></div> -->

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
      <feSpecularLighting
        surfaceScale="12"
        specularConstant="1"
        specularExponent="20"
        lighting-color="rgb(var(--color-gray))"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        in="turbulence"
      >
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
    border-bottom: 1px solid rgb(var(--color-gray));

    .lavallamp,
    .cube {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: -1;
    }

    .lavallamp {
      position: absolute;
    }

    .lavallamp canvas {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }

    .cube {
      z-index: 1;
    }

    .cube canvas {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }
  }
</style>