import React from 'react';
import { useRandomMeal } from './hooks/useRandomMeal';
import { Header, Item, Loader, Label, Icon } from 'semantic-ui-react';
import './RandomMeals.scss';

const RandomMeals = () => {
    const { randomMeal, isLoading } = useRandomMeal();
    return (
        <div className={'random-meal-container'}>
            <Header as="h1">Random Meals</Header>
            {isLoading && <Loader active={true} inline="centered" className={'categories-loader'} />}
            {!isLoading && (
                <Item.Group>
                    <Item key={randomMeal.idMeal}>
                        <Item.Image size="big" src={randomMeal.strMealThumb} />
                        <Item.Content>
                            <Item.Header as="a">{randomMeal.strMeal}</Item.Header>
                            <Label as="a" color="grey" content={randomMeal.strCategory} />
                            <Item.Meta>{randomMeal.strArea}</Item.Meta>
                            <Item.Description>{randomMeal.strInstructions}</Item.Description>
                            <Item.Extra>
                                {randomMeal.strYoutube && (
                                    <a href={randomMeal.strYoutube} rel="noreferrer" target="_blank">
                                        <Icon color="red" name="youtube" size="big" />
                                    </a>
                                )}
                            </Item.Extra>
                        </Item.Content>
                        <hr />
                    </Item>
                </Item.Group>
            )}
        </div>
    );
};

export default RandomMeals;
