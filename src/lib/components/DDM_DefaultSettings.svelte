<script>
	import DDM_Paragraph from './DDM_Paragraph.svelte';
	import DDM_HeredityAlleleBlock from './DDM_HeredityAlleleBlock.svelte';
	import DDM_HeredityNameBlock from './DDM_HeredityNameBlock.svelte';

  let heredity=[[], []];

  function debug() {
    console.log(heredity);
  }

</script>

<button on:click={()=>debug()}>
Debug Console
</button>
<DDM_HeredityNameBlock _class="tw-mb-3" bind:tempArray={heredity}/>
<DDM_HeredityAlleleBlock _class="tw-mb-3" bind:tempArray={heredity}/>
<DDM_Paragraph bind:tempArray={heredity}/>