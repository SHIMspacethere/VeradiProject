<script>
  export let tempArray = [[]];
  let tempHeredityAllele = "A";
  let selectedNameIndex = null;
  let selectedAlleleIndex = null;
  let _classHeredityName = [];
  let _classHeredityAllele = [];
  export let _class = "";

  { // Array Set
    for(let i=0; i<tempArray[1].length; i++) {
      _classHeredityAllele.push([]);
      for(let j=0; j<tempArray[1][i].length; j++) {
        _classHeredityAllele[i].push("");
      }
    }
  }

  function addHeredityAllele(t) {
    if (selectedNameIndex == null) return;
    for (let i = 0; i < tempArray[1].length; i++) {
      if (t == "" || tempArray[1][i] == t) {
        console.log("Error : duplicated!");
        return;
      }
    }
    while(tempArray[1].length > _classHeredityAllele.length) {
      _classHeredityAllele.push([]);
    } 
    tempArray[1][selectedNameIndex].push(t);
    tempArray = tempArray;
    selectedAlleleIndex = tempArray[1][selectedNameIndex].length - 1;
    selectAllele(selectedNameIndex, selectedAlleleIndex);
    tempHeredityAllele = "";
  }

  function removeHeredityAllele() {
    if (
      tempArray[1][selectedNameIndex].length == 0 ||
      selectedNameIndex == null ||
      selectedAlleleIndex == null
    )
      return;
    tempArray[1][selectedNameIndex].splice(selectedAlleleIndex, 1);
    tempArray = tempArray;
    selectedAlleleIndex = tempArray[1][selectedNameIndex].length - 1;
    selectAllele(selectedNameIndex, selectedAlleleIndex);
  }

  function selectHeredity(n) {
    for (let i = 0; i < tempArray[0].length; i++) {
      _classHeredityName[i] = "tw-text-black";
    }
    _classHeredityName[n] = "tw-text-orange-500";
    selectedNameIndex = n;
  }

  function selectAllele(n, a) {
    for (let i = 0; i < tempArray[1].length; i++) {
      for (let j = 0; j < tempArray[1][i].length; j++) {
        _classHeredityAllele[i][j] = "tw-text-black";
      }
    }
    _classHeredityAllele[n][a] = "tw-text-red-500";
    selectHeredity(n);
    selectedNameIndex = n;
    selectedAlleleIndex = a;
  }

  function modifyHeredityAllele() {
    if (
      tempHeredityAllele == "" ||
      selectedNameIndex == null ||
      selectedAlleleIndex == null
    )
      return;
    tempArray[1][selectedNameIndex][selectedAlleleIndex] = tempHeredityAllele;
    tempArray = tempArray;
  }
</script>

<div class={_class}>
  <div class="tw-text-3xl">유전형질 - 대립유전자</div>
  <div class="tw-text-2xl tw-m-2">
    <input
      class="tw-w-24"
      type="text"
      minlength="1"
      maxlength="4"
      required
      bind:value={tempHeredityAllele}
    />
    <button
      on:click={() => {
        addHeredityAllele(tempHeredityAllele);
      }}>추가</button
    >
    <button
      on:click={() => {
        modifyHeredityAllele();
      }}>변경</button
    >
    <button
      on:click={() => {
        removeHeredityAllele();
      }}>제거</button
    >
  </div>
  <div class="tw-text-2xl">
    {#each tempArray[0] as item, i}
      <div class="tw-flex">
        <button
          class="tw-block {_classHeredityName[i]}"
          on:click={() => {
            selectHeredity(i);
          }}
        >
          {i + 1}. {item} - &nbsp
        </button>

        {#each tempArray[1][i] as gene, j}
          <button
            class="tw-block {_classHeredityAllele[i][j]}"
            on:click={() => {
              selectAllele(i, j);
            }}
          >
            {gene} &nbsp
          </button>
        {/each}
      </div>
    {/each}
  </div>
</div>
