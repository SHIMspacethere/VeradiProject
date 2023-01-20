<script>
	import DDM_Compile from './DDM_Compile.svelte';
	import DDM_ResultDetail from './DDM_ResultDetail.svelte';
	import DDM_ResultLog from './DDM_ResultLog.svelte';

  export let inputResult;
  export let inputButtonId;
  export let buttonX;
  export let buttonY;
  export let heredity;
  export let condition;
  let result = [];

</script>

<container class="tw-flex">
  <div class="tw-flex-1">
    <DDM_Compile bind:inputResult bind:inputButtonId bind:heredity bind:allCases={result} />
    <DDM_ResultLog bind:result />
  </div>
  <div class="tw-flex-1">
    <DDM_ResultDetail bind:inputButtonId/>
  </div>
</container>

