<script>
  import { VP_DDM_INPUTCHECKS } from "./DDM_Info";

  export let inputButtonId;

</script>

<div class="tw-block tw-p-5">
  {#each Array(inputButtonId.length) as _, intX}
    <div class="tw-flex">
      {#each Array(inputButtonId[0].length) as _, intY}
        <div
          id="button[{intX}][{intY}]"
          class="tw-flex tw-px-0"
        >
          <img
            id="img[{intX}][{intY}]"
            src={VP_DDM_INPUTCHECKS[inputButtonId[intX][intY]].img2}
            alt="button[{intX}][{intY}]"
          />
        </div>
      {/each}
    </div>
    <div class="tw-flex tw-justify-around">
    </div>
  {/each}
</div>
