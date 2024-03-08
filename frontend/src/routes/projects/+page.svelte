<script lang="ts">
  import type {PageData} from './$types';
  import LavaLampBackground from "$lib/components/LavaLampBackground.svelte";
  import {Canvas} from "@threlte/core";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <meta name="description" content="Mes projects"/>
  <meta name="keywords" content="instelce, célestin besson, projects, projet">

  <meta property='og:title' content='Projects ─ Instelce'>
  <meta property="og:description" content="Mes projects">
  <meta property='og:type' content='website'>
  <meta property='og:image' content='/og-image.png'>

  <title>Projects ─ Instelce</title>
</svelte:head>


<header>
  <h1>Mes projets</h1>

  <div class="background">
    <Canvas>
      <LavaLampBackground size={6}/>
    </Canvas>
  </div>
</header>


<section>
  {#each data.projects as project}
    <ProjectCard {project}/>
  {/each}
</section>


<style lang="scss">

  section {
    min-height: 40vh;
    padding: 4rem 12%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 4rem;
  }

  header {
    height: 40vh;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid rgb(var(--color-gray));

    h1 {
      font-size: var(--typescale-g4);
    }

    .background {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  @media screen and (max-width: 479px) {
    section {
      padding: 4rem 2rem;
      grid-template-columns: 1fr;
    }
  }

</style>


