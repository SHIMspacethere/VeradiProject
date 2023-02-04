<script>
  import { condition_dominance } from "./conditions/DDM_ConditionClass.js";
  import Icon from "@iconify/svelte";
  export let onClick = () => {};
  export let bgColor = "#cccccc";
  export let isCMenuClicked = false;
  export let isTableClicked = false;
  export let condition = [];

  function onKeyDown(e) {
    if (e.keyCode == 27) closeButton();
  }

  function closeButton() {
    isCMenuClicked = false;
  }

  function clickButton() {
    isCMenuClicked = false;
  }

  function selectCondition(i) {
    condition.push(conditionList[i].class);
    condition[0].setText();
    console.log(condition[0].text);
    closeButton();
  }

  const conditionList = [
    {
      id: "dominance",
      name: "우성 관계",
      ex: "A는 a에 대해 완전 우성이다.",
      class: new condition_dominance(),
    },
    {
      id: "genePosition",
      name: "유전자 존재 위치 - 염색체",
      ex: "대립유전자 A는 성염색체에 있다.",
    },
    {
      id: "geneExist",
      name: "유전자 존재 위치 - 사람",
      ex: "대립유전자 A는 구성원 1에 존재한다.",
    },
    {
      id: "dnaValue",
      name: "DNA 상대량 - 일반",
      ex: "1의 DNA 상대량은 1 이다.",
    },
    {
      id: "dnaValueFraction",
      name: "DNA 상대량 - 분수식",
      ex: "1, 2 각각의 체세포 1개당 A의 DNA 상대량을 더한 값 = 1",
    },
    {
      id: "calcValue",
      name: "일반 계산식",
      ex: "ⓐ + ⓑ = 1 이다.",
    },
  ];
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
      <div class="tw-text-2xl tw-font-heading">Condition Table</div>
      <button
        on:click={closeButton}
        class="tw-justify-end tw-flex tw-text-4xl tw-items-center"
      >
        <Icon icon="eva:close-fill" />
      </button>
    </div>
    <div class="tw-bg-white tw-p-3 tw-overflow-y-scroll">
      {#each conditionList as item, i}
        <button
          class="tw-block tw-text-left tw-w-full tw-mt-2"
          on:click={() => selectCondition(i)}
        >
          <div class="tw-text-xl">
            [{item.name}]
          </div>
          <div>
            {item.ex}
          </div>
        </button>
        <div class="bar tw-mt-2" />
      {/each}
    </div>
  </card>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
  .bar {
    border-bottom: 1px solid gray;
  }
</style>
