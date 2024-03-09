<script lang="ts">
  import type { ColorType } from '$lib/types/helpers';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  let clazz = '';
  export { clazz as class };

  export let element: 'button' | 'a' = 'button';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let radius: number = 2;
  export let fontSize: number = 1;
  export let fontColor: ColorType = 'white';
  export let fontColorHover: ColorType = 'black';
  export let color: ColorType = 'gray';
  export let hoverColor: ColorType = 'accent';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let href: string = '#';
  export let target: string = "_self";
  export let title = "Button"
  export let isIcon = false

  // button
  let buttonRef: null | HTMLButtonElement | HTMLAnchorElement = null;
  $: buttonRect = buttonRef ? buttonRef.getBoundingClientRect() : null;

  // styles
  let padding = size === 'small' ? '.5rem 1.5rem' : size === 'medium' ? '1rem 3rem' : '2rem 6rem';
  if (isIcon) {
    padding = size === 'small' ? '.5rem 1.5rem' : size === 'medium' ? '1rem 1rem' : '2rem 2rem';
  }
  let style = `
        --color-font: rgb(var(--color-${fontColor}));
        --color-font-hover: rgb(var(--color-${fontColorHover}));
        --color-idle: rgb(var(--color-${color}));
        --color-hover: rgb(var(--color-${hoverColor}));
        --padding: ${padding};
        --radius: ${radius}rem;
        --font-size: ${fontSize}rem;`;

  // round background on hover
  let scale = tweened(0, {
    duration: 400,
    easing: cubicInOut
  });
  let position = tweened(
    { x: 0, y: 0 },
    {
      duration: 10
    }
  );
  let scrollY = 0;

  $: console.log($position, buttonRect?.top);
</script>

<svelte:window bind:scrollY />

{#if element === 'button'}
  <button
    class='button {clazz}'
    bind:this={buttonRef}
    on:click
    {type}
    {title}
    {style}
    on:mousemove={(e) => position.set({ x: e.clientX, y: e.clientY })}
    on:mouseenter={() => scale.set(2)}
    on:mouseleave={() => scale.set(0)}
  >
    <div class="text">
      <slot />
    </div>
    {#if buttonRef && buttonRect}
      <span
        class="bg"
        style="top: {scrollY + $position.y - buttonRect.top - buttonRect.width / 2}px;
                left: {$position.x - buttonRect.left - buttonRect.width / 2}px;
                width: {buttonRect.width}px;
                height: {buttonRect.width}px;
                transform: scale({$scale});"
      ></span>
    {/if}
  </button>
{:else if element === 'a'}
  <a
    class='button {clazz}'
    bind:this={buttonRef}
    on:click
    {href}
    {target}
    {title}
    {style}
    on:mousemove={(e) => position.set({ x: e.clientX, y: e.clientY })}
    on:mouseenter={() => scale.set(3)}
    on:mouseleave={() => scale.set(0)}
    {...$$props}
  >
    <div class="text">
      <slot />
    </div>
    {#if buttonRef && buttonRect}
      <span
        class="bg"
        style="
                    top: {scrollY + $position.y - buttonRect.top - buttonRect.width / 2}px;
                    left: {$position.x - buttonRect.left - buttonRect.width / 2}px;
                    width: {buttonRect.width}px;
                    height: {buttonRect.width}px;
                    transform: scale({$scale});"
      ></span>
    {/if}
  </a>
{/if}

<style lang="scss">
  button,
  a {
    --color-idle: var(--color-gray);
    --color-hover: var(--color-accent);
    --size: var(--size-medium);

    padding: var(--padding);
    position: relative;
    overflow: hidden;

    background: var(--color-idle);
    border: none;
    border-radius: var(--radius);

    color: var(--color-font);
    font-size: var(--font-size);
    //font-weight: 600;
    font-family: var(--fancy-font);

    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    .text {
      position: relative;
      z-index: 1;
      overflow: hidden;
      transition: color 0.3s ease;
      white-space: nowrap;
      text-align: center;

      display: flex;
      justify-content: center;
      gap: 1rem;

      & > :global(svg) {
        stroke: var(--color-font);
        transition: stroke 0.3s ease;
      }
    }
    &:hover {
      transform: scale(1.01);

      .text {
        color: var(--color-font-hover);

        & > :global(svg) {
          stroke: var(--color-font-hover);
        }
      }
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      background: var(--color-hover);
      border-radius: 10000px;
    }
  }
</style>
