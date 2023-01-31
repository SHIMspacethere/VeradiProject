<script>
  import Icon from "@iconify/svelte";
  export let onClick = () => {};
  export let bgColor = "#bbddbb";
  export let isTableClicked = false;
  export let condition;
  export let usedVar = [];
  let _style = [];
  let chosenVar;

  function closeButton() {
    isTableClicked = false;
  }

  function clickButton() {
    isTableClicked = false;
  }

  const varList = ["㉠","㉡","㉢","㉣","㉤","㉥","㉦","㉧","㉨","㉩","㉪","㉫","㉬","㉭", "㉮","㉯","㉰","㉱","㉲","㉳","㉴","㉵","㉶","㉷","㉸","㉹","㉺","㉻","ⓐ","ⓑ","ⓒ","ⓓ","ⓔ","ⓕ","ⓖ","ⓗ","ⓘ","ⓙ","ⓚ","ⓛ","ⓜ","ⓝ","ⓞ","ⓟ","ⓠ","ⓡ","ⓢ","ⓣ","ⓤ","ⓥ","ⓦ","ⓧ","ⓨ","ⓩ","Ⓐ","Ⓑ","Ⓒ","Ⓓ","Ⓔ","Ⓕ","Ⓖ","Ⓗ","Ⓘ","Ⓙ","Ⓚ","Ⓛ","Ⓜ","Ⓝ","Ⓞ","Ⓟ","Ⓠ","Ⓡ","Ⓢ","Ⓣ","Ⓤ","Ⓥ","Ⓦ","Ⓧ","Ⓨ","Ⓩ"];

  { // initial
    for (let i=0; i<varList.length; i++)
      _style.push("")
  }

  function selectVar(i) {
    for (let j=0; j<varList.length; j++)
      _style[j]="tw-bg-white";
    _style[i] = "tw-bg-red-300";
    chosenVar = varList[i];
  }
</script>

<div
  class="tw-p-0 sm:tw-p-5 tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-flex-row"
>
  <div class="tw-absolute tw-inset-0" on:click={closeButton} />
  <card
    class="tw-max-w-[600px] tw-w-full tw-h-full tw-max-h-[700px] tw-rounded-xl tw-align-middle sm:tw-px-6 tw-px-4 tw-py-6"
    style="background:{bgColor}; opacity:90%"
  >
    <div class="tw-flex tw-justify-between tw-pb-3">
      <div class="tw-text-2xl tw-font-heading">Condition Variable Table</div>
      <button
        on:click={closeButton}
        class="tw-justify-end tw-flex tw-text-4xl tw-items-center"
      >
        <Icon icon="eva:close-fill" />
      </button>
    </div>
    <div class="tw-text-xl tw-py-1">
      사용한 변수 : <span class="tw-bg-orange-300 tw-px-2 tw-py-1">n개</span>
    </div>
    <div class="tw-bg-white tw-p-3 tw-text-2xl tw-w-full">
      <div>
        {#each varList as item, i}
        <button class="tw-m-1 tw-px-1 {_style[i]}" on:click={()=>selectVar(i)}>
          {item}
        </button>
        {/each}
      </div>
    </div>
    <div class="tw-my-5 tw-p-3 tw-bg-white">
      <span class="tw-text-3xl">
        {chosenVar}
      </span>
    </div>
  </card>
</div>

<style>
  .bar {
    border-bottom: 1px solid gray;
  }
</style>
