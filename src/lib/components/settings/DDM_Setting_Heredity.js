function copy(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export class drHeredity {
  constructor(name, gene, chromosome, expression, rank) {
    this.name = name;
    this.gene = gene;
    this.chromosome = chromosome;
    this.expression = expression;
    this.rank = rank;
    this.array = [];
    this.case = [];
  }
  set name(n) {
    this._name = n;
  }
  set gene(g) {
    this._gene = g;
  }
  set chromosome(i) {
    this._chromosome = i;
  }
  set expression(e) {
    this._expression = e;
  }
  set rank(a) {
    this._rank = a; 
  }
  set array(a) {
    this._array = a;
  }
  set case(a) {
    this._case = a;
  }
  get name() {
    return this._name;
  }
  get gene() {
    return this._gene;
  }
  get chromosome() {
    return this._chromosome;
  }
  get expression() {
    return this._expression;
  }
  get rank() {
    return this._rank;
  }
  get array() {
    return this._array;
  }
  get case() {
    return this._case;
  }
  setArray(arr) {
    this.array=arr;
  }
  setCase(arr) {
    this.case=arr;
  }
  getCaseLength() {
    return this.case.length
  }
  deleteCase(i) {
    this.case.splice(i, 1);
  }
  objectCopy(arr) {
    this.name = copy(arr.name);
    this.gene = copy(arr.gene);
    this.chromosome = copy(arr.chromosome);
    this.expression = copy(arr.expression);
    this.rank = copy(arr.rank);
    this.array = copy(arr.array);
    this.case = copy(arr.case);
  }
}

export function getGene(arr, selectNumber, result) {
  result = [];
};

export function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};
