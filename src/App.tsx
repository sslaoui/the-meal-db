import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';
import './App.scss';
import { Header } from 'semantic-ui-react';
import NotFound from './components/notFound/NotFound';
import mealLogo from './images/meal_logo.png';
import { routes, RouteProps } from './router/routes';

function App() {
    return (
        <React.Fragment>
            <HashRouter basename={'/the-meal-db'}>
                <SidebarMenu />
                <header>
                    <Header as="h2" image={mealLogo} content="The Meal DB" data-cy="pageTitle" />
                </header>
                <div className={'container'}>
                    <Switch>
                        {flatten(routes).map((route: RouteProps) => (
                            <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                        ))}
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </HashRouter>
        </React.Fragment>
    );
}

function flatten(routesObjc: Array<RouteProps>) {
    const flatRoutes: any = [];
    routesObjc.forEach((route) => {
        if (route.routes) {
            flatRoutes.push({ ...route, exact: true });
            flatRoutes.push(...flatten(route.routes));
        } else {
            flatRoutes.push(route);
        }
    });
    return flatRoutes;
}

export default App;
