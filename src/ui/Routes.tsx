import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './App';
import { MenuPage, CaissePage } from './containers';

const Routes = (): any => {
    return (
        <App>
            <Switch>
                <Route key={routes.HOME} exact={true} path={routes.HOME} component={MenuPage} />
                <Route key={routes.CAISSE} exact={true} path={routes.CAISSE} component={CaissePage} />
            </Switch>
        </App>
    );
};

export default Routes;
