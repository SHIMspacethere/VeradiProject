<script>
  import DDM_Tree from "./DDM_Tree.svelte";
  import DDM_Paragraph from "./DDM_Paragraph.svelte";

  export let inputResult;
  export let inputButtonId;
  export let buttonX;
  export let buttonY;
  export let heredity;

  let isClicked = 0;
  let treeStyle;

  function clickSet(i) {
    console.log(i);
    isClicked = 1;
    if (isClicked == 1) {
      treeStyle = "border: 1px solid red;";
    } else {
      treeStyle = "";
    }
  }
</script>

<container class="tw-flex">
  <div class="tw-flex-1">
    <DDM_Paragraph
      bind:heredity
      bind:inputButtonId
      clickTree={clickSet(1)}
      bind:treeStyle
    />
  </div>
  <div class="tw-flex-1">
    {#if isClicked == 1}
      <DDM_Tree bind:inputButtonId bind:heredity bind:inputResult />
    {/if}
  </div>
</container>
