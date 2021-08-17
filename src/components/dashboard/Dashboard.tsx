import React, { useState } from 'react';
import { Button, Header, Input, Tab } from 'semantic-ui-react';
import { useBrowseByName } from './hooks/useBrowseByName';
import Meals from '../meals/Meals';
import { useSearch } from './hooks/useSearch';
import './Dashboard.scss';

const Dashboard = () => {
    const [mealFirstLetter, setMealFirstLetter] = useState<string>('');
    const { meals, hasMeals, isLoading } = useBrowseByName(mealFirstLetter);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const { searchResultsState, searchByName } = useSearch();
    const panes = [];

    for (const char of 'abcdefghijklmnopqrstuvwxyz') {
        panes.push({
            menuItem: char.toUpperCase(),
            render: () => <Tab.Pane attached={false}>{renderTabContent(char)}</Tab.Pane>,
        });
    }

    panes.push({
        menuItem: { key: 'search', icon: 'search', content: 'Search' },
        render: () => <Tab.Pane attached={false}>{renderSearchContent()}</Tab.Pane>,
    });

    return (
        <div className={'browse-country-container'}>
            <Header as="h1">Dashboard</Header>
            <Tab menu={{ pointing: true }} panes={panes} />
        </div>
    );

    function renderTabContent(firstLetter: string) {
        setMealFirstLetter(firstLetter);
        if (!hasMeals) {
            return <p>No meals found</p>;
        }
        return <Meals meals={meals} isLoading={isLoading} />;
    }

    function renderSearchContent() {
        return (
            <>
                <Input
                    className={'search-input'}
                    type={'text'}
                    placeholder={'Search...'}
                    action={true}
                    onChange={(e: any, { name, value }: any) => setSearchQuery(value)}
                    onKeyDown={handleKeyDown}
                >
                    <input />
                    <Button type={'submit'} onClick={() => handleSubmit()}>
                        Search
                    </Button>
                </Input>
                {!searchResultsState.isLoading && searchResultsState.hasSearchResults && <Meals meals={searchResultsState.searchResults} />}
                {!searchResultsState.isLoading && !searchResultsState.hasSearchResults && <p>No meals found</p>}
            </>
        );
    }

    function handleSubmit() {
        searchByName(searchQuery);
    }

    function handleKeyDown(e: any) {
        if (e.key === 'Enter') {
            searchByName(searchQuery);
        }
    }
};

export default Dashboard;
