<script>
	import DDM_Tree from './DDM_Tree.svelte';
	import DDM_Paragraph from './DDM_Paragraph.svelte';

  export let inputResult;
  export let inputButtonId;
  export let buttonX;
  export let buttonY;
  export let heredity;

  let isClicked=0;

  function clickSet(i) {
    console.log(i);
    isClicked=1;
  }
</script>

<container class="tw-flex">
  <div class="tw-flex-1 tw-bg-white">
    <DDM_Paragraph bind:tempArray={heredity} bind:inputButtonId={inputButtonId} clickTree={clickSet(1)} />
  </div>
  <div class="tw-flex-1">
    {#if isClicked==1}
      <DDM_Tree bind:inputButtonId={inputButtonId} bind:heredity={heredity} bind:inputResult={inputResult} />
    {/if}
  </div>
</container>