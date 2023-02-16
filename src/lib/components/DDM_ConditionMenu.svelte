<script>
	import DDM_Condition_Dominance from './conditions/DDM_Condition_Dominance.svelte';
  import DDM_ConditionVarTable from "./DDM_ConditionVarTable.svelte";
  import DDM_ConditionTable from "./DDM_ConditionTable.svelte";
  import DDM_Tree from "./DDM_Tree.svelte";
  import DDM_Paragraph from "./DDM_Paragraph.svelte";

  export let inputResult;
  export let inputButtonId;
  export let buttonX;
  export let buttonY;
  export let heredity;
  export let condition;
  export let usedVar;

  let isClicked = 0;
  let treeStyle = ["border: 1px solid red;"];
  let isCMenuClicked = false;
  let isTableClicked = false;
  let resetClick = () => {isClicked = null;
    for(let i=0; i<treeStyle.length; i++) {
      treeStyle[i] = "";
    }
  }
</script>

{#if isCMenuClicked == true}
  <DDM_ConditionTable bind:isCMenuClicked bind:condition />
{/if}
{#if isTableClicked == true}
  <DDM_ConditionVarTable bind:isTableClicked bind:condition bind:usedVar />
{/if}
<container class="tw-flex">
  <div class="tw-flex-1">
    <DDM_Paragraph
      bind:heredity
      bind:inputButtonId
      bind:treeStyle
      bind:condition
      bind:isCMenuClicked
      bind:isTableClicked
      bind:isClicked
    />
  </div>
  <div class="tw-flex-1">
    {#if isClicked == 0}
      <DDM_Tree bind:inputButtonId bind:heredity bind:inputResult />
    {:else if condition[isClicked-1].name=="dominance"}
      <DDM_Condition_Dominance bind:heredity bind:usedVar bind:condition bind:isClicked />
    {/if}
  </div>
</container>
