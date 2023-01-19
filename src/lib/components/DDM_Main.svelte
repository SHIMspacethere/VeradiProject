<script>
	import DDM_CompileMenu from './DDM_CompileMenu.svelte';
  import DDM_ConditionMenu from "$lib/components/DDM_ConditionMenu.svelte";
  import DDM_DefaultSettings from "$lib/components/DDM_DefaultSettings.svelte";
  import DDM_InputButtonMenu from "$lib/components/DDM_InputButtonMenu.svelte";

  export let modNum = 1;

  function modToggle(n) {
    modNum = n;
  }

  let inputResult = [];
  let inputButtonId = [];
  let heredity = [[], [], []];
  let compileResult = [];
  let buttonX = 7;
  let buttonY = 10;
  let condition= [];

  function showAll() {
    console.log(inputResult);
    console.log(inputButtonId);
    console.log(heredity);
  }

  function load() {
    inputResult = [
      [
        [0, 0, 1],
        [0, 2, 2],
        [2, 0, 2],
        [2, 2, 1],
      ],
      [[0, 1, 2, 3]],
    ];
    inputButtonId = [
      [1, 4, 2, 0, 0, 0, 0, 0, 0, 0],
      [9, 6, 10, 0, 0, 0, 0, 0, 0, 0],
      [2, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    heredity = [["(가)"], ["우열"], [["A", "a"]], [1, 2, 1, 2]];
  }

  {
    for (let i = 0; i < buttonX; i++) {
      inputButtonId.push([]);
      for (let j = 0; j < buttonY; j++) {
        inputButtonId[i].push(0);
      }
    }
  }
</script>

<button on:click={() => showAll()}> Show All! </button>
<button on:click={() => load()}> Load ! </button>
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
  <DDM_ConditionMenu
    bind:inputResult
    bind:inputButtonId
    bind:buttonX
    bind:buttonY
    bind:heredity
    bind:condition
  />
  {:else if modNum == 4}
  <DDM_CompileMenu
    bind:inputResult
    bind:inputButtonId
    bind:buttonX
    bind:buttonY
    bind:heredity
    bind:condition
  />
{/if}
