<script>
	import DDM_MiniTree from './DDM_MiniTree.svelte';
  
  export let inputButtonId;
  let treeStyle;
</script>

<div class="tw-m-3 tw-bg-white">
  <DDM_MiniTree bind:inputButtonId bind:_style={treeStyle}/>
</div>
<div class="tw-mx-3 tw-text-2xl">
  <div>
    1: A, B
  </div>
  <div>
    2: a, b
  </div>
</div>