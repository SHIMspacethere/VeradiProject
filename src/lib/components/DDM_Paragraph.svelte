<script>
	import DDM_HiddenContext_Trait from './contexts/DDM_HiddenContext_Trait.svelte';
  import DDM_MiniTree from "./DDM_MiniTree.svelte";
  export let heredity;
  export let inputButtonId;
  export let treeStyle;
  export let condition;
  export let isCMenuClicked = false;
  export let isTableClicked = false;
  export let isClicked;

  let isHidden = false;

  const buttonList = [
    {name: "추가", style: "tw-bg-slate-300", key: "Q", keyCode: 81},
    {name: "제거", style: "tw-bg-slate-400", key: "W", keyCode: 87},
    {name: "테이블", style: "tw-bg-green-300", key: "E", keyCode: 69},
  ]

  function onKeyDown(e) {
    if (!isCMenuClicked && !isTableClicked) {
      for (let i = 0; i < buttonList.length; i++) {
        if (e.keyCode == buttonList[i].keyCode) {
          clickButton(i);
          break;
        }
      }
    }
  }
  
  function clickSet(i) {
    while(treeStyle.length<condition.length+1)
    {
      treeStyle.push("");
    }
    isClicked = i;
    for (let j = 0; j < treeStyle.length; j++) {
      treeStyle[j] = "";
    }
    treeStyle[i] = "border: 1px solid red;";
  }

  function clickButton(i) {
    if (i == 0) clickCMenu();
    else if (i == 1) clickRemove();
    else if (i == 2) clickTable();
    else {}
  }

  function clickCMenu() {
    isCMenuClicked = isCMenuClicked ? false : true;
  }

  function clickRemove() {
    if(isClicked == 0) return;
    condition.splice(isClicked-1, 1);
    treeStyle.splice(isClicked,1);
    condition = condition;
    isClicked = 0;
    treeStyle[0] = "border: 1px solid red;";
  }

  function clickTable() {
    isTableClicked = isTableClicked ? false : true;
  }

  function SwitchIsHidden() {
    isHidden = isHidden ? false : true;
  }

</script>


<button class="tw-ml-2 tw-text-xl" on:click={()=>SwitchIsHidden()}>[주석 제거] : {isHidden}</button>
<div class="tw-flex">
  {#each buttonList as item, i}
    <button class="tw-flex-1 tw-text-xl {item.style}" on:click={()=>clickButton(i)}>[{item.name}({item.key})]</button>
  {/each}
</div>
<div class="tw-overflow-hidden tw-bg-white">
  <div class="tw-px-3 tw-pt-3">
    1. 다음은 어떤 집안의 유전 형질 {heredity[0][0]}~{heredity[0][
      heredity[0].length - 1
    ]}에 대한 자료이다.
  </div>
  <div class="tw-m-4 tw-mt-3 card tw-overflow-hidden">
    <div class="tw-py-4 tw-pl-9 ">
      <span style="margin-left: -1em;">
        ○
        {#each heredity[0] as item, i}
          {#if i != 0}
            ,
          {/if}
          {item}는 대립유전자
          {#each heredity[2][i] as gene, j}
            {#if j != 0}
              와
            {/if}
            {gene}
          {/each}
          에 의해
        {/each}
        결정된다.
      </span>
      {#if !isHidden}
      <div>
        <DDM_HiddenContext_Trait bind:heredity={heredity} />
      </div>
      {/if}
      {#each condition as item, i}
        <div style="margin-left: -1em; {treeStyle[i+1]}">
          <button on:click={() => clickSet(i+1)}>
            ○
            {item.text}
          </button>
        </div>
      {/each}
      <div>

      </div>
    </div>
    <div class="tw-w-72 sm:tw-w-96">
      <button on:click={() => clickSet(0)}>
        <DDM_MiniTree bind:inputButtonId _style={treeStyle[0]} />
      </button>
    </div>
  </div>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
  .card {
    border: 1px solid black;
  }
</style>
