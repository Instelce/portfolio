<script lang="ts">
  import type {ProjectType} from "$lib/types/api";
  import {capitalize} from "$lib/functions/helpers";
  import InfiniteSlide from "$lib/components/InfiniteSlide.svelte";

  export let project: ProjectType;
</script>


<a href="/projects/{project.slug}" title={project.name}>
  <article>
    <div class="img-container">
      <img src={project.image} alt="{project.name} main images">
    </div>
    <div class="content">
      <h2>{project.name}</h2>
      <img src="/images/icons/arrow-up-right.svg">
    </div>
    <div class="content-hover">
      <p>{project.description}</p>
      <div class="tecks">
        {#each project.tecks.slice(0, 5) as teck, i}
          <span>{capitalize(teck)}</span>
          {#if i < (project.tecks.length > 4 ? 4 : project.tecks.length - 1)}
            <span>─</span>
          {/if}
        {/each}
        {#if project.tecks.length > 4}
          <span>...</span>
        {/if}
      </div>
    </div>
  </article>
</a>


<style lang="scss">
  article {
    height: 20rem;
    position: relative;

    &:hover {
      .img-container {
        &::after {
          transform: scaleY(1.2);
        }
      }

      h2 {
        font-weight: 500;
      }

      .content-hover {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .img-container {
      height: 100%;
      padding: .5rem;
      background: rgb(var(--color-gray-dark));
      border: 1px solid rgb(var(--color-gray));
      border-radius: 1rem;
      overflow: hidden;
      position: relative;

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        transform-origin: bottom;
        border-radius: 4rem 4rem 0 0;
        background: rgb(var(--color-gray));
        transform: scaleY(0);
        transition: transform .2s ease-in-out;
      }

      img {
        width: 100%;
        height: 100%;
        z-index: 2;
        position: relative;
        object-fit: cover;
        border-radius: .4rem;
        border: 1px solid rgb(var(--color-gray));
      }
    }

    .content {
      padding: .5rem;
      display: flex;
      justify-content: space-between;
    }

    h2 {
      font-size: var(--typescale-g1);
    }

    .content-hover {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 1rem;
      z-index: 4;
      background: rgb(var(--color-gray));
      border-radius: 1rem;
      opacity: 0;
      transform: translateY(10%);
      transition: transform .2s ease-in-out, opacity .2s ease;
      overflow: hidden;

      p {
        font-size: var(--typescale-g1);
        padding-bottom: .5rem;
        white-space: nowrap;
        font-family: var(--fancy-font);
      }

      .tecks {
        white-space: nowrap;
        display: flex;
        gap: .3rem;
      }
    }
  }
</style>