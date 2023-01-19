<script>
    let resultCount = 0;
</script>

<div class="log tw-p-3">
  <b class="tw-text-2xl">Outcomes : {resultCount}</b>
  <div class="logUnderbar tw-mb-3"/>
  <button class="logButton tw-overflow-hidden">
    <span class="tw-mr-2">[0]</span> 
    <b>
      (가) : 우성, (나) : 열성
    </b>
  </button>
  <div class="logBar tw-mb-3"/>
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