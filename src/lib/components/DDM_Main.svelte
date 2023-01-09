<script>
	import DDM_InputButtonMenu from '$lib/components/DDM_InputButtonMenu.svelte';
  import { Col, Row, Container } from "sveltestrap";

  export let modNum = 1;

  function modToggle(n) {
    modNum = n;
  }

  let inputResult;
  let resultButtonId;
  let tempButtonId;
</script>

<container class="tw-flex tw-justify-around tw-mb-4">
  <button on:click={() => modToggle(1)} class="tw-bg-blue-300 tw-block tw-flex-1">
    1. Genogram
  </button>
  <button on:click={() => modToggle(2)} class="tw-bg-blue-400 tw-block tw-flex-1">
    2. WhoisChinese
  </button>
  <button on:click={() => modToggle(3)} class="tw-bg-blue-500 tw-block tw-flex-1">
    3. Condition
  </button>
  <button on:click={() => modToggle(4)} class="tw-bg-blue-600 tw-block tw-flex-1">
    4. Compile
  </button>
</container>

{#if modNum == 1}
  <DDM_InputButtonMenu bind:inputResult={inputResult}/>
{/if}