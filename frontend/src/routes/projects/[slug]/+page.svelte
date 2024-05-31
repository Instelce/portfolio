<script lang="ts">
  import type {PageData} from './$types';
  import LavaLampBackground from "$lib/components/LavaLampBackground.svelte";
  import {Canvas} from "@threlte/core";
  import {projects, skills} from "../data";
  import {onMount} from "svelte";
  import Button from "$lib/components/Button.svelte";
  import Tag from '$lib/components/Tag.svelte';
  import ImageSlider from '$lib/components/ImageSlider.svelte';
  import { pluralize } from '$lib/functions/helpers';

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
  <meta property='og:image' content='{data.project.main_image}'>

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
      <div class="button-container" data-sveltekit-reload>
        <a class="prev" href="/projects/{prev}">
          <img src="/images/icons/chevron-left.svg" alt={prev}>
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

<section class="skills">
  <h3>Compétences aquises</h3>

  <div>
    {#each data.project.skills as skillId}
      <a href="/projects?skills={skills[skillId - 1].toLowerCase()}">
        <Tag name={skills[skillId - 1]} />
      </a>
    {/each}
  </div>
</section>

<section class="tecks">
  <h3>Technologies utilisées</h3>

  <div>
    {#each data.project.tecks as teck}
      <div>
        <img src="/images/tecks/{teck}.svg" alt={teck}>
      </div>
    {/each}
  </div>
</section>

<section class="buttons">
  <h3>Pour en savoir plus</h3>

  <div>
    {#if data.project.live_link}
      <Button element="a" href={data.project.live_link} target="_blank">
        <p>Voir en vrai</p>
        <svg xmlns="http://www.w3.org/2000/svg" color="white" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-arrow-up-right">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </Button>
    {/if}
    {#if data.project.github_link}
      <Button element="a" href={data.project.github_link} target="_blank">
        <p>Github</p>
        <svg xmlns="http://www.w3.org/2000/svg" color="white" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-arrow-up-right">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </Button>
    {/if}
  </div>
</section>

<section class="preview">
  <ImageSlider images={[data.project.main_image, ...data.project.images]} />
</section>

<!-- <section class="preview">
  <img src={data.project.main_image} alt={data.project.name}>
</section> -->


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

  section h3 {
    font-size: 1.2rem;
  }

  // preview
  .preview {
    padding: 4rem 4rem;
  }

  // skill tags
  .skills {
    margin-bottom: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    div {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }

  // stack
  .tecks {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: column;

    img {
      width: 4rem;
    }

    div {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
  }

  .buttons {
    margin-top: 4rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 479px) {
    header {
      margin-bottom: 4rem;

      & > div {
        height: 100%;
        padding: 4rem 0;
        display: flex;
        position: relative;
      }

      h1 {
        font-size: var(--typescale-g3);
        white-space: nowrap;
      }

      p {
        font-size: var(--typescale-1);
        text-align: center;
        white-space: nowrap;
      }
    }

    .background {
      border-radius: 0rem;
    }

    .tecks {
      padding: 0 2rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      place-items: center;
    }

    .buttons {
      flex-direction: column;
      gap: 1rem;
      padding: 0 2rem;

      & > :global(.button) {
        width: 100%;
      }
    }

    .preview {
      padding: 4rem 2rem;

      img {
        width: 100%;
        border-radius: 1rem;
      }
    }
  }
</style>