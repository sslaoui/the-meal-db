import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className={'not-found-page'}>
            <div className={'error'}>404</div>
            <div className={'page-msg'}>Oops! This page Could Not Be Found</div>
            <Link to={'/'}>
                <Button basic={true} color="blue">
                    <Icon name="list ul" />
                    GO TO CATEGORIES
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;
