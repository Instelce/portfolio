<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { writable } from "svelte/store";

    export let images: string[];

    function next() {
        currentImage.update(i => i + 1);
        if ($currentImage > images.length - 1) {
            currentImage.set(0);
        }
    }

    function prev() {
        currentImage.update(i => i - 1);
        if ($currentImage < 0) {
            currentImage.set(images.length - 1);
        }
    }

    function resetInterval() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            next();
        }, 3000)
    }

    let currentImage = writable(0);

    $: {
        if ($currentImage) {
            resetInterval();
        }
    }

    let slides: HTMLElement[] = [];
    let autoPlayInterval: number;

    $: imageHeight = slides.at($currentImage) ? slides[$currentImage].clientHeight : 0;

    onMount(() => {
        autoPlayInterval = setInterval(() => {
            next();
        }, 3000)
    })

    onDestroy(() => {
        clearInterval(autoPlayInterval);
    })
</script>

<div class="slider-container"  style="min-height: {imageHeight}px;">

    <div class="slide-wrapper">
        {#each images as image, i}
            <div class="slide {$currentImage === i ? "active" : ""}" bind:this={slides[i]}>
                <img src={image} alt={image}>
            </div>
        {/each}
    </div>

    {#if images.length > 1}
        <button class="button next" on:click={next}>
            <img src="/images/icons/chevron-right.svg" alt="Right">
        </button>

        <button class="button prev" on:click={prev}>
            <img src="/images/icons/chevron-left.svg" alt="Left">
        </button>
    {/if}

</div>

<style lang="scss">
    .slider-container {
        width: 100%;
        max-height: 90vh;
        // height: 40vh;
        overflow: hidden;
        position: relative;

        display: flex;

        border-radius: 2rem;
        border: 1px solid rgb(var(--color-gray));

        transition: min-height .3s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            .next, .prev {
                transform: translateX(0);
                opacity: 1;
            }
        }
    }

    .slide-wrapper {
    }

    .slide {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;
        transform: scale(0.95);

        transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1), opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);

        &.active {
            opacity: 1;
            transform: scale(1);
        }

        img {
            // width: 100%;
            // height: 100%;
            object-fit: cover;
        }
    }

    .button {
        height: 100%;
        padding: 2rem;
        position: absolute;

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 5;
        opacity: 0;
        transition: transform .2s cubic-bezier(0.075, 0.82, 0.165, 1), opacity .2s cubic-bezier(0.075, 0.82, 0.165, 1), background-color .2s .5s;
    }

    .prev {
        left: 0;
        transform: translateX(-100%);
        background: linear-gradient(90deg, rgb(var(--color-black-2)) 0%, transparent 100%);
    }

    .next {
        right: 0;
        transform: translateX(100%);
        background: linear-gradient(-90deg, rgb(var(--color-black-2)) 0%, transparent 100%);
    }

</style>

