<script lang="ts">
    export let name;
    export let selected = false;
</script>

<span class="tag" class:selected={selected}>
    {name}
</span>

<style lang="scss">
    .tag {
        padding: .5rem 1rem;
        border-radius: 20rem;
        background: rgb(var(--color-accent-dark));
        box-shadow: 0 0 0 1px rgb(var(--color-accent-dark-2));

        transition: background .3s ease, box-shadow .3s ease;

        &:hover {
            background: rgb(var(--color-accent-dark-2));
            box-shadow: 0 0 0 2px rgb(var(--color-accent));
        }

        &.selected {
            background: rgb(var(--color-accent));
        }
    }
</style>