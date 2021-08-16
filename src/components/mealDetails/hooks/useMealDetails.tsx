import { useEffect, useState } from 'react';
import axios from 'axios';

export type MealDetailsProps = {
    idMeal?: string;
    strMeal?: string;
    strCategory?: string;
    strArea?: string;
    strInstructions?: string;
    strMealThumb?: string;
    strIngredient1?: any;
    strIngredient2?: any;
    strIngredient3?: any;
    strIngredient4?: any;
    strIngredient5?: any;
    strIngredient6?: any;
    strIngredient7?: any;
    strIngredient8?: any;
    strIngredient9?: any;
    strIngredient10?: any;
    strIngredient11?: any;
    strIngredient12?: any;
    strIngredient13?: any;
    strIngredient14?: any;
    strIngredient15?: any;
    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: string;
    strMeasure7?: string;
    strMeasure8?: string;
    strMeasure9?: string;
    strMeasure10?: string;
    strMeasure11?: string;
    strMeasure12?: string;
    strMeasure13?: string;
    strMeasure14?: string;
    strMeasure15?: string;
    strYoutube?: string;
};

export type MealDetailsState = {
    mealDetails: MealDetailsProps;
    hasMealDetails?: boolean;
    isLoading?: boolean;
    error?: Error | null;
};

const emptyMealDetails: MealDetailsProps = {};

const mealDetailsEmptyState: MealDetailsState = {
    mealDetails: emptyMealDetails,
    hasMealDetails: false,
    isLoading: true,
    error: null,
};

export const useMealDetails = (mealId: string) => {
    const [mealDetailsState, setMealDetailsState] = useState<MealDetailsState>(mealDetailsEmptyState);

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                axios.get(`/lookup.php?i=${mealId}`).then((res) => {
                    const mealDetails = res.data.meals[0];
                    const hasMealDetails = res.data.meals.length;
                    setMealDetailsState({ mealDetails, hasMealDetails, isLoading: false, error: null });
                });
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setMealDetailsState({ mealDetails: emptyMealDetails, hasMealDetails: false, isLoading: false, error });
                }
            }
        };

        if (mealId) fetchMealDetails();
    }, [mealId]);

    return { ...mealDetailsState };
};
