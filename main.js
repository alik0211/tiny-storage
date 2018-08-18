export default {
  key(key) {
    return localStorage.key(key);
  },
  get(name) {
    return JSON.parse(localStorage.getItem(name));
  },
  set(name, value) {
    return localStorage.setItem(name, JSON.stringify(value));
  },
  remove(name) {
    return localStorage.removeItem(name);
  },
  clear() {
    return localStorage.clear();
  },
  get length() {
    return localStorage.length;
  }
};
