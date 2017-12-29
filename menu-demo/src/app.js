const electron = require("electron");

const { app, Menu, BrowserWindow } = electron;

app.on("ready", _ => {
  new BrowserWindow();

  const name = electron.app.getName();

  const template = [
    {
      label: name,
      submenu: [
        { label: `About ${name}`, click: () => {
            console.log("Clicked about...");
          },
          role: "about"
        },
        { type: "separator" },
        { label: "Quit", click: () => { app.quit() },
          accelerator: "Cmd+Q"
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});