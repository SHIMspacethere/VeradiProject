<script>
  export let usedVar;
  export let condition;
  export let isClicked;
  export let heredity;

  let selected = null;
  let _heredityStyle = [];
  let _geneStyle = [];
  let tempArr = [];

  {
    for (let i = 0; i < 2; i++) {
      _geneStyle.push("tw-bg-yellow-500");
    }
    for (let i = 0; i < heredity[0]; i++) {
      _heredityStyle.push("");
    }
  }

  function resetBlock() {
    tempArr=[];
    let index = condition[isClicked-1].heredityIndex;
    for (let i = 0; i < heredity[2][index].length; i++) {
        tempArr.push(heredity[2][index][i]);
    }
    for (let i = 0; i < _geneStyle.length; i++) {
      _geneStyle[i] = "tw-bg-yellow-500";
    }
    selected = null;
  }

  function resetGene() {
    condition[isClicked - 1].gene1=null;
    condition[isClicked - 1].gene2=null;
  }

  function clickHeredity(i) {
    for (let j=0; j < heredity[0].length; j++)
    {
     _heredityStyle[j] = ""; 
    }
    _heredityStyle[i] = "tw-text-red-500";
    condition[isClicked-1].heredityIndex=i;
    resetBlock();
    resetGene();
    condition=condition;
  }

  function clickBlock(i) {
    resetBlock();
    _geneStyle[i] = "tw-bg-red-500";
    selected = i;
  }

  function clickGene(i) {
    if (selected == 0) condition[isClicked - 1].gene1 = i;
    else if (selected == 1) condition[isClicked - 1].gene2 = i;
    resetBlock();
    condition[isClicked - 1].setText();
  }
</script>

<container class="tw-block tw-mx-3 tw-text-2xl">
  {#each heredity[0] as item, i}
    <button class="tw-mx-2 tw-my-3 {_heredityStyle[i]}" on:click={() => clickHeredity(i)}>
      {item}
    </button>
  {/each}
  <div>
    <button class="{_geneStyle[0]} tw-px-2" on:click={() => clickBlock(0)}>
      {condition[isClicked - 1].gene1}
    </button>
    {condition[isClicked - 1].textEl[0]}
    <button class="{_geneStyle[1]} tw-px-2" on:click={() => clickBlock(1)}>
      {condition[isClicked - 1].gene2}
    </button>
    {condition[isClicked - 1].textEl[1]}
  </div>
  <div class="tw-my-3" />
  <div>
    {#each tempArr as item}
      <button class="tw-mx-2" on:click={() => clickGene(item)}>
        {item}
      </button>
    {/each}
  </div>
</container>
