<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import SmoothLine from '$lib/components/SmoothLine.svelte';
  import Header from "./Header.svelte";
  import InfiniteSlide from "$lib/components/InfiniteSlide.svelte";

  let windowHeight = 0;
  let windowWidth = 0;
  $: lineHeight = Math.floor(windowHeight * 0.25);
  let lineWidth = 300;
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth}/>

<svelte:head>
  <title>Instelce</title>
</svelte:head>

<Header/>

<!-- About me -->
<section id="about-me">
  <div>
    <h2>A propos</h2>
    <img src="/logo.svg" alt="logo" width="60"/>
  </div>
  <div>
    <div>
      <img src="/images/picture.jpg" alt="Photo of me"/>
    </div>
    <div>
      <div>
        <p>
          Je suis étudiant à l'IUT de Lannion en BUT Informatique. J'adore le développement en général, mais en ce
          moment
          surtout ce qui tourne autour du web. Mon but serait de devenir développeur Full Stack après avoir fini mon
          cursus. <br><br>
          Actuellement, je suis à la recherche d'une alternance pour l'année prochaine (septembre 2024), afin de
          progresser et en apprendre toujours plus
          sur le monde de l'informatique (tellement vaste et passionnant 😍).
        </p>
      </div>
      <Button element="a" href="/documents/cv-v2.pdf" target="_blank" download="CV_Célestin_Besson"
              fontSize={windowWidth > 479 ? 1.777 : 1.333}
              radius={windowWidth > 479 ? 2 : 100}>Télécharger mon CV
      </Button>
    </div>
  </div>
</section>

<!-- Projects -->
{#if lineHeight > 0}
  <section id="projects">
    <span class="line-up"></span>

    <div class="teck-grid">
      <div>
        <div class="teck">
          <img src="/images/tecks/typescript.svg" alt="TypeScript"/>
        </div>
        <SmoothLine
          color="#5856D6"
          width={lineWidth}
          height={lineHeight}
          start={{ x: 1, y: 0 }}
          end={{ x: lineWidth, y: lineHeight - 1 }}
          controlPoint={{ x: 0, y: lineHeight }}
        />
      </div>
      <div>
        <div class="teck">
          <img src="/images/tecks/react.svg" alt="React-Dark"/>
        </div>
        <SmoothLine
          color="#5856D6"
          width={lineWidth + 100 * 0.4}
          height={20}
          start={{ x: 0, y: 13 }}
          end={{ x: lineWidth + 100 * 0.4, y: 13 }}
        />
      </div>
      <div>
        <div class="teck">
          <img src="/images/tecks/svelte.svg" alt="Svelte"/>
        </div>
        <SmoothLine
          height={lineHeight}
          color="#5856D6"
          start={{ x: 1, y: lineHeight }}
          end={{ x: lineWidth, y: 1 }}
          controlPoint={{ x: 0, y: 0 }}
        />
      </div>
    </div>

    <Button
      element="a"
      size={windowWidth > 479 ? "large" : "medium"}
      fontSize={windowWidth > 479 ? 1.777 : 1.333}
      radius={100}
      color="accent-dark-2"
      hoverColor="accent"
      fontColorHover="white"
      href="/projects"
    >Voir mes projets
    </Button>

    <div class="teck-grid">
      <div>
        <div class="teck">
          <img src="/images/tecks/sass.svg" alt="Sass"/>
        </div>
        <SmoothLine
          color="#5856D6"
          width={lineWidth}
          height={lineHeight}
          start={{ x: 1, y: 0 }}
          end={{ x: lineWidth, y: lineHeight - 1 }}
          controlPoint={{ x: 0, y: lineHeight }}
        />
      </div>
      <div>
        <div class="teck">
          <img src="/images/tecks/python.svg" alt="Python-Dark"/>
        </div>
        <SmoothLine
          color="#5856D6"
          width={lineWidth + 100 * 0.4}
          height={20}
          start={{ x: 0, y: 13 }}
          end={{ x: lineWidth + 100 * 0.4, y: 13 }}
        />
      </div>
      <div>
        <div class="teck">
          <img src="/images/tecks/django.svg" alt="Django"/>
        </div>
        <SmoothLine
          height={lineHeight}
          color="#5856D6"
          start={{ x: 1, y: lineHeight }}
          end={{ x: lineWidth, y: 1 }}
          controlPoint={{ x: 0, y: 0 }}
        />
      </div>
    </div>

    <div class="tecks">
      <InfiniteSlide>
        <div class="teck">
          <img src="/images/tecks/typescript.svg" alt="Django"/>
        </div>
        <div class="teck">
          <img src="/images/tecks/react.svg" alt="Django"/>
        </div>
        <div class="teck">
          <img src="/images/tecks/svelte.svg" alt="Django"/>
        </div>
        <div class="teck">
          <img src="/images/tecks/sass.svg" alt="Django"/>
        </div>
        <div class="teck">
          <img src="/images/tecks/python.svg" alt="Django"/>
        </div>
        <div class="teck">
          <img src="/images/tecks/django.svg" alt="Django"/>
        </div>
      </InfiniteSlide>
    </div>
  </section>
{/if}

<style lang="scss">
  section {
    width: 100%;
    height: 110vh;
    padding: 5vw 4rem;
    position: relative;
  }

  // about me -----------------
  #about-me {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 12%;

    & > div:nth-child(1) {
      padding: 1rem 2rem;
      background: rgb(var(--color-gray-dark));
      border-radius: 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: var(--typescale-g4);
      }

      img {
        animation: rotate 30s linear infinite;
      }
    }

    & > div:nth-child(2) {
      width: 100%;
      display: grid;
      grid-template-columns: 20vw 1fr;
      gap: 2rem;

      img {
        width: 100%;
        border-radius: 2rem;
      }

      & > div:nth-child(2) {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;

        p {
          font-size: var(--typescale-g2);
        }
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  // projects -----------------
  #projects {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    place-items: center;

    .line-up {
      width: 1px;
      height: 60%;
      position: absolute;
      left: 50%;
      top: -10%;
      transform: translateX(-50%);
      background: linear-gradient(0deg, rgb(var(--color-accent)), transparent);
    }

    .teck-grid {
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;

      & > div:nth-child(1) {
        position: absolute;
        bottom: 49.33%;
        right: 0;

        .teck {
          transform: translateX(-50%);
        }
      }

      & > div:nth-child(2) {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);

        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      & > div:nth-child(3) {
        position: absolute;
        right: 0;
        top: 50%;

        display: flex;
        flex-direction: column-reverse;

        .teck {
          transform: translateX(-50%);
        }
      }
    }

    .teck-grid:nth-child(4) {
      transform: rotate(180deg);

      .teck {
        transform: rotate(180deg) !important;
      }

      & > div:nth-child(1) .teck {
        transform: translateX(-50%) rotate(180deg) !important;
      }

      & > div:nth-child(3) .teck {
        transform: translateX(-50%) rotate(180deg) !important;
      }
    }

    .teck {
      width: 100px;
      height: 100px;
      padding: 0.4rem;
      display: block;
      background: rgb(var(--color-gray));
      border-radius: 1.4rem;
    }
  }

  // responsive ------------------------

  @media screen and (min-width: 991px) {
    #projects {
      .tecks {
        display: none;
      }
    }
  }

  /* start of large tablet styles */
  @media screen and (max-width: 991px) {

  }

  /* start of medium tablet styles */
  @media screen and (max-width: 767px) {
  }

  /* start of phone styles */
  @media screen and (max-width: 479px) {
    #about-me {
      padding: 2rem 2rem;
      height: auto;
      gap: 2rem;

      & > div:nth-child(1) {
        padding: 0;
        background: transparent;

        img {
          width: 20px;
        }

        h2 {
          font-size: var(--typescale-g3);
        }
      }

      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;

        p {
        }
      }
    }
    #projects {
      width: 100vw;
      overflow: hidden;
      height: auto;
      padding: 6rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;

      .line-up {
        top: 0%;
        height: 40%;
      }

      .teck-grid {
        display: none;
      }


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

  @keyframes slide-two {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
</style>
