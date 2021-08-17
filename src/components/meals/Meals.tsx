/* tslint:disable:no-magic-numbers */
import { Card, Grid, Image } from 'semantic-ui-react';
import React, { useState } from 'react';
import MealDetails from './mealDetails/MealDetails';

export type MealsListProps = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

type MealsProps = {
    meals: Array<MealsListProps>;
    isLoading?: boolean;
};

const Meals = ({ meals, isLoading }: MealsProps) => {
    const [selectedMealId, setSelectedMealId] = useState<string>('');
    const [openDialog, setOpenDialog] = React.useState(false);

    return (
        <>
            <Grid>
                {meals.map((meal) => (
                    <Grid.Column mobile={16} tablet={8} computer={2} key={meal.idMeal}>
                        <Card onClick={handleClick.bind(null, meal.idMeal)}>
                            <Image src={meal.strMealThumb} wrapped={true} ui={true} />
                            <Card.Content>
                                <Card.Header>{meal.strMeal}</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                ))}
            </Grid>
            {openDialog && <MealDetails mealId={selectedMealId} open={openDialog} openDialog={openMealDetailsDialog} closeDialog={closeMealDetailsDialog} />}
        </>
    );

    function handleClick(mealId: string) {
        setSelectedMealId(mealId);
        setOpenDialog(true);
    }

    function openMealDetailsDialog() {
        setOpenDialog(true);
    }

    function closeMealDetailsDialog() {
        setSelectedMealId('');
        setOpenDialog(false);
    }
};

export default Meals;
