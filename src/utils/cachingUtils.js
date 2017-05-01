module.exports = {
  getCachedResult: (cache, url) => {
    const key = url;

    if (cache.has(key)) {
      return new Promise((resolve, reject) => {
        resolve(cache.get(key));
      });
    }
  },

  cacheResult: (cache, key, response) => {
    cache.set(key, response);
  }
};
