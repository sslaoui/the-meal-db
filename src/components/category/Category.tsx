/* tslint:disable:no-magic-numbers */
import { useParams } from 'react-router-dom';
import { useCategory } from './hooks/useCategory';
import { Card, Grid, Header, Icon, Image, Loader } from 'semantic-ui-react';
import React, { useState } from 'react';
import './Category.scss';
import MealDetails from '../mealDetails/MealDetails';
import { useHistory } from 'react-router';

type MatchParams = { id: string };

const Category = () => {
    const categoryId = useParams<MatchParams>().id;
    const { meals, isLoading } = useCategory(categoryId);
    const [selectedMealId, setSelectedMealId] = useState<string>('');
    const [openDialog, setOpenDialog] = React.useState(false);
    const history = useHistory();

    return (
        <React.Fragment>
            <div className={'category-container'}>
                <Header as="h1">
                    {categoryId}
                    <div className={'back-link'} onClick={backToCategories.bind(null, null)}>
                        <Icon name="angle left" />
                        <span>back to categories</span>
                    </div>
                </Header>
                {isLoading && <Loader active={true} inline="centered" className={'category-loader'} />}
                {!isLoading && (
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
                )}
            </div>
            {openDialog && <MealDetails mealId={selectedMealId} open={openDialog} openDialog={openMealDetailsDialog} closeDialog={closeMealDetailsDialog} />}
        </React.Fragment>
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

    function backToCategories() {
        history.push({
            pathname: '/',
        });
    }
};

export default Category;
