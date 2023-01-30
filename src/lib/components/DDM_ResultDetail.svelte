<script>
  import DDM_GeneTree from "./DDM_GeneTree.svelte";;
  import DDM_Tree from "./DDM_Tree.svelte";

  export let heredity;
  export let inputResult;
  export let inputButtonId;
  export let result;
  export let selectedI;
  export let selectedJ;

  let toggle = false;

  function switchTree() {
    toggle = toggle ? false : true;
  }
</script>

<div class="tw-m-3 tw-bg-white">
  <DDM_Tree bind:inputButtonId bind:heredity bind:inputResult isBusy={true} />
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
  {#if selectedI != null}
    <button on:click={() => switchTree()}>
      GeneTree : {toggle}
    </button>
    {#if toggle}
      <DDM_GeneTree
        bind:inputResult
        bind:inputButtonId
        bind:heredity
        bind:result
        bind:selectedI
        bind:selectedJ
      />
    {:else}
      {#each result[selectedI][0].array as _, i}
        <div>
          {i + 1}
          &nbsp
          {#each selectedJ as index, j}
            {#if j != 0}
              &nbsp/
            {/if}
            {#each result[selectedI][j].case[index][i] as item}
              {item}
            {/each}
          {/each}
        </div>
      {/each}
    {/if}
  {/if}
</div>

<style>
  .logBar {
    border-bottom: 1px solid gray;
  }
</style>
