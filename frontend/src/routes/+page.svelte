<script lang="ts">
  import LavaLampBackground from '$lib/components/unique/LavaLampBackground.svelte';
  import { Canvas } from '@threlte/core';
  import Cube from '$lib/components/unique/Cube.svelte';
  import Button from '$lib/components/Button.svelte';
  import SmoothLine from '$lib/components/SmoothLine.svelte';

  let seed = 0;

  let windowHeight = 0;
  $: lineHeight = Math.floor(windowHeight * 0.25);
  let lineWidth = 300;
</script>

<svelte:window bind:innerHeight={windowHeight} />

<!-- Header -->
<header role="presentation" on:mousemove={() => (seed = Math.floor(Math.random() * 100) + 1)}>
  <div class="lavallamp">
    <Canvas>
      <LavaLampBackground />
    </Canvas>
  </div>

  <div class="cube">
    <Canvas>
      <Cube />
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

<!-- About me -->
<section id="about-me">
  <!-- First line -->
  <div class="first">
    <div>
      <img src="/images/picture.jpg" alt="Photo of me" />
    </div>
    <div>
      <div class="dino">

      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ab voluptates sunt nisi
        eos nemo veniam suscipit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate amet nam perspiciatis.
        Sit asperiores maxime debitis minus est quaerat illum similique, molestias dignissimos, ipsum,
        totam impedit facilis ratione? Architecto.
      </p>
    </div>
  </div>

  <!-- Second line -->
  <div class="second">
    <div>
      <img src="/logo.svg" alt="logo" />
    </div>
    <div>
      <h2>About me</h2>
    </div>
    <Button fontSize={2}>Download my CV</Button>
  </div>
</section>

<!-- Projects -->
{#if lineHeight > 0}
  <section id="projects">
    <span class="line-up"></span>
    <div class="teck-grid">
      <div>
        <div class="teck">
          <img src="/images/tecks/TypeScript.svg" alt="TypeScript" />
        </div>
        <SmoothLine
          color="#5856D6"
          width={lineWidth}
          height={lineHeight}
          start={{ x: 1, y: 0 }}
          end={{ x: lineWidth, y: lineHeight - 1 }}
          controlPoint={{ x: 0, y: lineHeight }}
        />
      </div>
      <div>
        <div class="teck">
          <img src="/images/tecks/React-Dark.svg" alt="React-Dark" />
        </div>
        <SmoothLine
          color="#5856D6"
          width={lineWidth + 100 * 0.4}
          height={2}
          start={{ x: 0, y: 1 }}
          end={{ x: lineWidth + 100 * 0.4, y: 1 }}
        />
      </div>
      <div>
        <div class="teck">
          <img src="/images/tecks/Svelte.svg" alt="Svelte" />
        </div>
        <SmoothLine
          height={lineHeight}
          color="#5856D6"
          start={{ x: 1, y: lineHeight }}
          end={{ x: lineWidth, y: 1 }}
          controlPoint={{ x: 0, y: 0 }}
        />
      </div>
    </div>

    <Button
      element="a"
      size="large"
      fontSize={1.2}
      radius={100}
      color="accent-dark-2"
      hoverColor="accent"
      fontColorHover="white"
      href="/projects">See my projects</Button
    >

    <div class="teck-grid">
      <div>
        <div class="teck">
          <img src="/images/tecks/Sass.svg" alt="Sass" />
        </div>
        <SmoothLine
          color="#5856D6"
          width={lineWidth}
          height={lineHeight}
          start={{ x: 1, y: 0 }}
          end={{ x: lineWidth, y: lineHeight - 1 }}
          controlPoint={{ x: 0, y: lineHeight }}
        />
      </div>
      <div>
        <div class="teck">
          <img src="/images/tecks/Python-Dark.svg" alt="Python-Dark" />
        </div>
        <SmoothLine
          color="#5856D6"
          width={lineWidth + 100 * 0.4}
          height={2}
          start={{ x: 0, y: 1 }}
          end={{ x: lineWidth + 100 * 0.4, y: 1 }}
        />
      </div>
      <div>
        <div class="teck">
          <img src="/images/tecks/Django.svg" alt="Django" />
        </div>
        <SmoothLine
          height={lineHeight}
          color="#5856D6"
          start={{ x: 1, y: lineHeight }}
          end={{ x: lineWidth, y: 1 }}
          controlPoint={{ x: 0, y: 0 }}
        />
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  section {
    width: 100%;
    height: 110vh;
    padding: 5vw 4rem;
    position: relative;
  }

  // header -----------------
  header {
    width: 100%;
    height: 100vh;
    //background: rgb(var(--color-black));
    overflow: hidden;

    .grainy-background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      filter: url('#grainy');
    }

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

  // about me -----------------
  #about-me {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40vh 20vh;
    gap: 2rem;
    place-content: center;

    .first,
    .second {
      gap: 2rem;
    }

    .first div,
    .second div {
      height: 100%;
      background: rgb(var(--color-gray-dark));
      border-radius: 2rem;
      padding: 2rem;
      display: inline-block;
    }

    .first {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      div:nth-child(1) {
        max-height: 40vh;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.4rem;
        }
      }

      div:nth-child(2) {
        padding: 2rem 4rem;
        grid-column: 2 / 4;

        display: grid;
        place-items: center;

        p {
          font-size: var(--typescale-g2);
          line-height: 120%;
          font-weight: 400;
        }
      }
    }

    .second {
      display: grid;
      grid-template-columns: 20vh repeat(3, 1fr);

      div:nth-child(1) {
        display: grid;
        place-items: center;

        img {
          /* width: 40px;
					height: 40px; */
          animation: rotate 30s linear infinite;
        }
      }

      div:nth-child(2) {
        padding: 0 4rem;
        grid-column: 2 / 4;

        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
          font-size: var(--typescale-g4);
        }
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  // projects -----------------
  #projects {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    place-items: center;

    .line-up {
      width: 1px;
      height: 60%;
      position: absolute;
      left: 50%;
      top: -10%;
      transform: translateX(-50%);
      background: linear-gradient(0deg, rgb(var(--color-accent)), transparent);
    }

    .teck-grid {
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;

      canvas {
        position: absolute;
      }

      & > div:nth-child(1) {
        position: absolute;
        bottom: 49.33%;
        right: 0;

        .teck {
          transform: translateX(-50%);
        }
      }
      & > div:nth-child(2) {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);

        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      & > div:nth-child(3) {
        position: absolute;
        right: 0;
        top: 50%;

        display: flex;
        flex-direction: column-reverse;

        .teck {
          transform: translateX(-50%);
        }
      }
    }

    .teck-grid:nth-child(4) {
      transform: rotate(180deg);

      .teck {
        transform: rotate(180deg) !important;
      }

      & > div:nth-child(1) .teck {
        transform: translateX(-50%) rotate(180deg) !important;
      }

      & > div:nth-child(3) .teck {
        transform: translateX(-50%) rotate(180deg) !important;
      }
    }

    .teck {
      width: 100px;
      height: 100px;
      padding: 0.4rem;
      display: block;
      background: rgb(var(--color-gray));
      border-radius: 1.4rem;
    }
  }
</style>
