module.exports = (function() {
  var message = "Welcome to the Revealing Module Singleton!";

  function printMessage() {
    console.log(message);
  }

  return {
    showMessage: printMessage
  }
})();