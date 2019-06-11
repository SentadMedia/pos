import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
//import { ipcRenderer } from 'electron';

import 'bootstrap/dist/css/bootstrap.min.css';

const electron = window.require('electron');

const store = configureStore(electron.ipcRenderer.sendSync('get-state'));

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept('./containers/Root', (): void => {
        const NextRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NextRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root'),
        );
    });
}
