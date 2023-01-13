<script>
  export let tempArray = [[]];
  let tempHeredityName = "(가)";
  let selectedNameIndex = 0;
  let _classHeredityName = [];
  export let _class = "";

  function addHeredityName(t) {
    let count = tempArray[0].length;
    for (let i = 0; i < tempArray[0].length; i++) {
      if (t == "" || tempArray[0][i] == t) {
        console.log("Error : duplicated!");
        return;
      }
    }
    tempArray[0].push(t);
    tempArray[1].push([]);
    tempArray = tempArray;
    selectHeredityName(count);
    tempHeredityName = "";
  }

  function removeHeredityName() {
    if (tempArray[0].length == 0) return;
    tempArray[0].splice(selectedNameIndex, 1);
    tempArray[1].splice(selectedNameIndex, 1);
    tempArray = tempArray;
    selectHeredityName(tempArray[0].length);
  }

  function selectHeredityName(n) {
    for (let i = 0; i < tempArray[0].length; i++) {
      _classHeredityName[i] = "tw-text-black";
    }
    _classHeredityName[n] = "tw-text-red-500";
    selectedNameIndex = n;
  }

  function modifyHeredityName() {
    if (tempHeredityName == "" || tempArray[0].length == 0) return;
    tempArray[0][selectedNameIndex] = tempHeredityName;
    tempArray = tempArray;
  }
</script>

<div class={_class}>
  <div class="tw-text-2xl">유전형질 - 이름</div>
  <div>
    <input
      class="tw-w-24"
      type="text"
      minlength="1"
      maxlength="4"
      required
      bind:value={tempHeredityName}
    />
    <button
      on:click={() => {
        addHeredityName(tempHeredityName);
      }}>추가</button
    >
    <button
      on:click={() => {
        modifyHeredityName();
      }}>변경</button
    >
    <button
      on:click={() => {
        removeHeredityName();
      }}>제거</button
    >
  </div>
  <div>
    {#each tempArray[0] as item, i}
      <button
        class="tw-block {_classHeredityName[i]}"
        on:click={() => {
          selectHeredityName(i);
        }}
      >
        {i + 1}. {item}
      </button>
    {/each}
  </div>
</div>
