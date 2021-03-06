/* Main / Backend loop of app */

const { app, BrowserWindow } = require('electron');
const path = require('path');

/* My imports */
const {ipcMain} = require('electron');
// const {dialog} = require('electron'); // testing alerts through renderer and main
const spawn = require('child_process').spawn;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { 
      nodeIntegration: true 
    },
    icon: './assets/icons/png/icon.png'
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

/* Between here to use more apis for sure */

// receive message from renderer and call python here
ipcMain.on('run-python', function(event, args){
  
  console.log("Main: getting call to run python...");
  
  // Call new child_process and essentially open terminal for command execution
  // pass also command python3 and args along with it in shell
  const pythonProcess = spawn('python3', [__dirname + '/mpX.py', args[0], args[1], args[2]]);
  
  // Do something with the data returned from python script
  pythonProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    console.log("Out of Python!")
    event.reply('reply', 'Out of Python! Check Youtube DL Folder in Downloads for the file(s)!!');
  });

  // Do something with the error returned from python script
  pythonProcess.stderr.on('data', (data) => {
    console.log(`stderr:${data}`);
  });
  
});

/* Between here to use more apis for sure */