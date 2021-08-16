import { useEffect, useState } from 'react';
import axios from 'axios';

export type LatestMealsProps = {
    idMeal: string;
    strArea: string;
    strCategory: string;
    strInstructions: string;
    strMeal: string;
    strMealThumb: string;
    strSource: string;
    strYoutube: string;
};

type LatestMealsState = {
    latestMeals: Array<LatestMealsProps>;
    hasLatestMeals?: boolean;
    isLoading?: boolean;
    error?: Error | null;
};

const emptyLatestMealsList: Array<LatestMealsProps> = [];

const latestMealsEmptyState: LatestMealsState = {
    latestMeals: emptyLatestMealsList,
    hasLatestMeals: false,
    isLoading: true,
    error: null,
};

export const useLatestMeals = () => {
    const [latestMealsState, setLatestMealsState] = useState<LatestMealsState>(latestMealsEmptyState);
    const baseURL = "https://themealdb.com/api/json/v2/9973533/latest.php";

    useEffect(() => {
        const fetchLatestMeals = async () => {
            try {
                axios.get(baseURL).then((res) => {
                    const latestMeals = res.data.meals;
                    const hasLatestMeals = latestMeals.length;
                    setLatestMealsState({ latestMeals, hasLatestMeals, isLoading: false, error: null });
                });
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setLatestMealsState({ latestMeals: emptyLatestMealsList, hasLatestMeals: false, isLoading: false, error });
                }
            }
        };

        fetchLatestMeals();
    }, []);

    return { ...latestMealsState };
};
