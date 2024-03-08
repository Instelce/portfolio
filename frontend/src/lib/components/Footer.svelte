<script>
  import Dot from './Dot.svelte';
  import Button from "$lib/components/Button.svelte";
</script>

<footer>
  <div class="up">
    <Button element="a" href="https://github.com/Instelce/" title="Github" isIcon={true} color="gray-dark">
      <img src="/images/logos/github.svg" alt="Github logo" width="30"/>
    </Button>
    <Button element="a" href="mailto:celestin.besson@proton.me" title="Email" isIcon={true} color="gray-dark">
      <img src="/images/logos/at-sign.svg" alt="Alt sign : email" width="30"/>
    </Button>
    <Button element="a" href="https://www.instagram.com/celest_besson/" title="Instagram" isIcon={true}
            color="gray-dark">
      <img src="/images/logos/instagram.svg" alt="Instagram logo" width="30"/>
    </Button>
  </div>
  <div class="bottom">
    <p>@2024 Célestin Besson</p>
    <Dot/>
    <a href="/">Legal mentions</a>
  </div>
</footer>

<style lang="scss">
  footer {
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
  }

  .up {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .bottom {
    width: 100%;
    padding: 1rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
</style>
