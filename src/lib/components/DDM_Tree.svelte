<script>
  import { VP_DDM_INPUTCHECKS } from "./DDM_Info";

  export let inputResult;
  export let inputButtonId;
  export let heredity;
  let _heredityClass = [];
  let selectedHeredity = null;
  let count=0;
  let person=[];

  {

  }

  function clickHeredity(i) {
    while (heredity[0].length > _heredityClass.length) {
      _heredityClass.push([]);
    }
    for (let j = 0; j < heredity[0].length; j++) {
      _heredityClass[j] = "tw-text-black";
    }
    _heredityClass[i] = "tw-text-red-500";
    selectedHeredity = i;
    updateAll();
  }

  function updateExpression(i, j) {
    if (selectedHeredity == null) return;
    let a = 0;
    console.log(inputResult[0][a][0]);
    while (i != inputResult[0][a][0] || j != inputResult[0][a][1]) {
      if (a > inputResult[0].length) return;
      a++;
    }

    if (heredity[selectedHeredity + 2][a] == 1) {
      heredity[selectedHeredity + 2][a] = 2
      updateImage(i, j, 2);
    }
    else if (heredity[selectedHeredity + 2][a] == 2) {
      heredity[selectedHeredity + 2][a] = 1
      updateImage(i, j, 1);
    }
    else {}
    console.log(heredity[selectedHeredity+2])
  }

  function updateImage(i, j, e) {
    if (e == 1) {
      document.getElementById("buttonImg[" + i + "][" + j + "]").src =
        VP_DDM_INPUTCHECKS[inputButtonId[i][j]].img2;
    } else if (e == 2) {
      document.getElementById("buttonImg[" + i + "][" + j + "]").src =
        VP_DDM_INPUTCHECKS[inputButtonId[i][j]].img3;
    } else {
    }
  }

  function updateAll() {

    for (let a = 0; a < inputResult[0].length; a++) {
      updateImage(
        inputResult[0][a][0],
        inputResult[0][a][1],
        heredity[selectedHeredity + 2][a]
      );
    }
  }
</script>

<container class="tw-block tw-mx-3">
  <div class="tw-text-2xl tw-px-2">
    {#each heredity[0] as item, i}
      <button
        class="tw-px-2 {_heredityClass[i]}"
        on:click={() => clickHeredity(i)}
      >
        {item}
      </button>
    {/each}
  </div>
  <div class="tw-block tw-p-5">
    {#each Array(inputButtonId.length) as _, intX}
      <div class="tw-flex">
        {#each Array(inputButtonId[0].length) as _, intY}
          {#if inputButtonId[intX][intY] == 1 || inputButtonId[intX][intY] == 2}
            <button
              id="button[{intX}][{intY}]"
              on:click={() => {
                updateExpression(intX, intY);
              }}
              class="tw-px-0 tw-justify-center tw-align-middle tw-relative"
            >
              <img
                id="buttonImg[{intX}][{intY}]"
                src={VP_DDM_INPUTCHECKS[inputButtonId[intX][intY]].img2}
                alt="button[{intX}][{intY}]"
              >
              <div class="tw-absolute tw-justify-center tw-text-center">
                {1}
              </div>
            </button>
          {:else}
            <div id="button[{intX}][{intY}]" class="tw-flex tw-px-0">
              <img
                id="img[{intX}][{intY}]"
                src={VP_DDM_INPUTCHECKS[inputButtonId[intX][intY]].img2}
                alt="button[{intX}][{intY}]"
              />
            </div>
          {/if}
        {/each}
      </div>
      <div class="tw-flex tw-justify-around" />
    {/each}
  </div>
</container>
