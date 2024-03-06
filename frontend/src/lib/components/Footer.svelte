<script>
  import Dot from './Dot.svelte';
</script>

<footer>
  <div class="up">
    <a href="https://github.com/Instelce/">
      <img src="/images/logos/github.svg" alt="Github logo" width="50" />
    </a>
  </div>
  <div class="bottom">
    <p>@2024 Célestin Besson</p>
    <Dot />
    <a href="/">Legal mentions</a>
  </div>
</footer>

<style>
  footer {
    width: 100%;
    display: block;
    position: relative;

    display: flex;
    flex-direction: column;
  }

  .up {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
