<script lang="ts">
  import type { ColorType, Point } from '$lib/types/helpers';
  import { onMount } from 'svelte';
  import { cubicBezier } from '$lib/functions/cubicBezier';

  let clazz = '';
  export { clazz as class };

  export let width: number = 300;
  export let height: number = 300;
  export let start: Point;
  export let end: Point;
  export let controlPoint: Point = { x: width / 2, y: height / 2 };
  export let color: string = 'purple';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const segments = 100;

      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      cubicBezier(ctx, start, controlPoint, end, segments);
    }
  });
</script>

<canvas class={clazz} {width} {height} bind:this={canvas}></canvas>

<style>
</style>
