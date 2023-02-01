<script>
  import Icon from "@iconify/svelte";
  import varList from "./conditions/DDM_VarList";
  import variableClass from "./conditions/DDM_VarClass";
  export let onClick = () => {};
  export let bgColor = "#bbddbb";
  export let isTableClicked = false;
  export let condition;
  export let usedVar = [];
  let _typeStyle = [];
  let _varStyle = [];
  let chosenVar = null;
  let chosenType = null;

  const typeList = [
    { id: null, name: "없음" },
    { id: "gene", name: "유전자" },
    { id: "man", name: "구성원" },
    { id: "chromosome", name: "염색체" },
    { id: "dnaValue", name: "DNA상대량" },
    { id: "value", name: "값" },
  ];

  function closeButton() {
    isTableClicked = false;
  }

  function clickButton() {
    isTableClicked = false;
  }

  {
    // initial
    for (let i = 0; i < varList.length; i++) _varStyle.push("");
    for (let i = 0; i < typeList.length; i++) _typeStyle.push("");
  }

  function selectVar(i) {
    for (let j = 0; j < varList.length; j++) {
      _varStyle[j] = "tw-bg-white";
    }
    if (varList[i] == chosenVar) {
      if (chosenType != null)
        _varStyle[i] = "tw-bg-orange-300";
      chosenVar = null;
      chosenType = null;
    } else {
      chosenVar = varList[i];
      for (let j=0; j<usedVar.length; j++)
      {
        if (usedVar[j].id == varList[i]) {
          chosenType = usedVar[j].type;
          for (let k=0; k<typeList.length; k++)
          {
            if (typeList[k].id == chosenType)
              _typeStyle[k] = "tw-bg-red-300";
          }
        }
        _varStyle[usedVar[j].index] = "tw-bg-orange-300";
      }
      _varStyle[i] = "tw-bg-red-300";
    }
  }

  function selectType(i) {
    let isExist = false;
    for (let j = 0; j < typeList.length; j++) {
      _typeStyle[j] = "tw-bg-white";
    }
    _typeStyle[i] = "tw-bg-red-300";
    for (let j=0; j < usedVar.length; j++)
      {
        if(usedVar[j].id == chosenVar)
        {
          isExist = true;
        }
      }
    if (isExist == true ) {
      
    }
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
      사용한 변수 : <span class="tw-bg-orange-300 tw-px-2 tw-py-1"
        >{usedVar.length}개</span
      >
    </div>
    <div class="tw-bg-white tw-p-3 tw-text-2xl tw-w-full">
      <div>
        {#each varList as item, i}
          <button
            class="tw-m-1 tw-px-1 {_varStyle[i]}"
            on:click={() => selectVar(i)}
          >
            {item}
          </button>
        {/each}
      </div>
    </div>
    <div class="tw-my-5 tw-p-3 tw-bg-white">
      {#if chosenVar != null}
        <div class="bar tw-text-3xl tw-mb-2">
          {chosenVar} : {chosenType}
        </div>
        <div class="tw-text-2xl">
          {#each typeList as item, i}
            <button class="tw-mx-3" on:click={()=>selectType(i)}>
              {item.name}
            </button>
          {/each}
        </div>
      {:else}
      <div class="bar tw-text-2xl tw-mb-2">
        사용된 log
      </div>
      <div class="tw-overflow-y-auto tw-h-36">
        {#each usedVar as item, i}
          <div class="logBar tw-mb-1 tw-py-0.5">
            [{i+1}]
            <span>1</span>
          </div>
        {/each}
      </div>
      {/if}
    </div>
  </card>
</div>

<style>
  .bar {
    border-bottom: 2px solid black;
  }
  .logBar {
    border-bottom: 1px solid gray;
  }
</style>
