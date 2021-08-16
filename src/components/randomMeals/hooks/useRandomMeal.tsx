import { useEffect, useState } from 'react';
import axios from 'axios';

export type RandomMealProps = {
    idMeal?: string;
    strArea?: string;
    strCategory?: string;
    strInstructions?: string;
    strMeal?: string;
    strMealThumb?: string;
    strSource?: string;
    strYoutube?: string;
};

type RandomMealState = {
    randomMeal: RandomMealProps;
    hasRandomMeal?: boolean;
    isLoading?: boolean;
    error?: Error | null;
};

const emptyRandomMeal: RandomMealProps = {};

const randomMealEmptyState: RandomMealState = {
    randomMeal: emptyRandomMeal,
    hasRandomMeal: false,
    isLoading: true,
    error: null,
};

export const useRandomMeal = () => {
    const [randomMealState, setRandomMealState] = useState<RandomMealState>(randomMealEmptyState);

    useEffect(() => {
        const fetchRandomMeals = async () => {
            try {
                axios.get('random.php').then((res) => {
                    const randomMeal = res.data.meals[0];
                    const hasRandomMeals = randomMeal.length;
                    setRandomMealState({ randomMeal, hasRandomMeal: hasRandomMeals, isLoading: false, error: null });
                });
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setRandomMealState({ randomMeal: emptyRandomMeal, hasRandomMeal: false, isLoading: false, error });
                }
            }
        };

        fetchRandomMeals();
    }, []);

    return { ...randomMealState };
};
