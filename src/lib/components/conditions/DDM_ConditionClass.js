export class condition_dominance {
  constructor() {
    this.name = "dominance";
    this.heredityIndex = null;
    this.isError = false;
    this.gene1 = null;
    this.gene2 = null;
    this.text = null;
    this.textEl = ["는 ", "에 대해 완전 우성이다."];
  }
  set heredityIndex(i) {
    this._heredityIndex = i;
  }
  set gene1(g) {
    this._gene1 = g;
  }
  set gene2(g) {
    this._gene2 = g;
  }
  set text(t) {
    this._text = t;
  }
  get heredityIndex() {
    return this._heredityIndex;
  }
  get gene1() {
    return this._gene1;
  }
  get gene2() {
    return this._gene2;
  }
  get text() {
    return this._text;
  }
  run(arr) {
    let tempi = [];
    let geneRank = [this.gene1, this.gene2];
    let arrRank = [];
    console.log(geneRank);
    for (let i = 0; i < arr.length; i++) {
      arrRank = arr[i][this.heredityIndex].rank;
      if (JSON.stringify(arrRank)!=JSON.stringify(geneRank)) {
        tempi.push(i);
        // arr.splice(i, 1);
      }
      arrRank = [];
    }
    removeArr(tempi, arr);
    arr[1][1].case.splice(0, 1);
    console.log(arr[1][1].case);
  }
  setText() {
    let temp = "";
    temp = this.gene1 + this.textEl[0] + this.gene2 + this.textEl[1];
    this.text = temp;
  }
}

function removeArr(temp, arr) {
  while (temp.length != 0) {
    let num = temp.pop();
    console.log(num);
    arr.splice(num, 1);
  }
}
