<script lang="ts">
  export let href: string = '';
  export let text = '';
</script>

<a on:click {href}>
  <span>
    {#each text as letter, i}
      <span style="--delay: {i * 0.02}s">{letter}</span>
    {/each}
  </span>
  <span>
    {#each text as letter, i}
      <span style="--delay: {i * 0.02}s">{letter}</span>
    {/each}
  </span>
</a>

<style lang="scss">
  a {
    height: 16px;
    position: relative;
    overflow: hidden;
    line-height: 16px;

    display: flex;
    flex-direction: column;

    & > span {
      display: inline-block;
      //height: 16px;

      span {
        position: relative;
        display: inline-block;
        transition: transform .3s ease-in-out var(--delay);
      }
    }

    &:hover {
      & > span span {
        transform: translateY(-100%);
      }
    }
  }

  @media screen and (max-width: 479px) {
    a {
      line-height: 17px;
    }
  }
</style>
