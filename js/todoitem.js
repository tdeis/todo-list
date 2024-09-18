export default class ToDoItem {
  constructor() {
    this._id = null;
    this._item = null;
    this._price = null;
  }

  getId() {
    return this._id;
  }

  setId(id) {
    this._id = id;
  }

  getItem() {
    return `${this._item} -> ${this._price}`;
  }

  setItem(item) {
    this._item = item;
  }

  setPrice(price) {
    this._price = price;
  }
}
