<script lang="ts">

  import Button from "$lib/components/Button.svelte";
</script>

<header>
  <h1>Me contacter</h1>
</header>

<section>
  <form class="form">
    <div class="flex gg-1">
      <div class="input">
        <input type="text" id="subject" placeholder="" required>
        <label for="subject">Subject</label>
      </div>
      <div class="input">
        <input type="email" id="email" placeholder="" required>
        <label for="email">Email</label>
      </div>
    </div>
    <div class="input">
      <textarea id="content" placeholder="" required></textarea>
      <label for="content">Content</label>
    </div>
    <Button type="submit" class="center" radius={.5}>
      Submit
    </Button>
  </form>
</section>

<section>
  <div class="buttons">
    <Button on:click={async () => {
      await navigator.clipboard.writeText("instelce")
    }}>
      <span>Discord</span>
      <img src="/images/icons/copy.svg" alt="Discord Logo">
    </Button>
    <Button element="a" href="https://www.instagram.com/celest_besson/" target="_blank">
      <span>Instagram</span>
      <img src="/images/logos/instagram.svg" alt="Instagram Logo">
    </Button>
    <Button element="a" href="https://www.linkedin.com/in/c%C3%A9lestin-besson/" target="_blank">
      <span>Linkedin</span>
      <img src="/images/logos/linkedin.svg" alt="Linkedin Logo">
    </Button>
  </div>
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

    .buttons {
      max-width: 45vw;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      :global(button) {
        width: 100%;
      }

      :global(.text) {
          display: flex;
          justify-content: space-between;
      }
    }

  }

</style>