<script lang="ts">
  import type {PageData} from './$types';
  import LavaLampBackground from "$lib/components/LavaLampBackground.svelte";
  import {Canvas} from "@threlte/core";
  import {projects} from "../data";
  import {onMount} from "svelte";
  import Button from "$lib/components/Button.svelte";

  export let data: PageData;

  $: prev = data.project.id === 1 ? projects.find(p => p.id === projects.length)?.slug : projects.find(p => p.id === data.project.id - 1)?.slug
  $: next = data.project.id === projects.length ? projects.find(p => p.id === 1)?.slug : projects.find(p => p.id === data.project.id + 1)?.slug

  $: console.log(prev, next)

  let palette: string[];

  onMount(() => {
    palette = data.project.palette
  })
</script>

<svelte:head>
  <meta name="description" content="{data.project.description}"/>
  <meta name="keywords" content="instelce, célestin besson, project, projet, {data.project.name}">

  <meta property='og:title' content='{data.project.name} ─ Instelce'>
  <meta property="og:description" content="{data.project.description}">
  <meta property='og:type' content='website'>
  <meta property='og:image' content='{data.project.image}'>

  <title>{data.project.name} ─ Instelce</title>
</svelte:head>

<header>
  <div>
    <div class="background">
      {#if (palette)}
        <Canvas>
          <LavaLampBackground size={10} paletteHex={palette}/>
        </Canvas>
      {/if}
      <div class="button-container">
        <a class="prev" href="/projects/{prev}">
          <img src="/images/icons/chevron-right.svg" alt={prev} style="transform: rotate(180deg)">
        </a>
        <a class="next" href="/projects/{next}">
          <img src="/images/icons/chevron-right.svg" alt={next}>
        </a>
      </div>
    </div>

    <h1>{data.project.name}</h1>
    <p>{data.project.description}</p>

  </div>
</header>

<section class="tecks">
  {#each data.project.tecks as teck}
    <div>
      <img src="/images/tecks/{teck}.svg" alt={teck}>
    </div>
  {/each}
</section>

<section class="preview">
  <img src={data.project.image} alt={data.project.name}>
</section>


<style lang="scss">
  header {
    width: 100%;
    height: 40vh;
    margin-bottom: 4rem;

    & > div {
      height: 100%;
      padding: 4rem;
      display: flex;
      position: relative;
    }

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: var(--typescale-g4);
      mix-blend-mode: difference;
    }

    p {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      font-family: var(--fancy-font);
      font-size: var(--typescale-g1);
    }
  }

  .button-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    display: flex;
    justify-content: space-between;
  }

  .prev, .next {
    width: 8%;
    height: 100%;
    position: absolute;
    top: 0;
    //background: rgb(var(--color-gray-dark));
    background: transparent;
    display: grid;
    place-content: center;

    img {
      width: 2rem;
      mix-blend-mode: difference;
      transition: transform .3s ease;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }

  .next {
    right: 0;
  }

  .background {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    overflow: hidden;
    border: 1px solid rgb(var(--color-gray));
    position: relative;
  }

  // preview
  .preview {
    padding: 4rem 4rem;
    display: grid;
    place-content: center;

    img {
      width: 60vw;
      border-radius: 2rem;
      border: 1px solid rgb(var(--color-gray));
    }
  }

  // stack
  .tecks {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    img {
      width: 4rem;
    }
  }
</style>