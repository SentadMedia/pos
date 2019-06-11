import { ipcMain, app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

require('electron-reload')(path.join(__dirname, 'public', 'electron.js'), {
    electron: require('${__dirname}/../../node_modules/electron'),
    hardResetMethod: 'exit',
});

let mainWindow: BrowserWindow, splashScreen: BrowserWindow;

async function loadApp(): Promise<any> {
    splashScreen = new BrowserWindow({ width: 600, height: 380 });
    splashScreen.center();
    splashScreen.loadURL(
        isDev
            ? `file://${path.join(__dirname, '../public/splash.html')}`
            : `file://${path.join(__dirname, '../build/index.html')}`,
    );

    try {
        if (fs.existsSync(`${path.join(__dirname, '../pos')}`)) {
            //file exists
        }
    } catch (err) {
        console.error('needs new installation', err);
    }

    /*db = new Datastore({ filename: `${path.join(__dirname, '../pos')}` });
    db.loadDatabase(function(err: Error): void {
        if (err !== null) {
            throw err;
        }
    });*/
    return JSON.stringify({});
}

function createWindow(): void {
    loadApp()
        .then((state): void => {
            splashScreen.destroy();
            mainWindow = new BrowserWindow({
                width: 1440,
                height: 900,
                minHeight: 900,
                maxHeight: 900,
                minWidth: 1440,
                maxWidth: 1440,
                frame: false,
                kiosk: false,
                webPreferences: {
                    nodeIntegration: true,
                },
            });

            mainWindow.loadURL(
                isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`,
            );
            mainWindow.webContents.send('store-data', state);

            ipcMain.on('get-state', (event: any): void => {
                event.returnValue = JSON.parse(state);
            });

            ipcMain.on('save-state', (event: any, state: any): void => {
                //db.update({}, state, { upsert: true });
                console.log(state);
            });

            mainWindow.on('closed', (): void => {
                mainWindow.destroy();
            });

            if (isDev) {
                mainWindow.webContents.openDevTools();

                installExtension(REACT_DEVELOPER_TOOLS)
                    .then((name: string): void => {
                        console.log(`Added Extension:  ${name}`);
                    })
                    .catch((err: Error): void => {
                        console.log('An error occurred: ', err);
                    });

                installExtension(REDUX_DEVTOOLS)
                    .then((name: string): void => {
                        console.log(`Added Extension:  ${name}`);
                    })
                    .catch((err: Error): void => {
                        console.log('An error occurred: ', err);
                    });
            }
        })
        .catch((err): any => {
            console.error('An error occurred: ', err);
        });
}

app.on('ready', createWindow);

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', (): void => {
    if (mainWindow === null) {
        createWindow();
    }
});
