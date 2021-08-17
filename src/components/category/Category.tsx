/* tslint:disable:no-magic-numbers */
import { useParams } from 'react-router-dom';
import { useCategory } from './hooks/useCategory';
import { Header, Icon, Loader } from 'semantic-ui-react';
import React from 'react';
import './Category.scss';
import { useHistory } from 'react-router';
import Meals from '../meals/Meals';

type MatchParams = { id: string };

const Category = () => {
    const categoryId = useParams<MatchParams>().id;
    const { meals, isLoading } = useCategory(categoryId);
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
                {!isLoading && <Meals meals={meals} isLoading={isLoading} />}
            </div>
        </React.Fragment>
    );

    function backToCategories() {
        history.push({
            pathname: '/categories',
        });
    }
};

export default Category;
