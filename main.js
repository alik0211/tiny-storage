class TinyStorage {
  constructor(storage) {
    this.storage = storage;
  }
  setStorage(storage) {
    this.storage = storage;
  }
  key(key) {
    return this.storage.key(key);
  }
  get(name) {
    return JSON.parse(this.storage.getItem(name));
  }
  set(name, value) {
    return this.storage.setItem(name, JSON.stringify(value));
  }
  remove(name) {
    return this.storage.removeItem(name);
  }
  clear() {
    return this.storage.clear();
  }
  get length() {
    return this.storage.length;
  }
}

const tinyStorage = new TinyStorage(localStorage);

export default tinyStorage;
