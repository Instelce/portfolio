<script lang="ts">
  export let duration = 10;
</script>

<div class="slider">
  <div class="slide" style="--t: {duration}s">
    <slot />
  </div>
  <div class="slide" style="--t: {duration}s">
    <slot />
  </div>
</div>

<style lang="scss">
  .slider {
    overflow: hidden;
    white-space: nowrap;
  }

  .slide {
    display: inline-flex;

    &:nth-child(1) {
      animation: slide-one var(--t) linear infinite;
    }

    &:nth-child(2) {
      animation: slide-one var(--t) linear infinite;
    }

    & > :global(div) {
      display: inline-block;
      margin: 0 .5rem;
      position: relative;
    }
  }

  @keyframes slide-one {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>