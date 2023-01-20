export class drHeredity {
  constructor(name, gene) {
    this.name = name;
    this.gene = gene;
    this.dominant = [];
    this.recessive = [];
  }
  set name(n) {
    this._name = n;
  }
  set gene(g) {
    this._gene = g;
  }
  set dominant(a) {
    this._dominant = a; 
  }
  set recessive(a) {
    this._recessive = a;
  }
  get name() {
    return this._name;
  }
  get gene() {
    return this._gene;
  }
  get dominant() {
    return this._dominant;
  }
  get recessive() {
    return this._recessive;
  }
}