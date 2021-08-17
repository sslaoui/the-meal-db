import React from 'react';
import { SemanticICONS } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';
import Categories from '../components/categories/Categories';
import LatestMeals from '../components/latestMeals/LatestMeals';
import RandomMeals from '../components/randomMeals/RandomMeals';
import Dashboard from '../components/dashboard/Dashboard';
import Category from '../components/category/Category';

export type RouteProps = {
    path: string;
    exact: boolean;
    label?: string;
    icon?: SemanticICONS;
    isNaviItem: boolean;
    component: React.ComponentType<RouteComponentProps<any>>;
    routes?: Array<RouteProps>;
};

export const routes: Array<RouteProps> = [
    {
        path: '/',
        exact: true,
        label: 'Dashboard',
        icon: 'dashboard',
        isNaviItem: true,
        component: Dashboard,
    },
    {
        path: '/categories',
        exact: true,
        label: 'Categories',
        icon: 'list ul',
        isNaviItem: true,
        component: Categories,
    },
    {
        path: '/categories/:id',
        exact: true,
        isNaviItem: false,
        component: Category,
    },
    {
        path: '/latestMeals',
        exact: true,
        label: 'Latest Meals',
        icon: 'food',
        isNaviItem: true,
        component: LatestMeals,
    },
    {
        path: '/randomMeals',
        exact: true,
        label: 'Random Meals',
        icon: 'random',
        isNaviItem: true,
        component: RandomMeals,
    },
];
