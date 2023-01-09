<script>
	import DDM_InputButtonUi from './DDM_InputButtonUi.svelte';
  import buttonInputCalc from './DDM_ButtonInputCalc';

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
  import { prevent_default } from 'svelte/internal';

  export let buttonX = 7;
  export let buttonY = 10;
  export let inputButtonId = [];
  export let inputResult = [];

  {
    for (let i = 0; i < buttonX; i++) {
      inputButtonId.push([]);
      for (let j = 0; j < buttonY; j++) {
        inputButtonId[i].push(0);
      }
    }
  };

  let axisX = 0;
  let axisY = 0;
  let debugMode = false;
  let uiMode = false;
  let temp;

  const VP_DDM_INPUTCHECKS = [
    {
      id: 0,
      img: img_block,
      img2: img_none,
    },
    {
      id: 1,
      img: img_man,
    },
    {
      id: 2,
      img: img_woman,
    },
    {
      id: 3,
      img: img_unknown,
    },
    {
      id: 4,
      img: img_blockCenterUp,
    },
    {
      id: 5,
      img: img_blockX,
    },
    {
      id: 6,
      img: img_blockCenterDown2,
    },
    {
      id: 7,
      img: img_blockCenterDown3,
    },
    {
      id: 8,
      img: img_blockY,
    },
    {
      id: 9,
      img: img_blockLeftDown,
    },
    {
      id: 10,
      img: img_blockRightDown,
    },
    {
      id: 11,
      img: img_none,
    },
  ];

  function debugToggle() {
    if (debugMode) debugMode = false;
    else debugMode = true;
    console.log("debug : " + debugMode);
  }

  function onPopup(x, y) {
    (axisX = x), (axisY = y);
    uiMode = true;
  };

  function onClose() {
    uiMode = false;
  }

  function onClick() {
    if (uiMode == true) {
      uiMode = false;
      if (temp != null) {
        inputButtonId[axisX][axisY] = temp;
        updateImage();
        if (debugMode)
          console.log("(" + axisX + ", " + axisY + ") => " + temp);
      }
    }
  }

  function updateImage() {
    document.getElementById("img["+axisX+"]["+axisY+"]").src = temp;
  }

  function compile(l) {
    console.log(l);
    inputResult = buttonInputCalc(l);
    console.log(inputResult);
  }
</script>

{#if uiMode==true}
  <DDM_InputButtonUi maxX={buttonX} maxY={buttonY} {axisX} {axisY} bind:temp={temp} {onClose} {onClick} />
{/if}

<container>
  <button on:click={() => debugToggle()} class="tw-pb-2">
    debugMode : {debugMode}
  </button>
  <div class="tw-block">
    {#each Array(buttonX) as _, intX}
      <div class="tw-flex">
        {#each Array(buttonY) as _, intY}
          <button
            id="button[{intX}][{intY}]"
            on:click|preventDefault={()=>onPopup(intX, intY)}
            class="tw-flex tw-px-0"
          >
            <img
              id="img[{intX}][{intY}]"
              src={VP_DDM_INPUTCHECKS[inputButtonId[intX][intY]].img}
              alt="button[{intX}][{intY}]"
            />
          </button>
        {/each}
      </div>
      <div class="tw-flex tw-justify-around">
        {#each Array(buttonY) as _, intY}
          {#if debugMode}
            <div>
              {"(" + intX + ", " + intY + ")"}
            </div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
  <div class="tw-pt-5 tw-content-end tw-text-end tw-justify-end">
    <button class="tw-text-2xl tw-bg-orange-500"
    on:click|preventDefault={()=>{compile(inputButtonId)}}>Compile</button>
  </div>
</container>


<style>
  button {
    display: flex;
    flex-grow: 1;
    padding: 0;
  }
</style>
