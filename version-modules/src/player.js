var playerName = "";

function sendMessage() {
  console.log(`The current player is ${playerName}.`);
}

function setName(value) {
  playerName = value;
}

function getName() {
  return playerName;
}

export { sendMessage, setName, getName };