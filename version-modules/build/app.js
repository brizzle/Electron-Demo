"use strict";

var _player = require("./player.js");

var player = _interopRequireWildcard(_player);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log("Loading with SystemJS...");

//player.setName("Brock");

//document.getElementById("player").innerHTML = player.getName();
document.getElementById("player").innerHTML = "Brock";