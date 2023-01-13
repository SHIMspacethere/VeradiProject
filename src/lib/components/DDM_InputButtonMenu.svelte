<script>
	import DDM_InputButtonUi from './DDM_InputButtonUi.svelte';
  import buttonInputCalc from './DDM_ButtonInputCalc';
  import { VP_DDM_INPUTCHECKS } from './DDM_Info';

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
    inputResult = buttonInputCalc(l);
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
