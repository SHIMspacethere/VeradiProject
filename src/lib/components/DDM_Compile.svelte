<script>
  import {
    drHeredity,
    getGene,
    getPermutations,
  } from "./settings/DDM_Setting_Heredity.js";

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

  function runCompile() {
    reset();
    setHeredityClass();
    for (let i = 0; i < heredityClass.length; i++) {
      for (let j = 0; j < heredityClass[i].length; j++) {
        tempCases = [];
        drDominant(i, j, heredityClass[i][j].chromosome);
        ableGene = heredityClass[i][j].array;
        geneCalc([]);
        heredityClass[i][j].setCase(tempCases.map((v) => [...v]));
      }
    }
    getSquare([], 0);
    allCases = allCases;
    console.log(allCases);
    for(let i=0; i<condition.length; i++) {
      condition[i].run(allCases);
    }
  }

  function getSquare(arr, i) {
    if (heredityClass.length > i) {
      for (let j = 0; j < heredityClass[i].length; j++) {
        arr.push(heredityClass[i][j]);
        getSquare([...arr], i + 1);
        arr.pop();
      }
    } else {
      allCases.push([...arr]);
    }
  }

  function drDominant(i, j, index) {
    let gene = [];
    for (let k = 0; k < heredityClass[i][j].rank.length; k++) {
      gene.push(heredityClass[i][j].rank[k]);
    }
    let isExist = false;
    for (let k = 0; k < i; k++) {
      if (heredityClass[k][0].chromosome == index) {
        isExist = true;
      }
    }
    let count;
    let tempArray = [];
      // non-autosome (XY)
      for (let k = 0; k < heredity[i + 3].length; k++) {
        tempArray.push([]);
        count = tempArray[k].length;
        if (inputResult[0][k][2] == 1 && index == 0) {
          if (heredity[i + 3][k] == heredityClass[i][j].expression[0]) {
            tempArray[k].push([[gene[0]], ["Y"]]);
          } else if (heredity[i + 3][k] == heredityClass[i][j].expression[1]) {
            tempArray[k].push([[gene[1]], ["Y"]]);
          } else {
            tempArray[k].push([[gene[0]], ["Y"]]);
            tempArray[k].push([[gene[1]], ["Y"]]);
          }
        } else { // autosome
          if (heredity[i + 3][k] == heredityClass[i][j].expression[0]) {
            tempArray[k].push([[gene[0]], [gene[0]]]);
            tempArray[k].push([[gene[0]], [gene[1]]]);
            if (isExist == true) tempArray[k].push([[gene[1]], [gene[0]]]);
          } else if (heredity[i + 3][k] == heredityClass[i][j].expression[1]) {
            tempArray[k].push([[gene[1]], [gene[1]]]);
          } else {
            tempArray[k].push([[gene[0]], [gene[0]]]);
            tempArray[k].push([[gene[0]], [gene[1]]]);
            tempArray[k].push([[gene[1]], [gene[1]]]);
            if (isExist == true) tempArray[k].push([[gene[1]], [gene[0]]]);
          }
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
      expression = [
        [1, 2],
        [2, 1],
      ];
      rank = getPermutations(heredity[2][i], heredity[2][i].length);
      heredityClass.push([]);
      for (let j = 0; j < expression.length; j++) {
        for (let k = 0; k < rank.length; k++) {
          heredityClass[i].push(
            new drHeredity(
              heredity[0][i],
              heredity[2][i],
              chromosome,
              expression[j],
              rank[k]
            )
          );
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
