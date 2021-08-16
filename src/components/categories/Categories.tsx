/* tslint:disable:no-magic-numbers */
import React from 'react';
import './Categories.scss';
import { Card, Grid, Header, Loader, Image } from 'semantic-ui-react';
import { useCategories } from './hooks/useCategories';
import { useHistory } from 'react-router';

const Categories = () => {
    const { categories, isLoading } = useCategories();
    const history = useHistory();

    return (
        <div className={'categories-container'}>
            <Header as="h1">Categories</Header>
            {isLoading && <Loader active={true} inline="centered" className={'categories-loader'} />}
            {!isLoading && (
                <Grid>
                    {categories.map((category) => (
                        <Grid.Column mobile={16} tablet={8} computer={3} key={category.idCategory}>
                            <Card onClick={handleClick.bind(null, category.strCategory)}>
                                <Image src={category.strCategoryThumb} wrapped={true} ui={true} />
                                <Card.Content>
                                    <Card.Header>{category.strCategory}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    ))}
                </Grid>
            )}
        </div>
    );

    function handleClick(category: string) {
        history.push({
            pathname: `/categories/${category}`,
        });
    }
};

export default Categories;
