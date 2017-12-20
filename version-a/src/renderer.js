const electron = require("electron")

const ipc = electron.ipcRenderer

var test = test || {};

test.service = (function (test) {
  "use strict";

  var logStuff = function () {
    console.log("Logging stuff....");
  }

  var addEvtListener = function () {
    document
      .getElementById("start")
      .addEventListener("click", _ => {
        ipc.send("countdown-start")
      })
  }

  return {
    logStuff: logStuff,
    addEvtListener: addEvtListener
  };
})(test);

test.service.addEvtListener();

ipc.on("countdown", (evt, count) => {
  document.getElementById("count").innerHTML = count
})