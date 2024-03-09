<script lang="ts">

  import Button from "$lib/components/Button.svelte";
</script>

<header>
  <h1>Me contacter</h1>
</header>

<section>
  <Button on:click={async () => {
    await navigator.clipboard.writeText("instelce")
  }}>
    <span>Discord</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  </Button>
  <Button on:click={async () => {
    await navigator.clipboard.writeText("celestin.besson@proton.me")
  }}>
    <span>Email</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  </Button>
  <Button on:click={async () => {
    await navigator.clipboard.writeText("celest_besson")
  }}>
    <span>Instagram</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  </Button>
</section>

<style lang="scss">

  header {
    width: 100%;
    height: 30vh;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: var(--typescale-g4);
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
    gap: 1rem;
  }

</style>