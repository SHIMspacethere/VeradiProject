<script>
  import DDM_Tree from "./DDM_Tree.svelte";
  import DDM_Paragraph from "./DDM_Paragraph.svelte";

  export let inputResult;
  export let inputButtonId;
  export let buttonX;
  export let buttonY;
  export let heredity;
  export let condition;

  let isClicked = 0;
  let treeStyle;

  function clickSet(i) {
    isClicked = 0;
    if (isClicked == 0) {
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
      clickTree={clickSet(0)}
      bind:treeStyle
      bind:condition
    />
  </div>
  <div class="tw-flex-1">
    {#if isClicked == 0}
      <DDM_Tree bind:inputButtonId bind:heredity bind:inputResult />
    {/if}
  </div>
</container>
