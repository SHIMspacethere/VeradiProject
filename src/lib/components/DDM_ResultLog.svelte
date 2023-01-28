<script>
  export let result;
  export let selectedI;
  export let selectedJ;
  let _subStyle = [];
  let _style = [];
  let tempArray = [];
  $: sum = 1;
  $: resultCount = 0;

  let subList = [];

  function selectCase(i) {
    _style=[];
    while (result.length > resultCount) {
      _style.push([]);
    }
    if (selectedI == i) {
      _style[i] = "";
      selectedI = null;
    } else {
      tempArray = [];
      _subStyle = [];
      selectedJ = [];
      for (let j = 0; j < result[i].length; j++) {
        _subStyle.push([]);
        for (let k = 0; k < result[i][j].getCaseLength(); k++) {
          if (k==0) {
            _subStyle[j].push("tw-text-red-500");
            selectedJ.push(0);
          }
          else
            _subStyle[j].push("");
        }
      }
      selectedI = i;
      _style[i] = "tw-text-red-500";
    }
  }

  function selectSubcase(i, j) {
    for (let a=0; a < _subStyle[i].length; a++) {
      _subStyle[i][a] = "";
    }
    _subStyle[i][j] = "tw-text-red-500";
    selectedJ[i] = j;
  }

  function count() {
    return ++resultCount;
  }
</script>

<div class="log tw-p-3 ">
  <b class="tw-text-2xl">Outcomes : {resultCount}</b>
  <div class="logUnderbar tw-mb-3" />
  <div class="tw-max-h-[400px] tw-overflow-y-scroll">
    {#each result as _, i}
    <button
      class="logButton tw-block tw-overflow-hidden tw-text-ellipsis tw-h-6 {_style[i]}"
      on:click={() => selectCase(i)}
    >
      <span class="tw-mr-2">[{count()}]</span>
      <b class="">
        {#each result[i] as item}
          {item.name} :
          {#if item.expression[0] == 1}
            열성
          {:else if item.expression[0] == 2}
            우성
          {/if}
          (
          {item.rank[0]} > {item.rank[1]}
          ) &nbsp;&nbsp;
        {/each}
      </b>
    </button>
    <div class="logBar tw-mb-3" />
  {/each}
  </div>
</div>
<div class="tw-mb-3" />
<div class="log tw-p-3">
  {#if selectedI != null}
    {#each result[selectedI] as item, i}
      <div class="logBar">
        {item.name}
        {#each result[selectedI][i].case as sub, j}
          <button
            class="tw-px-1.5 tw-py-1 {_subStyle[i][j]}"
            on:click={() => selectSubcase(i, j)}
          >
            [{j + 1}]
          </button>
        {/each}
      </div>
    {/each}
  {/if}
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
