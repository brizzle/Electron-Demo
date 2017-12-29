const electron = require("electron");
const path = require("path");

const { app, Menu, Tray } = electron;

let appIcon = null;

app.on("ready", () => {
  // Using the path.join function allows for this
  // to work across all operating systems
  var iconSource = path.join("src", "trayIcon.png");
  appIcon = new Tray(iconSource);

  const contextMenu = Menu.buildFromTemplate([
    { label: "Wow", click: () => console.log("wow") },
    { label: "Awesome", click: () => console.log("awesome") },
    { type: "separator" },
    { label: "Quit", click: () => { app.quit() },
      accelerator: "Cmd+Q"
    }
  ]);

  appIcon.setContextMenu(contextMenu);

  appIcon.setToolTip("My great app");
});