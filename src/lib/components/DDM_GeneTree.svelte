<script>
  import { VP_DDM_INPUTCHECKS } from "./DDM_Info";

  export let inputResult;
  export let inputButtonId;
  export let heredity;
  export let result;
  export let selectedI;
  export let selectedJ;

  function counting(i, j) {
    for (let a = 0; a < inputResult[0].length; a++) {
      if (inputResult[0][a][0] == i && inputResult[0][a][1] == j)
        return a;
    }
  }
</script>

<container class="tw-block tw-mx-1">
  <div class="tw-block tw-p-5 tw-m-3 tw-bg-white">
    {#each Array(inputButtonId.length) as _, intX}
      <div class="tw-flex">
        {#each Array(inputButtonId[0].length) as _, intY}
          {#if inputButtonId[intX][intY] == 1 || inputButtonId[intX][intY] == 2}
            <div
              id="button[{intX}][{intY}]"
              class="tw-px-0 tw-justify-center tw-align-middle tw-relative"
            >
              <img
                id="buttonImg[{intX}][{intY}]"
                src={VP_DDM_INPUTCHECKS[inputButtonId[intX][intY]].img2}
                alt="button[{intX}][{intY}]"
              />
              <div class="tw-absolute tw-text-lg tw-z-10">
                {#each selectedJ as index, j}
                  <div class="tw-h-4">
                    {#each result[selectedI][j].case[index][counting(intX, intY)] as item}
                      {item}
                    {/each}
                  </div>
                {/each}
              </div>
            </div>
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
