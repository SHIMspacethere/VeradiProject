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
    <div>
      {result[selectedI].chromosome}번 염색체 -
      {result[selectedI].name} :
      {#if result[selectedI].expression[0] == 1}
        열성
      {:else if result[selectedI].expression[0] == 2}
        우성
      {/if}
      (
      {result[selectedI].rank[0]} > {result[selectedI].rank[1]}
      )
    </div>
  {/if}
  <div class="logBar tw-py-1" />
  {#if selectedI == null}
    none!
  {:else}
    {#each result[selectedI].case[selectedJ] as item, i}
      <div>
        {i + 1}. {item}
      </div>
    {/each}
  {/if}
</div>

<style>
  .logBar {
    border-bottom: 1px solid gray;
  }
</style>
