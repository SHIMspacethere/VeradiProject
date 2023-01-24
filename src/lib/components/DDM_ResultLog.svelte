<script>
  export let result;
  export let selectedI;
  export let selectedJ;
  let _style = [];
  let tempArray = [];
  $: sum = 1;
  $: resultCount = 0;

  function selectCase(i) {
    while (result.length > resultCount) {
      _style.push([]);
    }
    if (selectedI == i) {
      _style[i] = "";
      selectedI = null;
    } else {
      tempArray=[];
      selectedI = i;
      for (let j = 0; j < _style.length; j++) {
        _style[j] = "";
      }
      _style[i] = "tw-text-red-500";
      sum = 1;
      sum = setSubcase(i, 0);
    }
  }

  function setSubcase(i, n) {
    if(result[i].length > n)
      {
        tempArray.push(result[i][n].case.length);
        setSubcase(i, n+1);

  }
  else {
    let sum = 1;
    console.log(tempArray);
    for (let j=0; j<tempArray.length; j++)
    {
      sum *= tempArray[j];
    }
    console.log(sum);
    return sum;
  }
}

  function selectSubcase() {

  }

  function count() {
    return ++resultCount;
  }
</script>

<div class="log tw-p-3">
  <b class="tw-text-2xl">Outcomes : {resultCount}</b>
  <div class="logUnderbar tw-mb-3" />
  {#each result as _, i}
    <button
      class="logButton tw-overflow-hidden {_style[i]}"
      on:click={() => selectCase(i)}
    >
      <span class="tw-mr-2">[{count()}]</span>
      <b>
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
<div class="tw-mb-3" />
<div class="log tw-p-3">
  {#each Array(sum) as _}
  1
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
