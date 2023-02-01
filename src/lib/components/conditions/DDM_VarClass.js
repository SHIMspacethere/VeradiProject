class variableClass {
  constructor(id, index, type, name) {
    this.id = id;
    this.index = index;
    this.type = type;
    this.name = name;
  }
  set id(i) {
    this._id = i;
  }
  set index(i) {
    this._index = i;
  }
  set type(t) {
    this._type = t;
  }
  set name(n) {
    this._name = n;
  }
  get id() {
    return this._id;
  }
  get index() {
    return this._index;
  }
  get type() {
    return this._type;
  }
  get name() {
    return this._name;
  }
}

export default variableClass;