<script>
	import DDM_MiniParagraph from './DDM_MiniParagraph.svelte';
	import DDM_HeredityAlleleBlock from './DDM_HeredityAlleleBlock.svelte';
	import DDM_HeredityNameBlock from './DDM_HeredityNameBlock.svelte';

  export let inputResult;
  export let inputButtonId;
  export let heredity;
  export let buttonX;
  export let buttonY;

</script>


<container class="tw-block sm:tw-flex">
  <div class="tw-flex-1">
      <DDM_HeredityNameBlock _class="tw-mb-3" bind:tempArray={heredity} bind:inputResult={inputResult}/>
      <div class="tw-p-2"/>
      <DDM_HeredityAlleleBlock _class="tw-mb-3" bind:tempArray={heredity}/>
  </div>
  <div class="tw-flex-1 tw-flex tw-bg-white">
    <DDM_MiniParagraph bind:tempArray={heredity} bind:inputButtonId />
  </div>
</container>

<style>

</style>