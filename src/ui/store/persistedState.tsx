const electron = window.require('electron');

export const saveState = (state: any) => {
    try {
        electron.ipcRenderer.sendSync('save-state', state);
    } catch (error) {
        throw error;
    }
};
