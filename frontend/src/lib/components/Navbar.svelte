<script lang="ts">
    import Dot from "$lib/components/Dot.svelte";

    let date = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(new Date())
</script>

<div class="navbar">
    <div>
        <img src="/logo.svg" alt="logo" width="20" height="20">
        <span>Portfolio</span>
    </div>

    <div class="center">
        <p>Lannion, france</p>
        <Dot/>
        <p>{date}</p>
    </div>

    <nav>
        <ul>
            <li><a href="/">Projects</a></li>
            <li><a href="/">About me</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
</div>

<style lang="scss">
  .navbar {
    width: 100%;
    padding: 1rem 4rem;
    position: fixed;

    border-bottom: 1px solid rgb(var(--color-black));

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;
    font-size: 12px;

    div {
      display: flex;
      align-items: center;

      &:nth-child(1) {
        display: flex;
        gap: 1rem;
      }
    }

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      gap: .5rem;
    }

    ul {
      display: flex;
      gap: 2rem;
    }
  }
</style>
