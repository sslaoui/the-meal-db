/* tslint:disable:no-magic-numbers */
import { Grid, Header, Icon, Item, List, Loader, Modal } from 'semantic-ui-react';
import { useMealDetails } from './hooks/useMealDetails';
import React from 'react';
import './MealDetails.scss';

type MealDetailsProps = {
    mealId: string;
    open: boolean;
    openDialog: () => void;
    closeDialog: () => void;
};

const MealDetails = ({ mealId, open, openDialog, closeDialog }: MealDetailsProps) => {
    const { mealDetails, isLoading } = useMealDetails(mealId);

    return (
        <React.Fragment>
            {isLoading && <Loader active={true} inline="centered" className={'meal-details-loader'} />}
            {!isLoading && (
                <Modal closeIcon={true} open={open} onClose={closeDialog} onOpen={openDialog} className={'meal-details-dialog'}>
                    <Header content={mealDetails.strMeal} />
                    <Modal.Content>
                        <Item.Group>
                            <Item>
                                <Item.Image size="large" src={mealDetails.strMealThumb} />
                                <Item.Content>
                                    <Item.Header as="a">Instructions</Item.Header>
                                    {mealDetails.strYoutube && (
                                        <a href={mealDetails.strYoutube} rel="noreferrer" target="_blank">
                                            <Icon color="red" name="youtube" size="big" />
                                        </a>
                                    )}
                                    <Item.Meta>{mealDetails.strArea}</Item.Meta>
                                    <Item.Description>{mealDetails.strInstructions}</Item.Description>
                                    <Item.Header as="a">Ingredients</Item.Header>
                                    <Item.Description>{renderIngredients()}</Item.Description>
                                    <Item.Extra />
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Modal.Content>
                </Modal>
            )}
        </React.Fragment>
    );

    function renderIngredients() {
        return (
            <List>
                <Grid columns={3} divided={true}>
                    <Grid.Row>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient1}</List.Header>
                                {mealDetails.strMeasure1}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient2}</List.Header>
                                {mealDetails.strMeasure2}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient3}</List.Header>
                                {mealDetails.strMeasure3}
                            </List.Item>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient4}</List.Header>
                                {mealDetails.strMeasure4}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient5}</List.Header>
                                {mealDetails.strMeasure5}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient6}</List.Header>
                                {mealDetails.strMeasure6}
                            </List.Item>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient7}</List.Header>
                                {mealDetails.strMeasure7}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient8}</List.Header>
                                {mealDetails.strMeasure8}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient9}</List.Header>
                                {mealDetails.strMeasure9}
                            </List.Item>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient10}</List.Header>
                                {mealDetails.strMeasure10}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient11}</List.Header>
                                {mealDetails.strMeasure11}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient12}</List.Header>
                                {mealDetails.strMeasure12}
                            </List.Item>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient13}</List.Header>
                                {mealDetails.strMeasure13}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient14}</List.Header>
                                {mealDetails.strMeasure14}
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column>
                            <List.Item>
                                <List.Header>{mealDetails.strIngredient15}</List.Header>
                                {mealDetails.strMeasure15}
                            </List.Item>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </List>
        );
    }
};

export default MealDetails;
