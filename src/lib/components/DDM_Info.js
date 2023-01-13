import img_none from "$lib/static/img/veradiBioProject/genogram/none.png";
import img_unknown from "$lib/static/img/veradiBioProject/genogram/unknown.png";
import img_block from "$lib/static/img/veradiBioProject/genogram/block.png";
import img_blockCenterDown2 from "$lib/static/img/veradiBioProject/genogram/blockCenterDown2.png";
import img_blockCenterDown3 from "$lib/static/img/veradiBioProject/genogram/blockCenterDown3.png";
import img_blockCenterUp from "$lib/static/img/veradiBioProject/genogram/blockCenterUp.png";
import img_blockLeftDown from "$lib/static/img/veradiBioProject/genogram/blockLeftDown.png";
import img_blockRightDown from "$lib/static/img/veradiBioProject/genogram/blockRightDown.png";
import img_blockX from "$lib/static/img/veradiBioProject/genogram/blockX.png";
import img_blockY from "$lib/static/img/veradiBioProject/genogram/blockY.png";
import img_man from "$lib/static/img/veradiBioProject/genogram/man.png";
import img_manA from "$lib/static/img/veradiBioProject/genogram/manA.png";
import img_woman from "$lib/static/img/veradiBioProject/genogram/woman.png";
import img_womanA from "$lib/static/img/veradiBioProject/genogram/womanA.png";

export class InputButtonSet {
  constructor(key, image, value) {
    this.key = key;
    this.image = image;
    this.value = value;
    this.originImage = image;
    this.able = true;
  }
  set key(k) {
    this._key = k;
  }
  set image(i) {
    this._image = i;
  }
  set value(v) {
    this._value = v;
  }
  set able(b) {
    this._able = b;
    if (b == false) this._image = img_none;
  }
  set originImage(i) {
    this._originImage = i;
  }
  set originValue(v) {
    this._originValue = v;
  }
  get key() {
    return this._key;
  }
  get image() {
    return this._image;
  }
  get value() {
    return this._value;
  }
  get able() {
    return this._able;
  }
  get originImage() {
    return this._originImage;
  }
  get originValue() {
    return this._originValue;
  }
  toReset() {
    this._image = this._originImage;
    this._value = this._originValue;
  }
  toDisabled() {
    this._image = img_none;
    this._value = "-";
  }
}

export const VP_DDM_INPUTCHECKS = [
  {
    id: 0,
    img: img_block,
    img2: img_none,
  },
  {
    id: 1,
    img: img_man,
  },
  {
    id: 2,
    img: img_woman,
  },
  {
    id: 3,
    img: img_unknown,
  },
  {
    id: 4,
    img: img_blockCenterUp,
  },
  {
    id: 5,
    img: img_blockX,
  },
  {
    id: 6,
    img: img_blockCenterDown2,
  },
  {
    id: 7,
    img: img_blockCenterDown3,
  },
  {
    id: 8,
    img: img_blockY,
  },
  {
    id: 9,
    img: img_blockLeftDown,
  },
  {
    id: 10,
    img: img_blockRightDown,
  },
  {
    id: 11,
    img: img_none,
  },
];