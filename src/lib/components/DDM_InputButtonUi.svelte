<script>
  import Icon from "@iconify/svelte";
  import { InputButtonSet, VP_DDM_INPUTCHECKS } from "./DDM_Info.js";

  export let onClose = () => {};
  export let onClick = () => {};
  export let temp;
  export let axisX = 0;
  export let axisY = 0;
  export let maxX = 0;
  export let maxY = 0;
  export let bgColor = "#bbbbdd";
  export let buttonImage = "";

  function onKeyDown(e) {
    if (e.keyCode == 27) onClose();
    else {
      for (const item of buttonList) {
        if (e.keyCode == item.key) {
          clickButton(item);
          break;
        }
      }
    }
  }

  function clickButton(i) {
    if (i.value == "-") return;
    temp = i.value;
    onClick();
  }

  function closeButton() {
    temp = null;
    onClose();
  }

  let buttonQ = new InputButtonSet(81, VP_DDM_INPUTCHECKS[0].img, 0);
  let buttonW = new InputButtonSet(87, VP_DDM_INPUTCHECKS[1].img, 1);
  let buttonE = new InputButtonSet(69, VP_DDM_INPUTCHECKS[2].img, 2);
  let buttonR = new InputButtonSet(82, VP_DDM_INPUTCHECKS[3].img, 3);
  let buttonA = new InputButtonSet(65, VP_DDM_INPUTCHECKS[4].img, 4);
  let buttonS = new InputButtonSet(83, VP_DDM_INPUTCHECKS[5].img, 5);
  let buttonD = new InputButtonSet(68, VP_DDM_INPUTCHECKS[6].img, 6);
  let buttonF = new InputButtonSet(70, VP_DDM_INPUTCHECKS[7].img, 7);
  let buttonZ = new InputButtonSet(90, VP_DDM_INPUTCHECKS[8].img, 8);
  let buttonX = new InputButtonSet(88, VP_DDM_INPUTCHECKS[9].img, 9);
  let buttonC = new InputButtonSet(67, VP_DDM_INPUTCHECKS[10].img, 10);
  let buttonV = new InputButtonSet(86, VP_DDM_INPUTCHECKS[11].img, "-");
  
  const buttonList = [];
  buttonList.push(
    buttonQ,
    buttonA,
    buttonZ,
    buttonW,
    buttonS,
    buttonX,
    buttonE,
    buttonD,
    buttonC,
    buttonR,
    buttonF,
    buttonV
  );

  // ------- Rules --------
  {
    if (axisX % 2 == 1) {
      buttonW.toDisabled();
      buttonE.toDisabled();
      buttonR.toDisabled();
    }
    if (axisX == maxX - 1) {
      buttonA.toDisabled();
      buttonS.toDisabled();
      buttonD.toDisabled();
      buttonF.toDisabled();
      buttonZ.toDisabled();
      buttonX.toDisabled();
      buttonC.toDisabled();
    }
    if (axisX == 0) {
      buttonD.toDisabled();
      buttonF.toDisabled();
      buttonZ.toDisabled();
      buttonX.toDisabled();
      buttonC.toDisabled();
    }
    if (axisY == 0) {
      buttonA.toDisabled();
      buttonS.toDisabled();
      buttonD.toDisabled();
      buttonF.toDisabled();
      buttonZ.toDisabled();
      buttonC.toDisabled();
    }
    if (axisY == maxY - 1) {
      buttonA.toDisabled();
      buttonS.toDisabled();
      buttonD.toDisabled();
      buttonF.toDisabled();
      buttonZ.toDisabled();
      buttonX.toDisabled();
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
      <div class="tw-text-2xl tw-font-heading">{axisX}, {axisY}</div>
      <button
        on:click={closeButton}
        class="tw-justify-end tw-flex tw-text-4xl tw-items-center"
      >
        <Icon icon="eva:close-fill" />
      </button>
    </div>
    <div class="tw-columns-4">
      {#each buttonList as item}
        <button on:click|preventDefault={()=>clickButton(item)}>
          <img src={item.image} alt="" class="tw-w-auto" />
        </button>
      {/each}
    </div>
  </card>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
