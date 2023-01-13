<script>
  export let tempArray;
</script>

<container class="tw-bg-white tw-p-4">
  1. 다음은 어떤 집안의 유전 형질 {tempArray[0][0]}~{tempArray[0][
    tempArray[0].length - 1
  ]}에 대한 자료이다.
  <div class="tw-p-5">
    <card class="tw-p-4">
      ◦
      <span>
        {#each tempArray[0] as item, i}
          {#if i != 0}
            ,
          {/if}
          {item}는 대립유전자
          {#each tempArray[1][i] as gene, j}
            {#if j != 0}
              와
            {/if}
            {gene}
          {/each}
          에 의해
        {/each}
        결정된다.
      </span>
    </card>
  </div>
</container>

<style>
  card {
    border: 1px solid black;
  }
</style>
