export default class localStorages {
  constructor(store = []) {
    this.store = store;
  }

  getItem() {
    return JSON.stringify(this.store);
  }

  setItem(jsf) {
    this.store = JSON.parse(jsf);
  }
}