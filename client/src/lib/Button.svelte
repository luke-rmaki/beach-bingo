<script lang='ts'>
  export let isPrimary: boolean;
  export let action: () => void;
</script>

<button type="button" data-primary={isPrimary} on:click='{() => action()}'>
  <slot />  
</button>

<style lang="scss">
  button {
    margin-block-end: 30px;
    padding-inline: 10px;
    font-family: var(--font);
    font-size: var(--h2);
    border-radius: 20px;
    background: none;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }

  [data-primary=true] {
    border: 4px solid var(--orange);
    
    &:hover, &:focus {
      background: var(--orange);
    }
  }
  
  [data-primary=false] {
    border: 4px solid var(--yellow);
    
    &:hover, &:focus {
      background: var(--yellow);
    }
  }

</style>