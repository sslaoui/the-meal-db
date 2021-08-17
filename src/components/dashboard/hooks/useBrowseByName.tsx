import { useEffect, useState } from 'react';
import axios from 'axios';
import { MealsListProps } from '../../meals/Meals';

type MealsState = {
    meals: Array<MealsListProps>;
    hasMeals?: boolean;
    isLoading?: boolean;
    error?: Error | null;
};

const emptyMealList: Array<MealsListProps> = [];

const mealsEmptyState: MealsState = {
    meals: emptyMealList,
    hasMeals: false,
    isLoading: true,
    error: null,
};

export const useBrowseByName = (mealsFirstLetter: string) => {
    const [mealsState, setMealsState] = useState<MealsState>(mealsEmptyState);
    const baseURL = 'https://themealdb.com/api/json/v1/1/search.php?f=';

    useEffect(() => {
        const fetchMealsByName = async () => {
            try {
                axios.get(baseURL + mealsFirstLetter).then((res) => {
                    const meals = res.data.meals;
                    const hasMeals = meals ? meals.length : false;
                    setMealsState({ meals, hasMeals, isLoading: false, error: null });
                });
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setMealsState({ meals: emptyMealList, hasMeals: false, isLoading: false, error });
                }
            }
        };

        if (mealsFirstLetter) fetchMealsByName();
    }, [mealsFirstLetter]);

    return { ...mealsState };
};
