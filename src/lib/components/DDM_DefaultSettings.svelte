<script>
	import DDM_Paragraph from './DDM_Paragraph.svelte';
	import DDM_HeredityAlleleBlock from './DDM_HeredityAlleleBlock.svelte';
	import DDM_HeredityNameBlock from './DDM_HeredityNameBlock.svelte';

  export let inputResult;
  export let inputButtonId;
  export let heredity;
  export let buttonX;
  export let buttonY;

  function debug() {
    console.log(heredity);
  }

</script>

<button on:click={()=>debug()}>
Debug Console
</button>
<DDM_HeredityNameBlock _class="tw-mb-3" bind:tempArray={heredity}/>
<div class="tw-p-2"/>
<DDM_HeredityAlleleBlock _class="tw-mb-3" bind:tempArray={heredity}/>
<DDM_Paragraph bind:tempArray={heredity} bind:inputButtonId />