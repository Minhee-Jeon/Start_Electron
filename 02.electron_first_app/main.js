const { app, BrowserWindow } = require("electron"); 

let win;

function createWindow() {
    win = new BrowserWindow({webPreferences: {nodeIntegration: true}, width: 800, height: 600});
    //win.loadURL('file://${__dirname}/index.html'); 왜인지는 모르겠지만 아랫줄만 작동함
    win.loadURL('file://' + __dirname + '/index.html');
    win.on("closed", () => { win = null; });
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
})