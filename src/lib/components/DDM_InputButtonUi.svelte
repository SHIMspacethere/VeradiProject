<script>
  import Icon from "@iconify/svelte";
  import { InputButtonSet } from "./DDM_Class.js";

  export let onClose = () => {};
  export let onClick = () => {};
  export let temp;
  export let axisX = 0;
  export let axisY = 0;
  export let maxX = 0;
  export let maxY = 0;
  export let bgColor = "#bbbbdd";
  export let buttonImage = "";

  import img_none from "$lib/static/img/veradiBioProject/genogram/none.png";
  import img_unknown from "$lib/static/img/veradiBioProject/genogram/unknown.png";
  import img_block from "$lib/static/img/veradiBioProject/genogram/block.png";
  import img_blockCenterDown2 from "$lib/static/img/veradiBioProject/genogram/blockCenterDown2.png";
  import img_blockCenterDown3 from "$lib/static/img/veradiBioProject/genogram/blockCenterDown3.png";
  import img_blockCenterUp from "$lib/static/img/veradiBioProject/genogram/blockCenterUp.png";
  import img_blockLeftDown from "$lib/static/img/veradiBioProject/genogram/blockLeftDown.png";
  import img_blockRightDown from "$lib/static/img/veradiBioProject/genogram/blockRightDown.png";
  import img_blockX from "$lib/static/img/veradiBioProject/genogram/blockX.png";
  import img_blockY from "$lib/static/img/veradiBioProject/genogram/blockY.png";
  import img_man from "$lib/static/img/veradiBioProject/genogram/man.png";
  import img_manA from "$lib/static/img/veradiBioProject/genogram/manA.png";
  import img_woman from "$lib/static/img/veradiBioProject/genogram/woman.png";
  import img_womanA from "$lib/static/img/veradiBioProject/genogram/womanA.png";

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

  let buttonQ = new InputButtonSet(81, img_block, 0);
  let buttonW = new InputButtonSet(87, img_man, 1);
  let buttonE = new InputButtonSet(69, img_woman, 2);
  let buttonR = new InputButtonSet(82, img_unknown, 3);
  let buttonA = new InputButtonSet(65, img_blockCenterUp, 4);
  let buttonS = new InputButtonSet(83, img_blockX, 5);
  let buttonD = new InputButtonSet(68, img_blockCenterDown2, 6);
  let buttonF = new InputButtonSet(70, img_blockCenterDown3, 7);
  let buttonZ = new InputButtonSet(90, img_blockY, 8);
  let buttonX = new InputButtonSet(88, img_blockLeftDown, 9);
  let buttonC = new InputButtonSet(67, img_blockRightDown, 10);
  let buttonV = new InputButtonSet(86, img_none, "-");
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
