module.exports = function countdown(tick) {
  let count = 3;

  let timer = setInterval(_ => {
    tick(count--)
    if (count === -1) {
      clearInterval(timer);
    }
  }, 1000);
};

// AMD module format
// CommonJS module format
// Module Bundlers

// Browserify - Module Bundler
// WebPack - Module Bundler