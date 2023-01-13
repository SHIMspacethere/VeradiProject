<script>
  import DDM_DefaultSettings from "./DDM_DefaultSettings.svelte";
  import DDM_InputButtonMenu from "$lib/components/DDM_InputButtonMenu.svelte";

  export let modNum = 1;

  function modToggle(n) {
    modNum = n;
  }

  let inputResult;
  let inputButtonId;
  let tempButtonId;
</script>

<container class="tw-flex tw-justify-around tw-mb-4">
  <button
    on:click={() => modToggle(1)}
    class="tw-bg-blue-300 tw-block tw-flex-1"
  >
    1. Genogram
  </button>
  <button
    on:click={() => modToggle(2)}
    class="tw-bg-blue-400 tw-block tw-flex-1"
  >
    2. Heredity
  </button>
  <button
    on:click={() => modToggle(3)}
    class="tw-bg-blue-500 tw-block tw-flex-1"
  >
    3. Condition
  </button>
  <button
    on:click={() => modToggle(4)}
    class="tw-bg-blue-600 tw-block tw-flex-1"
  >
    4. Compile
  </button>
</container>

{#if modNum == 1}
  <DDM_InputButtonMenu bind:inputResult bind:inputButtonId />
{:else if modNum == 2}
  <DDM_DefaultSettings />
{/if}
