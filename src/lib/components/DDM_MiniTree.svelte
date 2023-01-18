<script>
  import { VP_DDM_INPUTCHECKS } from "./DDM_Info";

  export let inputButtonId;
  export let _style;
  let count = 1;

  function countPerson() {
    return count++;
  }
</script>

<container class="tw-block tw-p-5" style="{_style}">
  {#each Array(inputButtonId.length) as _, intX}
    <div class="tw-flex">
      {#each Array(inputButtonId[0].length) as _, intY}
      {#if inputButtonId[intX][intY] == 1 || inputButtonId[intX][intY] == 2}
      <div
        id="block[{intX}][{intY}]"
        class="tw-px-0 tw-justify-center tw-align-middle tw-relative"
      >
        <img
          id="blockImg[{intX}][{intY}]"
          src={VP_DDM_INPUTCHECKS[inputButtonId[intX][intY]].img2}
          alt="block[{intX}][{intY}]"
        >
        <div class="tw-absolute tw-justify-center tw-text-center">
          {countPerson()}
        </div>
      </div>
    {:else}
      <div id="block[{intX}][{intY}]" class="tw-flex tw-px-0">
        <img
          id="blockImg[{intX}][{intY}]"
          src={VP_DDM_INPUTCHECKS[inputButtonId[intX][intY]].img2}
          alt="button[{intX}][{intY}]"
        />
      </div>
    {/if}
      {/each}
    </div>
    <div class="tw-flex tw-justify-around">
    </div>
  {/each}
</container>
