class TinyStorage {
  constructor(storage) {
    this.storage = storage;
  }
  key(index) {
    return this.storage.key(index);
  }
  get(keyName) {
    return JSON.parse(this.storage.getItem(keyName));
  }
  set(keyName, keyValue) {
    return this.storage.setItem(keyName, JSON.stringify(keyValue));
  }
  remove(keyName) {
    return this.storage.removeItem(keyName);
  }
  clear() {
    return this.storage.clear();
  }
  get length() {
    return this.storage.length;
  }
}

const tinyLocalStorage = new TinyStorage(localStorage);
const tinySessionStorage = new TinyStorage(sessionStorage);

export { tinyLocalStorage, tinySessionStorage };
