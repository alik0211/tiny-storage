import { tinyLocalStorage, tinySessionStorage } from '../src/main';

const user = {
  name: 'Ali',
  surname: 'Gasymov'
};

describe('tinyLocalStorage', () => {
  test('set() set value in storage', () => {
    tinyLocalStorage.set('user', user);
    expect(tinyLocalStorage.get('user')).toEqual(user);
  });

  test('get() returns null if the key is missing', () => {
    expect(tinyLocalStorage.get('nonExistentKey')).toBeNull();
  });

  test('get() returns the parsed object', () => {
    expect(tinyLocalStorage.get('user')).toEqual(user);
  });

  test('key() returns null if the key is missing', () => {
    expect(tinyLocalStorage.key(999)).toBeNull();
  });

  test('key() returns the key', () => {
    expect(tinyLocalStorage.key(0)).toBe('user');
  });

  test('remove() removes a value from the store', () => {
    tinyLocalStorage.remove('testSet');
    expect(tinyLocalStorage.get('testSet')).toBeNull();
  });

  test('clear() clears storage', () => {
    tinyLocalStorage.clear();
    expect(tinyLocalStorage.length).toBe(0);
  });
});

describe('tinySessionStorage', () => {
  test('set() set value in storage', () => {
    tinySessionStorage.set('user', user);
    expect(tinySessionStorage.get('user')).toEqual(user);
  });

  test('get() returns null if the key is missing', () => {
    expect(tinySessionStorage.get('nonExistentKey')).toBeNull();
  });

  test('get() returns the parsed object', () => {
    expect(tinySessionStorage.get('user')).toEqual(user);
  });

  test('key() returns null if the key is missing', () => {
    expect(tinySessionStorage.key(999)).toBeNull();
  });

  test('key() returns the key', () => {
    expect(tinySessionStorage.key(0)).toBe('user');
  });

  test('remove() removes a value from the store', () => {
    tinySessionStorage.remove('testSet');
    expect(tinySessionStorage.get('testSet')).toBeNull();
  });

  test('clear() clears storage', () => {
    tinySessionStorage.clear();
    expect(tinySessionStorage.length).toBe(0);
  });
});
