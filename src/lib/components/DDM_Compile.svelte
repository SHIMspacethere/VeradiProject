<script>
  import { drHeredity } from "./settings/DDM_Setting_Heredity.js";

  export let inputResult;
  export let inputButtonId;
  export let buttonX;
  export let buttonY;
  export let heredity;
  export let condition;
  export let result = [];

  let heredityClass = [];
  export let allCases = [];
  let ableGene = [];
  // let ableGene2 = [
  //   [
  //     [["A"], ["a"]],
  //     [["A"], ["A"]],
  //   ],
  //   [
  //     [["B"], ["b"]],
  //     [["b"], ["b"]],
  //   ],
  //   [
  //     [["D"], ["D"]],
  //     [["D"], ["d"]],
  //   ]
  // ];

  function runCompile() {
    reset();
    setHeredityClass();
    drDominant(0);
    geneCalc([]);
    console.log(ableGene);
    console.log(allCases);
  }

  function drDominant(i) {
    let gene = [];
    for (let j = 0; j < heredityClass[i].gene.length; j++)
    {
      gene.push(heredityClass[i].gene[j]);
    }
    let count;
    let tempArray = [];
    for (let j = 0; j < heredity[i+3].length; j++) {
      tempArray.push([]);
      if (heredity[i+3][j] == 1)
      {
        count = tempArray[j].length;
        tempArray[j].push([[gene[1]], [gene[1]]]);
      }
      else if (heredity[i+3][j] == 2)
      {
        count = tempArray[j].length;
        tempArray[j].push([[gene[0]], [gene[0]]]);
        tempArray[j].push([[gene[0]], [gene[1]]]);
      }
      else {}
    }
    ableGene = tempArray.map((v) => [...v]);
  }

  function reset() {
    while (heredityClass.length > 0) {
      heredityClass.pop();
    }
    allCases = [];
  }

  function setHeredityClass() {
    for (let i = 0; i < heredity[0].length; i++) {
      heredityClass.push(new drHeredity(heredity[0][i], heredity[2][i]));
    }
  }

  function geneCalc(arr) {
    let tempArray = [];
    let count = arr.length;
    if (count < ableGene.length - 1) {
      for (let i = 0; i < ableGene[count].length; i++) {
        tempArray[i] = arr.map((v) => [...v]);
        tempArray[i].push(ableGene[count][i]);
        geneCalc(tempArray[i].map((v) => [...v]));
      }
    } else {
      for (let i = 0; i < ableGene[count].length; i++) {
        tempArray[i] = arr.map((v) => [...v]);
        tempArray[i].push(ableGene[count][i]);
        allCases.push(tempArray[i].map((v) => [...v]));
      }
    }
  }
</script>

<button class="tw-text-2xl" on:click={() => runCompile()}>Compile</button>
