/*
 * NOTES
 * 
 * Step 1
 * 
 * function foo() {
 * }
 * 
 * 
 * Step 2
 * Remove the name to make it anonymous
 * and turn it into a function expression
 * 
 * (function() {
 * }
 * 
 * 
 * Step 3
 * Immediately invoke
 * 
 * (function() {
 * })();
 * 
 * OR
 * 
 * (function() {
 * }());
 * 
 * Parameters can be passed in...
 * 
 * (function(name){
 * console.log("Inside my cool IIFE!!");
 * console.log(`Hello ${name}`)
 * })("Brock");
 * 
 */

const electron = require("electron");
const countdown = require("./countdown.module");

// var electronDemo = electronDemo || {};

// const singletonModule = require("./singleton.module");
// electronDemo.constants = require("./constants.module");
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

let mainWindow;

app.on("ready", _ => {
  mainWindow = new BrowserWindow({
    height: 700,
    width: 700
  });
  
  mainWindow.loadURL(`file://${__dirname}/countdown.html`);
  
  mainWindow.on("closed", _ => {
    console.log("closed!");
    mainWindow = null;
  })
});
  
ipc.on("countdown-start", _ => {
  console.log("caught it!!!");
  countdown(count => {
    mainWindow.webContents.send("countdown", count);
  });
});

//console.log(`Value: ${electronDemo.constants.listenerNameTypes.countdown}`);
// electronDemo.singletonModule.showMessage();