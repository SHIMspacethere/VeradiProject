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
  let chosenIndex = null;
  let chosenVar = null;
  let chosenType = null;

  const typeList = [
    { id: null, name: "없음", key: 1, keyCode: 49 },
    { id: "gene", name: "유전자", key: 2, keyCode: 50 },
    { id: "man", name: "구성원", key: 3, keyCode: 51 },
    { id: "chromosome", name: "염색체", key: 4, keyCode: 52 },
    { id: "dnaValue", name: "DNA상대량", key: 5, keyCode: 53 },
    { id: "value", name: "값", key: 6, keyCode: 54 },
  ];

  function onKeyDown(e) {
    if (e.keyCode == 27) isTableClicked = false;
    else if (chosenVar != null) {
      for (let i = 0; i < typeList.length; i++) {
        if (e.keyCode == typeList[i].keyCode) {
          selectType(i);
          break;
        }
      }
    } else {
    }
  }

  function closeButton() {
    isTableClicked = false;
  }

  {
    // initial
    for (let i = 0; i < varList.length; i++) _varStyle.push("");
    for (let i = 0; i < typeList.length; i++) _typeStyle.push("");
    for (let j = 0; j < usedVar.length; j++)
      _varStyle[usedVar[j].index] = "tw-bg-orange-300";
  }

  function selectVar(i) {
    chosenType = null;
    for (let j = 0; j < varList.length; j++) {
      _varStyle[j] = "tw-bg-white";
    }
    if (varList[i] == chosenVar) {
      if (chosenType != null) _varStyle[i] = "tw-bg-orange-300";
      chosenIndex = null;
      chosenVar = null;
      chosenType = null;
      for (let j = 0; j < usedVar.length; j++) {
        _varStyle[usedVar[j].index] = "tw-bg-orange-300";
      }
    } else {
      chosenVar = varList[i];
      chosenIndex = i;
      resetTypeStyle();
      for (let j = 0; j < usedVar.length; j++) {
        if (usedVar[j].id == varList[i]) {
          chosenType = usedVar[j].type;
          for (let k = 0; k < typeList.length; k++) {
            if (typeList[k].id == chosenType) _typeStyle[k] = "tw-bg-red-300";
          }
        }
        _varStyle[usedVar[j].index] = "tw-bg-orange-300";
      }
      _varStyle[i] = "tw-bg-red-300";
    }
  }

  function selectType(i) {
    let classIndex = null;
    chosenType = typeList[i].id;
    for (let j = 0; j < typeList.length; j++) {
      _typeStyle[j] = "tw-bg-white";
    }
    _typeStyle[i] = "tw-bg-red-300";
    for (let j = 0; j < usedVar.length; j++) {
      if (usedVar[j].id == chosenVar) {
        classIndex = j;
      }
    }
    // non-created
    if (classIndex == null) {
      if (chosenType != null) createClass(i);
    }
    // need-creation
    else {
      if (chosenType != typeList[i].id) {
        modifyClassType(classIndex);
      } else if (chosenType == null) {
        removeClass(classIndex);
        classIndex = null;
      } else {
      }
    }
  }

  function createClass(typeIndex) {
    usedVar.push(
      new variableClass(
        chosenVar,
        chosenIndex,
        chosenType,
        typeList[typeIndex].name
      )
    );
    usedVar = usedVar;
  }

  function modifyClassType(i, typeIndex) {
    usedVar[i].type(chosenType);
    usedVar[i].name(typeList[typeIndex].name);
    usedVar = usedVar;
  }

  function removeClass(i) {
    usedVar.splice(i, 1);
    usedVar = usedVar;
  }

  function resetTypeStyle() {
    for (let j = 0; j < typeList.length; j++) {
      _typeStyle[j] = "tw-bg-white";
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
            <button
              class="tw-mx-3 {_typeStyle[i]}"
              on:click={() => selectType(i)}
            >
              {item.name}({item.key})
            </button>
          {/each}
        </div>
      {:else}
        <div class="bar tw-text-2xl tw-mb-2">사용된 log</div>
        <div class="tw-overflow-y-auto tw-h-36">
          {#each usedVar as item, i}
            <div class="logBar tw-mb-1 tw-py-0.5">
              [{i + 1}]
              <span>{item.id}</span>
              :
              <span>{item.name}</span>
              <span>({item.type})</span>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </card>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
  .bar {
    border-bottom: 2px solid black;
  }
  .logBar {
    border-bottom: 1px solid gray;
  }
</style>
