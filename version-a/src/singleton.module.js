// Revealing Module Pattern - Singleton
var electronDemo = electronDemo || {};

electronDemo.singletonModule = function(electronDemo) {
  var message = "Welcome to the Revealing Module Singleton!";

  function printMessage() {
    console.log(message);
  }

  return {
    showMessage: printMessage
  }
}(electronDemo);