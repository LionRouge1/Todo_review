export default class localStorages {
  constructor(store = []){
   this.store = store;
  }

  getItem(str  = '') {
   return JSON.stringify(this.store)
  }

  setItem(a = '', jsf) {
    this.store = JSON.parse(jsf);
  }
}