<script lang="ts">
  export let href: string = '';
</script>

<a on:click {href}>
  <slot />
</a>

<style lang="scss">
</style>
