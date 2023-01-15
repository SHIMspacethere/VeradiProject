<script>
  import { VP_DDM_INPUTCHECKS } from "./DDM_Info";

  export let inputButtonId;
  export let heredity;
  let _heredityClass = [];
  let selectedHeredity = null;

  function clickHeredity(i) {
    while(heredity[0].length > _heredityClass.length)
      {
        _heredityClass.push([]);
      }
    for (let j=0; j<heredity[0].length; j++) {
      _heredityClass[j]="tw-text-black";
    }
    _heredityClass[i]="tw-text-red-500";
    selectedHeredity = i;
  }
</script>

<container class="tw-block tw-mx-3">
  <div class="tw-text-2xl tw-px-2">
    {#each heredity[0] as item, i}
      <button class="tw-px-2 {_heredityClass[i]}" on:click={()=>clickHeredity(i)}>
        {item}
      </button>
    {/each}
  </div>
  <div class="tw-block tw-p-5">
    {#each Array(inputButtonId.length) as _, intX}
      <div class="tw-flex">
        {#each Array(inputButtonId[0].length) as _, intY}
          <button
            id="button[{intX}][{intY}]"
            class="tw-flex tw-px-0"
          >
            <img
              id="img[{intX}][{intY}]"
              src={VP_DDM_INPUTCHECKS[inputButtonId[intX][intY]].img2}
              alt="button[{intX}][{intY}]"
            />
          </button>
        {/each}
      </div>
      <div class="tw-flex tw-justify-around">
      </div>
    {/each}
  </div>
</container>

