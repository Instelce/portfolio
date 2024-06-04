<script lang="ts">
  import type { PageData } from './$types';
  import LavaLampBackground from '$lib/components/LavaLampBackground.svelte';
  import { Canvas } from '@threlte/core';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import Tag from '$lib/components/Tag.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  export let data: PageData;
  $: console.log(data.selectedSkills);

  let projects = data.projects;
  let skills: { name: string; selected: boolean }[] = [];
  let cardIsHovered = false;

  data.skills.forEach((s) => {
    if (data.selectedSkills.includes(s.toLowerCase())) {
      skills.push({ name: s, selected: true });
    } else {
      skills.push({ name: s, selected: false });
    }
  });

  $: selectedSkills = data.selectedSkills;
</script>

<svelte:head>
  <meta name="description" content="Mes projects" />
  <meta name="keywords" content="instelce, célestin besson, projects, projet" />

  <meta property="og:title" content="Projects ─ Instelce" />
  <meta property="og:description" content="Mes projects" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/og-image.png" />

  <title>Projects ─ Instelce</title>
</svelte:head>

<header>
  <h1>Mes projets</h1>

  <div class="background">
    <Canvas>
      <LavaLampBackground size={6} />
    </Canvas>
  </div>
</header>

<div class="tags">
  {#each skills as skill}
    <!-- href="/projects?skills={skill.name.toLowerCase()}" -->
    <button
      on:click={(e) => {
        let sk = skill.name.toLowerCase();
        if (selectedSkills.includes(sk)) {
          selectedSkills = selectedSkills.filter((s) => s !== sk);
          skills = skills.map((s) => {
            if (s.name === skill.name) {
              return { name: s.name, selected: false };
            }
            return s;
          });
        } else {
          selectedSkills.push(skill.name.toLowerCase());
          skills = skills.map((s) => {
            if (s.name === skill.name) {
              return { name: s.name, selected: true };
            }
            return s;
          });
        }

        const searchParams = new URLSearchParams();
        searchParams.set('skills', selectedSkills.join(','));
        goto(`?${searchParams}`);

        console.log("s", selectedSkills.length, projects.length, data.projects.length);

        projects = data.projects.filter((p) => {
          return p.skills.some((s) => selectedSkills.includes(data.skills[s - 1].toLowerCase()));
        });

        if (selectedSkills.length == 0 && projects.length != data.projects.length) {
          projects = data.projects;
        }

      }}
    >
      <Tag name={skill.name} selected={skill.selected} />
    </button>
  {/each}
</div>

<section data-sveltekit-reload>
  {#each projects as project}
    <ProjectCard {project} bind:imHovered={cardIsHovered} otherIsHovered={cardIsHovered} />
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

  .tags {
    padding: 2rem 1rem;
    padding-bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media screen and (max-width: 479px) {
    section {
      padding: 4rem 2rem;
      grid-template-columns: 1fr;
    }
  }
</style>
