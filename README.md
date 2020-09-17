# tiny-storage

[![NPM](https://img.shields.io/npm/v/tiny-storage.svg?style=flat-square)](https://www.npmjs.com/package/tiny-storage)
[![Travis](https://img.shields.io/travis/alik0211/tiny-storage/master.svg?style=flat-square)](https://travis-ci.com/alik0211/tiny-storage)
[![Coverage Status](https://img.shields.io/coveralls/github/alik0211/tiny-storage/master.svg?style=flat-square)](https://coveralls.io/github/alik0211/tiny-storage?branch=master)

Tiny wrapper around localStorage and sessionStorage with reliable data storage.

## Description
The `tinyLocalStorage` is the wrapper over the `localStorage`.

The `tinySessionStorage` is the wrapper over the `sessionStorage`.

## Quick start
### Module
#### Installation
```
npm install tiny-storage
```
#### Usage
```javascript
import { tinyLocalStorage, tinySessionStorage } from 'tiny-storage';
// Or as CommonJS
// const { tinyLocalStorage, tinySessionStorage } = require('tiny-storage');

tinyLocalStorage.set('user', {
  name: 'Ali',
  surname: 'Gasymov'
});

tinySessionStorage.set('user', {
  name: 'Ali',
  surname: 'Gasymov'
});
```

### Browser
#### Installation
```html
<script src="https://cdn.jsdelivr.net/npm/tiny-storage@2.0.0/dist/tiny-storage.min.js"></script>
```
#### Usage
```html
<script>
  tinyLocalStorage.set('user', {
    name: 'Ali',
    surname: 'Gasymov'
  });

  tinySessionStorage.set('user', {
    name: 'Ali',
    surname: 'Gasymov'
  });
</script>
```

## Methods
### `key(index)`
When passed a number n, returns the name of the nth key in the storage. The order of keys is user-agent defined, so you should not rely on it.

```javascript
tinyLocalStorage.key(0);

tinySessionStorage.key(0);
```
### `get(keyName)`
When passed a key name, will return that key's value or null if the key does not exist.

```javascript
tinyLocalStorage.get('user');

tinySessionStorage.get('user');
```
### `set(keyName, keyValue)`
When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.

```javascript
tinyLocalStorage.set('user', {
  name: 'Ali',
  surname: 'Gasymov'
});

tinySessionStorage.set('user', {
  name: 'Ali',
  surname: 'Gasymov'
});
```
### `remove(keyName)`
When passed a key name, will remove that key from the storage if it exists. If there is no item associated with the given key, this method will do nothing.

```javascript
tinyLocalStorage.remove('user');

tinySessionStorage.remove('user');
```
### `clear()`
When invoked, clears all stored keys.

```javascript
tinyLocalStorage.clear();

tinySessionStorage.clear();
```

## Properties
### `length`
Returns an integer representing the number of data items stored in the storage.
