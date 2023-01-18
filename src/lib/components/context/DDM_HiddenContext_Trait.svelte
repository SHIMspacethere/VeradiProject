<script>
  export let heredity;
</script>

<container>
  <i class="tw-text-green-600"style="margin-left: -1em;">
    ○
    {#each heredity[0] as item, i}
      {#if heredity[1][i] == "우열"}
        {item}는 우열 관계과 확실하
      {:else if heredity[1][i] == "다인자"}
        {item}는 다인자 관계이
      {:else}
      {/if}
      {#if heredity[0].length == i+1}
        다.
      {:else}
        며,&nbsp
      {/if}
    {/each}
  </i>
</container>
