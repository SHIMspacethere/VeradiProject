<script>
  import DDM_Tree from "./DDM_Tree.svelte";

  export let heredity;
  export let inputResult;
  export let inputButtonId;
  export let result;
  export let selectedI;
  export let selectedJ;
  let treeStyle;
</script>

<div class="tw-m-3 tw-bg-white">
  <DDM_Tree
    bind:inputButtonId
    bind:heredity
    bind:inputResult
    isBusy={true}
  />
</div>
<div class="tw-mx-3 tw-text-2xl">
  {#if selectedI == null}
    none!
  {:else}
    {#each result[selectedI] as item}
    <div>
      {item.chromosome}번 염색체 -
      {item.name} :
      {#if item.expression[0] == 1}
        열성
      {:else if item.expression[0] == 2}
        우성
      {/if}
      (
      {item.rank[0]} > {item.rank[1]}
      )
    </div>
    {/each}
  {/if}
  <div class="logBar tw-py-1" />
  {#if selectedI == null}
    none!
  {:else}

  {/if}
</div>

<style>
  .logBar {
    border-bottom: 1px solid gray;
  }
</style>
