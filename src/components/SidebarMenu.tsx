import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import { routes } from '../router/routes';

const SidebarMenu = () => (
    <nav>
        <Menu fluid={true} color="red" vertical={true} icon="labeled" className={'app-nav'}>
            {routes.map((route) =>
                route.isNaviItem ? (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        children={({ match }) => (
                            <Menu.Item as={Link} to={route.path} active={!!match}>
                                <Icon name={route.icon} />
                                {route.label}
                            </Menu.Item>
                        )}
                    />
                ) : null
            )}
        </Menu>
    </nav>
);

export default SidebarMenu;
