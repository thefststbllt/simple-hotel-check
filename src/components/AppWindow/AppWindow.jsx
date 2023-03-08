import React from 'react';
import styles from './AppWindow.module.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Hotels from '../Hotels/Hotels';
import Favorites from '../Favorites/Favorites';

const AppWindow = ({onLogout}) => {
    return (
        <React.Fragment>
            <Header onLogout={onLogout} />
            <main className={styles['app__inner-wrapper']}>
                <SearchForm />
                <Hotels />
                <Favorites />
            </main>
        </React.Fragment>
    );
}

export default AppWindow;