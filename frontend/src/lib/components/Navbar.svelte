<script lang="ts">
  import Dot from '$lib/components/Dot.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment';
  import LinkSlide from './LinkSlide.svelte';
  import { text } from '@sveltejs/kit';
  import {writable} from "svelte/store";

  let ref: HTMLDivElement;

  let date = new Intl.DateTimeFormat('fr', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  let scrollY = 0;
  $: bgColor = scrollY > 10 ? 'rgb(var(--color-black))' : 'transparent';

  let toggle = writable(false)
</script>

<svelte:window bind:scrollY />

<div class="navbar" bind:this={ref} style="background: {bgColor};">
  <div class="logo">
    <img src="/logo.svg" alt="logo" width="20" height="20" />
    <a href="/">Instelce</a>
  </div>

  <div class="center">
    <p>Lannion, france</p>
    <Dot />
    <p>{date}</p>
  </div>

  <nav class:show={$toggle}>
    <ul>
      <li>
        <LinkSlide href="/projects" text="Projets" />
      </li>
      <li>
        <LinkSlide href="/#about-me" text="A propos" />
      </li>
      <li>
        <LinkSlide href="/contact" text="Contact" />
      </li>
    </ul>
  </nav>

  <button class="toggle" class:rotate={$toggle} on:click={() => (toggle.update(t => !t))} >
  </button>
</div>

<style lang="scss">
  .navbar {
    width: 100%;
    padding: 1rem 4rem;
    position: fixed;
    z-index: 100;

    border-bottom: 1px solid rgb(var(--color-black));

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;
    font-family: var(--fancy-font);
    font-weight: 500;

    transition: background-color .2s ease-in-out;

    div {
      display: flex;
      align-items: center;

      &:nth-child(1) {
        display: flex;
        gap: 1rem;
      }
    }

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      gap: 0.5rem;
    }

    ul {
      display: flex;
      gap: 2rem;
    }

    .toggle {
      display: none;
    }
  }

  // responsive ------------------------

  /* start of large tablet styles */
  @media screen and (max-width: 991px) {

  }

  /* start of medium tablet styles */
  @media screen and (max-width: 767px) {

  }

  /* start of phone styles */
  @media screen and (max-width: 479px) {
    .navbar {
      padding: 1rem 2rem;

      .center {
        display: none;
      }

      nav {
        width: 100%;
        left: 0;
        bottom: 0;
        position: absolute;
        z-index: -1;

        opacity: 0;
        background: rgb(var(--color-black));
        transform: translateY(100%);

        transition: opacity .3s ease;

        &.show {
          opacity: 1;
        }
      }

      ul {
        padding: 1rem;
        height: 100%;
        align-items: center;
        justify-content: center;

        a {
          font-size: var(--typescale-g1);
        }
      }

      .toggle {
        width: 30px;
        height: 10px;
        display: flex;
        flex-direction: column;
        position: relative;
        box-sizing: content-box;
        padding: .2rem 0;

        &::after,
        &::before {
          content: "";
          width: 100%;
          height: 1px;
          display: block;
          position: absolute;
          left: 0;

          border-radius: 5px;
          background: rgb(var(--color-white));
          transition: transform .3s ease, top .3s ease;
        }

        &::after {
          bottom: 0;
        }

        &.rotate {
          &::before {
            top: 50%;
            transform: rotate(-45deg) translateY(-50%) scale(0.8);
          }
          &::after {
            top: 50%;
            transform: rotate(45deg) translateY(-50%) scale(0.8);
          }
        }

      }
    }

  }
</style>
