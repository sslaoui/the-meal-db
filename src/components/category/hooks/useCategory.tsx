import { useEffect, useState } from 'react';
import axios from 'axios';

export type MealsProps = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

type MealsState = {
    meals: Array<MealsProps>;
    hasMeals?: boolean;
    isLoading?: boolean;
    error?: Error | null;
};

const emptyMealList: Array<MealsProps> = [];

const mealsEmptyState: MealsState = {
    meals: emptyMealList,
    hasMeals: false,
    isLoading: true,
    error: null,
};

export const useCategory = (categoryId: string) => {
    const [mealsState, setMealsState] = useState<MealsState>(mealsEmptyState);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                axios.get(`/filter.php?c=${categoryId}`).then((res) => {
                    const meals = res.data.meals;
                    const hasMeals = meals.length;
                    setMealsState({ meals, hasMeals, isLoading: false, error: null });
                });
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setMealsState({ meals: emptyMealList, hasMeals: false, isLoading: false, error });
                }
            }
        };

        fetchCategory();
    }, [categoryId]);

    return { ...mealsState };
};
