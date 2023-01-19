<script>
	import DDM_ResultDetail from './DDM_ResultDetail.svelte';
	import DDM_ResultLog from './DDM_ResultLog.svelte';

  export let inputResult;
  export let inputButtonId;
  export let buttonX;
  export let buttonY;
  export let heredity;
  export let condition;


</script>

<container class="tw-flex">
  <div class="tw-flex-1">
    <button class="tw-text-2xl">Compile</button>
    <DDM_ResultLog />
  </div>
  <div class="tw-flex-1">
    <DDM_ResultDetail bind:inputButtonId/>
  </div>
</container>

