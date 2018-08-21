# tiny-storage

[![Travis](https://img.shields.io/travis/alik0211/tiny-storage.svg?style=flat-square)](https://travis-ci.org/alik0211/tiny-storage)

Tiny wrapper around localStorage and sessionStorage

## Installation
### From npm
```
npm install tiny-storage
```

### From CDN
```html
<script src="https://cdn.jsdelivr.net/npm/tiny-storage@1.0.0/dist/tiny-storage.min.js"></script>
<script>
  tinyStorage.set('user', {
    name: 'Ali',
    surname: 'Gasymov'
  });
</script>
```

## Methods
### `setStorage(storage)`

Set any [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage). For example, sessionStorage.

```javascript
tinyStorage.setStorage(sessionStorage);
```
### `key(index)`
When passed a number n, returns the name of the nth key in the storage. The order of keys is user-agent defined, so you should not rely on it.

```javascript
tinyStorage.key(0);
```
### `get(keyName)`
When passed a key name, will return that key's value or null if the key does not exist.

```javascript
tinyStorage.get('user');
```
### `set(keyName, keyValue)`
When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.

```javascript
tinyStorage.set('user', {
  name: 'Ali',
  surname: 'Gasymov'
});
```
### `remove(keyName)`
When passed a key name, will remove that key from the storage if it exists. If there is no item associated with the given key, this method will do nothing.

```javascript
tinyStorage.remove('user');
```
### `clear()`
When invoked, clears all stored keys.

```javascript
tinyStorage.clear();
```

## Properties
### `length`
Returns an integer representing the number of data items stored in the storage.
