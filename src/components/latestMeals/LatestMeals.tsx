import React from 'react';
import { useLatestMeals } from './hooks/useLatestMeals';
import { Header, Item, Loader, Label, Icon } from 'semantic-ui-react';
import './LatestMeals.scss';

const LatestMeals = () => {
    const { latestMeals, isLoading } = useLatestMeals();
    return (
        <div className={'latest-meals-container'}>
            <Header as="h1">Latest Meals</Header>
            {isLoading && <Loader active={true} inline="centered" className={'categories-loader'} />}
            {!isLoading && (
                <Item.Group>
                    {latestMeals.map((meal) => (
                        <Item key={meal.idMeal}>
                            <Item.Image size="small" src={meal.strMealThumb} />
                            <Item.Content>
                                <Item.Header as="a">{meal.strMeal}</Item.Header>
                                <Label as="a" color="grey" content={meal.strCategory} />
                                <Item.Meta>{meal.strArea}</Item.Meta>
                                <Item.Description>{meal.strInstructions}</Item.Description>
                                <Item.Extra>
                                    {meal.strYoutube && (
                                        <a href={meal.strYoutube} rel="noreferrer" target="_blank">
                                            <Icon color="red" name="youtube" size="big" />
                                        </a>
                                    )}
                                </Item.Extra>
                            </Item.Content>
                            <hr />
                        </Item>
                    ))}
                </Item.Group>
            )}
        </div>
    );
};

export default LatestMeals;
