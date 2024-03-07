<script lang="ts">
  import type {ProjectType} from "$lib/types/api";

  export let project: ProjectType;
</script>


<a href="/projects/{project.slug}">
  <article>
    <div class="img-container">
      <img src={project.image} alt="{project.name} main images">
    </div>
    <div class="content">
      <h2>{project.name}</h2>
      <img src="/images/icons/arrow-up-right.svg">
    </div>
  </article>
</a>


<style lang="scss">
  article {
    height: 20rem;
    padding: .5rem;
    position: relative;


    &:hover {
      .img-container {
        &::after {
          transform: scaleY(1.2);
        }
      }

      h2 {
        font-weight: 500;
      }
    }

    .img-container {
      height: 100%;
      padding: .5rem;
      background: rgb(var(--color-gray-dark));
      border: 1px solid rgb(var(--color-gray));
      border-radius: 1rem;
      overflow: hidden;
      position: relative;

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        transform-origin: bottom;
        border-radius: 4rem 4rem 0 0;
        background: rgb(var(--color-gray));
        transform: scaleY(0);
        transition: transform .2s ease-in-out;
      }

      img {
        width: 100%;
        height: 100%;
        z-index: 2;
        position: relative;
        object-fit: cover;
        border-radius: .4rem;
        border: 1px solid rgb(var(--color-gray));
      }
    }

    .content {
      padding: .5rem;
      display: flex;
      justify-content: space-between;
    }

    h2 {
      font-size: var(--typescale-g1);
    }
  }
</style>