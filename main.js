const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  const window = new BrowserWindow({
    height: 800,
    width: 480,
  });
  window.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
