<script>
  import { VP_DDM_INPUTCHECKS } from "./DDM_Info";

  export let inputResult;
  export let inputButtonId;
  export let heredity;
  export let isBusy = false;
  let _heredityClass = [];
  let _heredityTrait = [];
  let selectedHeredity = null;
  let count = 1;

  const heredityTrait = ["?", "우열", "다인자"];
  {
    while (heredity[0].length > heredityTrait.length) {
      _heredityTrait.push([]);
    }
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
    updateTrait(i);
    heredity = heredity;
  }

  function clickTrait(i) {
    for (let j = 0; j < heredityTrait.length; j++) {
      _heredityTrait[j] = "tw-text-black";
    }
    _heredityTrait[i] = "tw-text-red-500";
    heredity[1][selectedHeredity] = heredityTrait[i];
    heredity = heredity;
  }

  function updateExpression(i, j) {
    if (selectedHeredity == null) return;
    let a = 0;
    while (i != inputResult[0][a][0] || j != inputResult[0][a][1]) {
      if (a > inputResult[0].length) return;
      a++;
    }
    if (heredity[selectedHeredity + 3][a] == 1) {
      heredity[selectedHeredity + 3][a] = 2;
      updateImage(i, j, 2);
    } else if (heredity[selectedHeredity + 3][a] == 2) {
      heredity[selectedHeredity + 3][a] = 1;
      updateImage(i, j, 1);
    } else {
    }
    console.log(heredity[selectedHeredity + 2]);
  }

  function updateTrait(i) {
    for (let j = 0; j < heredityTrait.length; j++) {
      _heredityTrait[j] = "tw-text-black";
      if (heredity[1][i] == heredityTrait[j])
        _heredityTrait[j] = "tw-text-red-500";
    }
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
        heredity[selectedHeredity + 3][a]
      );
    }
  }

  function countPerson() {
    return count++;
  }
</script>

<container class="tw-block tw-mx-3">
  <div class="tw-text-2xl tw-px-2">
    <div>
      {#each heredity[0] as item, i}
        <button
          class="tw-px-2 {_heredityClass[i]}"
          on:click={() => clickHeredity(i)}
        >
          {item}
        </button>
      {/each}
    </div>
    {#if selectedHeredity != null && isBusy == false}
      <div>
        {#each heredityTrait as item, i}
          <button
            class="tw-px-2 {_heredityTrait[i]}"
            on:click={() => clickTrait(i)}
          >
            {item}
          </button>
        {/each}
      </div>
    {/if}
  </div>
  <div class="tw-block tw-p-5 tw-m-3 tw-bg-white">
    {#each Array(inputButtonId.length) as _, intX}
      <div class="tw-flex">
        {#each Array(inputButtonId[0].length) as _, intY}
          {#if inputButtonId[intX][intY] == 1 || inputButtonId[intX][intY] == 2}
            {#if isBusy == true}
              <div
                id="button[{intX}][{intY}]"
                class="tw-px-0 tw-justify-center tw-align-middle tw-relative"
              >
                <img
                  id="buttonImg[{intX}][{intY}]"
                  src={VP_DDM_INPUTCHECKS[inputButtonId[intX][intY]].img2}
                  alt="button[{intX}][{intY}]"
                />
                <div class="tw-absolute tw-justify-center tw-text-center">
                  {countPerson()}
                </div>
              </div>
            {:else}
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
                />
                <div class="tw-absolute tw-justify-center tw-text-center">
                  {countPerson()}
                </div>
              </button>
            {/if}
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
