import tinyStorage from '../src/main';

const user = {
  name: 'Ali',
  surname: 'Gasymov'
};

describe('set()', () => {
  test('set() set value in storage', () => {
    tinyStorage.set('user', user);
    expect(tinyStorage.get('user')).toEqual(user);
  });
});

describe('get()', () => {
  test('get() returns null if the key is missing', () => {
    expect(tinyStorage.get('nonExistentKey')).toBeNull();
  });

  test('get() returns the parsed object', () => {
    expect(tinyStorage.get('user')).toEqual(user);
  });
});

describe('key()', () => {
  test('key() returns null if the key is missing', () => {
    expect(tinyStorage.key(999)).toBeNull();
  });

  test('key() returns the key', () => {
    expect(tinyStorage.key(0)).toBe('user');
  });
});

describe('remove()', () => {
  test('remove() removes a value from the store', () => {
    tinyStorage.remove('testSet');
    expect(tinyStorage.get('testSet')).toBeNull();
  });
});

describe('clear()', () => {
  test('clear() clears storage', () => {
    tinyStorage.clear();
    expect(tinyStorage.length).toBe(0);
  });
});
