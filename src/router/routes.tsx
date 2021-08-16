import React from 'react';
import { SemanticICONS } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';
import Categories from '../components/categories/Categories';
import LatestMeals from '../components/latestMeals/LatestMeals';
import RandomMeals from '../components/randomMeals/RandomMeals';
import BrowseCountry from '../components/browseCountry/BrowseCountry';
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
        path: `/`,
        exact: true,
        label: 'Categories',
        icon: 'list ul',
        isNaviItem: true,
        component: Categories,
    },
    {
        path: `/categories/:id`,
        exact: true,
        isNaviItem: false,
        component: Category,
    },
    {
        path: `/latestMeals`,
        exact: true,
        label: 'Latest Meals',
        icon: 'food',
        isNaviItem: true,
        component: LatestMeals,
    },
    {
        path: `/randomMeals`,
        exact: true,
        label: 'Random Meals',
        icon: 'random',
        isNaviItem: true,
        component: RandomMeals,
    },
    {
        path: `/browseCountry`,
        exact: true,
        label: 'Browse Country',
        icon: 'globe',
        isNaviItem: true,
        component: BrowseCountry,
    },
];
