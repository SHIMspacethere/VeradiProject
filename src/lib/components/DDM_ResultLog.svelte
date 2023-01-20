<script>
    export let result;
    $:resultCount = result.length;
</script>

<div class="log tw-p-3">
  <b class="tw-text-2xl">Outcomes : {resultCount}</b>
  <div class="logUnderbar tw-mb-3"/>
  {#each result as item, i}
  <button class="logButton tw-overflow-hidden">
    <span class="tw-mr-2">[{i+1}]</span> 
    <b>
      {item}
    </b>
  </button>
  <div class="logBar tw-mb-3"/>
  {/each}
</div>

<style>
  .log {
    border:2px solid black;
    border-radius : 10px 10px 10px 10px;
  }

  .logBar {
    border-bottom : 1px solid gray;
  }

  .logUnderbar {
    border-bottom : 2px solid black;
  }
</style>