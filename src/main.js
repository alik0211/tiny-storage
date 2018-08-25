function createTinyStorage(storage) {
  return {
    key(index) {
      return storage.key(index);
    },
    get(keyName) {
      return JSON.parse(storage.getItem(keyName));
    },
    set(keyName, keyValue) {
      return storage.setItem(keyName, JSON.stringify(keyValue));
    },
    remove(keyName) {
      return storage.removeItem(keyName);
    },
    clear() {
      return storage.clear();
    },
    get length() {
      return storage.length;
    }
  }
}

const tinyLocalStorage = createTinyStorage(localStorage);
const tinySessionStorage = createTinyStorage(sessionStorage);

export { tinyLocalStorage, tinySessionStorage };
