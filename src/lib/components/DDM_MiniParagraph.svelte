<script>
  import DDM_MiniTree from './DDM_MiniTree.svelte';
  export let tempArray;
  export let inputButtonId;
</script>


<container class="tw-p-4 tw-overflow-hidden"> 
  1. 다음은 어떤 집안의 유전 형질 {tempArray[0][0]}~{tempArray[0][
    tempArray[0].length - 1
  ]}에 대한 자료이다.
  <div class="tw-m-1 tw-mt-4 card tw-overflow-hidden">
    <div class=" tw-p-4 tw-pl-9 ">
      <span style="margin-left: -1em;">
        ○
        {#each tempArray[0] as item, i}
          {#if i != 0}
            ,
          {/if}
          {item}는 대립유전자
          {#each tempArray[2][i] as gene, j}
            {#if j != 0}
              와
            {/if}
            {gene}
          {/each}
          에 의해
        {/each}
        결정된다.
      </span>
    </div>
    <div class="tw-w-72 sm:tw-w-96">
      <DDM_MiniTree bind:inputButtonId />
    </div>
  </div>

</container>

<style>
  .card {
    border: 1px solid black;
  }
</style>
