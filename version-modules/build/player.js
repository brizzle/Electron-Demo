"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var playerName = "";

function sendMessage() {
  console.log("The current player is " + playerName + ".");
}

function setName(value) {
  playerName = value;
}

function getName() {
  return playerName;
}

exports.sendMessage = sendMessage;
exports.setName = setName;
exports.getName = getName;