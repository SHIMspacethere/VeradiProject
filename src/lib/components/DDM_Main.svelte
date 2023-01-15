<script>
  import DDM_Condition from "$lib/components/DDM_ConditionMenu.svelte";
  import DDM_DefaultSettings from "$lib/components/DDM_DefaultSettings.svelte";
  import DDM_InputButtonMenu from "$lib/components/DDM_InputButtonMenu.svelte";

  export let modNum = 1;

  function modToggle(n) {
    modNum = n;
    console.log(heredity);
  }

  let inputResult = [];
  let inputButtonId = [];
  let heredity = [[], []];
  let buttonX = 7;
  let buttonY = 10;

  {
    for (let i = 0; i < buttonX; i++) {
      inputButtonId.push([]);
      for (let j = 0; j < buttonY; j++) {
        inputButtonId[i].push(0);
      }
    }
  }
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
  <DDM_InputButtonMenu
    bind:inputResult
    bind:inputButtonId
    bind:buttonX
    bind:buttonY
  />
{:else if modNum == 2}
  <DDM_DefaultSettings
    bind:inputResult
    bind:inputButtonId
    bind:buttonX
    bind:buttonY
    bind:heredity
  />
{:else if modNum == 3}
  <DDM_Condition
    bind:inputResult
    bind:inputButtonId
    bind:buttonX
    bind:buttonY
    bind:heredity
  />
{/if}
