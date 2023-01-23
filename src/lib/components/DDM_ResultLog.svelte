<script>
  export let result;
  export let selectedI;
  export let selectedJ;
  $: resultCount = 0;

  function selectCase(i, j) {
    selectedI = i;
    selectedJ = j;
  }

  function count() {
    return ++resultCount;
  }
</script>

<div class="log tw-p-3">
  <b class="tw-text-2xl">Outcomes : {resultCount}</b>
  <div class="logUnderbar tw-mb-3" />
  {#each result as item, i}
    {#each result[i].case as subItem, j}
      <button
        class="logButton tw-overflow-hidden"
        on:click={() => selectCase(i, j)}
      >
        <span class="tw-mr-2">[{count()}]</span>
        <b>
          {item.name} :
          {#if item.expression[0] == 1}
            열성
          {:else if item.expression[0] == 2}
            우성
          {/if}
          (
          {item.rank[0]} > {item.rank[1]}
          )
        </b>
      </button>
      <div class="logBar tw-mb-3" />
    {/each}
  {/each}
</div>

<style>
  .log {
    border: 2px solid black;
    border-radius: 10px 10px 10px 10px;
  }

  .logBar {
    border-bottom: 1px solid gray;
  }

  .logUnderbar {
    border-bottom: 2px solid black;
  }
</style>
