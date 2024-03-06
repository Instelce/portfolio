<script lang="ts">
  import type { ColorType, Point } from '$lib/types/helpers';
  import { onMount, tick } from 'svelte';
  import { cubicBezier } from '$lib/functions/cubicBezier';

  let clazz = '';
  export { clazz as class };

  export let width: number = 300;
  export let height: number = 300;
  export let start: Point;
  export let end: Point;
  export let controlPoint: Point = { x: width / 2, y: height / 2 };
  export let color: string = 'purple';
  export let followPoint = true
  let points: Point[] = [];

  let canvas: HTMLCanvasElement;
  let pointCanvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    const ctxPoint = pointCanvas.getContext('2d');

    if (ctx && ctxPoint) {
      const segments = 100;

      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctxPoint.strokeStyle = color;
      ctxPoint.fillStyle = color;
      ctxPoint.lineWidth = 1;

      // draw the line
      points = cubicBezier(ctx, start, controlPoint, end, segments);

      // draw point which move along the line
      requestAnimationFrame(async () => {
        let i = 0;
        const draw = async () => {
          ctxPoint.clearRect(0, 0, width, height);
          ctxPoint.beginPath();
          ctxPoint.arc(points[i].x, points[i].y, 5, 0, Math.PI * 2);
          ctxPoint.fill();
          ctxPoint.stroke();
          i++;
          if (i >= points.length - 1) i = 0;

          await new Promise(resolve => setTimeout(resolve, 2));
          await tick();
          requestAnimationFrame(() => {
            draw();
          });
        };
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
        draw();
      })
    }
  });
</script>

<div class={clazz} >
  <canvas {width} {height} bind:this={canvas}></canvas>
  <canvas class="point" {width} {height} bind:this={pointCanvas}></canvas>
</div>

<style>
  div {
    position: relative;
  }
  .point {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
