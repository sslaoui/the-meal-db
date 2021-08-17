import { useState } from 'react';
import axios from 'axios';
import { MealsListProps } from '../../meals/Meals';

type SearchResultsState = {
    searchResults: Array<MealsListProps>;
    hasSearchResults?: boolean;
    isLoading?: boolean;
    error?: Error | null;
};

const emptySearchResults: Array<MealsListProps> = [];

const searchResultsEmptyState: SearchResultsState = {
    searchResults: emptySearchResults,
    hasSearchResults: false,
    isLoading: true,
    error: null,
};

export const useSearch = () => {
    const [searchResultsState, setSearchResultsState] = useState<SearchResultsState>(searchResultsEmptyState);
    const baseURL = 'https://themealdb.com/api/json/v1/1/search.php?s=';

    async function searchByName(searchQuery: string) {
        try {
            axios.get(baseURL + searchQuery).then((res) => {
                const searchResults = res.data.meals;
                const hasSearchResults = res.data.meals ? res.data.meals.length : false;
                setSearchResultsState({ searchResults, hasSearchResults, isLoading: false, error: null });
            });
        } catch (error) {
            if (!axios.isCancel(error)) {
                setSearchResultsState({ searchResults: emptySearchResults, hasSearchResults: false, isLoading: false, error });
            }
        }
    }
    return {
        searchResultsState,
        searchByName,
    };
};
