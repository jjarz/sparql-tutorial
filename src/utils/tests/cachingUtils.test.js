import cachingUtils from '../cachingUtils';

it('#getCachedResult should return the cached result if it exists', () => {
  const cache = new Map();
  const key = 'key';
  const value = 'value';

  cache.set(key, value);

  cachingUtils.getCachedResult(cache, key)
    .then((response) => {
      expect(response).toEqual(value);
    });
});

it('#cacheResult should set the value on the cache', () => {
  const cache = new Map();
  const key = 'key';
  const value = 'value';

  cachingUtils.cacheResult(cache, key, value);

  expect(cache.get(key)).toEqual(value);
});
