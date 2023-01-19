<script>
	import DDM_HiddenContext_Trait from './context/DDM_HiddenContext_Trait.svelte';
  import DDM_MiniTree from "./DDM_MiniTree.svelte";
  export let heredity;
  export let inputButtonId;
  export let treeStyle;
  export function clickTree() {}
  export let condition;

  let isHidden = false;
  
  function SwitchIsHidden() {
    isHidden = isHidden ? false : true;
  }
</script>

<button class="tw-ml-2 tw-text-2xl" on:click={()=>SwitchIsHidden()}>[주석 제거] {isHidden}</button>
<div class="tw-overflow-hidden tw-bg-white">
  <div class="tw-px-3 tw-pt-3">
    1. 다음은 어떤 집안의 유전 형질 {heredity[0][0]}~{heredity[0][
      heredity[0].length - 1
    ]}에 대한 자료이다.
  </div>
  <div class="tw-m-4 tw-mt-3 card tw-overflow-hidden">
    <div class="tw-py-4 tw-pl-9 ">
      <span style="margin-left: -1em;">
        ○
        {#each heredity[0] as item, i}
          {#if i != 0}
            ,
          {/if}
          {item}는 대립유전자
          {#each heredity[2][i] as gene, j}
            {#if j != 0}
              와
            {/if}
            {gene}
          {/each}
          에 의해
        {/each}
        결정된다.
      </span>
      {#if !isHidden}
      <div>
        <DDM_HiddenContext_Trait bind:heredity={heredity} />
      </div>
      {/if}
    </div>
    <div class="tw-w-72 sm:tw-w-96">
      <button on:click={() => clickTree()}>
        <DDM_MiniTree bind:inputButtonId _style={treeStyle} />
      </button>
    </div>
  </div>
</div>

<style>
  .card {
    border: 1px solid black;
  }
</style>
