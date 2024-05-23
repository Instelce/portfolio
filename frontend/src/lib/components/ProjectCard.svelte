<script lang="ts">
  import type {ProjectType} from "$lib/types/api";
  import {capitalize} from "$lib/functions/helpers";
  import InfiniteSlide from "$lib/components/InfiniteSlide.svelte";
  import Portal from "svelte-portal";
  import {browser} from '$app/environment'

  export let project: ProjectType;

  let isHovered = false;
  let documentElement;
</script>

<svelte:document />

<a href="/projects/{project.slug}" title={project.name} on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
  <article>
    <div class="img-container">
      <img src={project.image} alt="{project.name} main images">
    </div>
    <div class="content">
      <h2>{project.name}</h2>
      <img src="/images/icons/arrow-up-right.svg">
    </div>
</a>

{#if browser}
  <Portal target={document.body}>
    <div class="content-hover-container">
      <div class="content-hover {isHovered ? "hovered" : ""}">
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

        <!-- <div class="wave">
          {#each new Array(100) as i}
            <svg width="15" height="6" viewBox="0 0 108 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 41C28.5 41 29 0.99997 57 0.999969C85 0.999969 83 41 108 41" stroke="#5856D6"/>
            </svg>
          {/each}
        </div> -->
      </div>
    </div>
  </Portal>
{/if}

<style lang="scss">
  article {
    height: 20rem;
    position: relative;

    transition: transform .2s cubic-bezier(.62,1,.9,.67);

    &:hover {
      transform: scale(1.02);

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
  }

  .content-hover-container {
    width: 100%;
    padding: 1rem 12% 0rem 12%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
  }

  .content-hover {
      background: rgb(var(--color-gray));
      // border-radius: 1rem 1rem 0 0;
      // padding: 1rem 2rem 2rem 2rem;
      // border-radius: 1rem 1rem 0 0;
      padding: 1rem 2rem;
      border-radius: 1rem;
      margin-bottom: 1rem;
      opacity: 0;
      transform: translateY(100%);
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

      // .wave {
      //   width: 100%;
      //   height: 1rem;
      //   position: absolute;
      //   bottom: 0;
      //   left: 0;
      //   background: rgb(var(--color-gray-dark));

      //   svg {
      //     // height: ;
      //   }
      // }

      &.hovered {
        opacity: 1;
        transform: translateY(0);
      }
    }

  @media screen and (max-width: 479px) {
    article {
      height: 15rem;
    }
  }
</style>