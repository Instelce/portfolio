<script lang="ts">
  export let color: string = 'white';
  export let size: number = 5;
</script>

<span style="--color: rgb(var(--color-{color})); --size: {size}px"></span>

<style lang="scss">
  span {
    width: var(--size);
    height: var(--size);

    background: var(--color);
    border-radius: 100px;
  }
</style>
