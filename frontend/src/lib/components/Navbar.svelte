<script lang="ts">
  import Dot from '$lib/components/Dot.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment';

  let ref: HTMLDivElement;

  let date = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  let scrollY = 0;
  $: bgColor = scrollY > 10 ? 'rgb(var(--color-black))' : 'transparent';
</script>

<svelte:window bind:scrollY />

<div class="navbar" bind:this={ref} style="background: {bgColor};">
  <div>
    <img src="/logo.svg" alt="logo" width="20" height="20" />
    <a href="/">Instelce</a>
  </div>

  <div class="center">
    <p>Lannion, france</p>
    <Dot />
    <p>{date}</p>
  </div>

  <nav>
    <ul>
      <li>
        <a href="/">Projects</a>
      </li>
      <li>
        <a href="/">About me</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  </nav>
</div>

<style lang="scss">
  .navbar {
    width: 100%;
    padding: 0 4rem;
    position: fixed;
    z-index: 100;

    border-bottom: 1px solid rgb(var(--color-black));

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;
    font-family: var(--fancy-font);
    font-weight: 500;

    transition: background-color 0.3s ease-in-out;

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
      gap: 0rem;

      a {
        height: 100%;
        padding: 1rem 2rem;
        position: relative;
        display: block;
        overflow: hidden;

        &:hover {
          color: rgb(var(--color-accent));
          &::after {
            transform: scaleY(1);
          }
        }
      }
    }
  }
</style>
