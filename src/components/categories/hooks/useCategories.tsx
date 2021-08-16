import { useEffect, useState } from 'react';
import axios from 'axios';

export type CategoryProps = {
    idCategory: string;
    strCategory: string;
    strCategoryDescription: string;
    strCategoryThumb: string;
};

type CategoriesState = {
    categories: Array<CategoryProps>;
    hasCategories?: boolean;
    isLoading?: boolean;
    error?: Error | null;
};

const emptyCategoriesList: Array<CategoryProps> = [];

const categoriesEmptyState: CategoriesState = {
    categories: emptyCategoriesList,
    hasCategories: false,
    isLoading: true,
    error: null,
};

export const useCategories = () => {
    const [categoriesState, setCategoriesState] = useState<CategoriesState>(categoriesEmptyState);
    const baseURL = "http://themealdb.com/api/json/v2/9973533/categories.php";

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                axios.get(baseURL).then((res) => {
                    const categories = res.data.categories;
                    const hasCategories = categories.length;
                    setCategoriesState({ categories, hasCategories, isLoading: false, error: null });
                });
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setCategoriesState({ categories: emptyCategoriesList, hasCategories: false, isLoading: false, error });
                }
            }
        };

        fetchCategories();
    }, []);

    return { ...categoriesState };
};
