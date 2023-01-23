<script>
  import { drHeredity, getGene, getPermutations } from "./settings/DDM_Setting_Heredity.js";

  export let inputResult;
  export let inputButtonId;
  export let buttonX;
  export let buttonY;
  export let heredity;
  export let condition;
  export let result = [];

  let ableGene = [];
  let tempCases;
  let heredityClass = [];
  export let allCases;
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
    for (let i=0; i < heredityClass.length; i++) {
      for (let j=0; j < heredityClass[i].length; j++) {
        tempCases=[];
        drDominant(i, j);
        ableGene=heredityClass[i][j].array;
        console.log(heredityClass[i][j].array);
        geneCalc([]);
        heredityClass[i][j].setCase(tempCases.map((v) => [...v]));
        allCases.push(heredityClass[i][j]);
      }
    }
    allCases = allCases;
    console.log(allCases);
  }

  function drDominant(i, j) {
    let gene = [];
    for (let k = 0; k < heredityClass[i][j].rank.length; k++)
    {
      gene.push(heredityClass[i][j].rank[k]);
    }
    let maxExpression = 2;
    let count;
    let tempArray = [];
    for (let k = 0; k < heredity[i+3].length; k++) {
      tempArray.push([]);
      count = tempArray[k].length;
      if (heredity[i+3][k] == heredityClass[i][j].expression[0])
      {
        tempArray[k].push([[gene[0]], [gene[0]]]);
        tempArray[k].push([[gene[0]], [gene[1]]]);
      }
      else if (heredity[i+3][k] == heredityClass[i][j].expression[1])
      {
        tempArray[k].push([[gene[1]], [gene[1]]]);
      }
      else {
        tempArray[k].push([[gene[0]], [gene[0]]]);
        tempArray[k].push([[gene[0]], [gene[1]]]);
        tempArray[k].push([[gene[1]], [gene[1]]]);
      }
    }
    heredityClass[i][j].setArray(tempArray.map((v) => [...v]));
  }

  function reset() {
    while (heredityClass.length > 0) {
      heredityClass.pop();
    }
    result = [];
    allCases = [];
  }

  function setHeredityClass() {
    let chromosome, expression, rank;
    for (let i = 0; i < heredity[0].length; i++) {
      chromosome = 1;
      expression = [[1, 2], [2, 1]];
      rank = getPermutations(heredity[2][i], heredity[2][i].length);
      heredityClass.push([]);
      for (let j = 0; j < expression.length; j++) {
        for (let k = 0; k < rank.length; k++) {
          heredityClass[i].push(new drHeredity(heredity[0][i], heredity[2][i], 1, expression[j], rank[k]));
        }
      }
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
        tempCases.push(tempArray[i].map((v) => [...v]));
      }
    }
  }

</script>

<button class="tw-text-2xl" on:click={() => runCompile()}>Compile</button>
