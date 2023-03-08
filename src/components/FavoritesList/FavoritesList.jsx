import styles from './FavoritesList.module.css'

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import HotelItem from '../HotelItem/HotelItem';

const FavoritesList = () => {

    const statedFavorites = useSelector(state => state.getFavorites.favorites);

    if (!localStorage.getItem('storedFavorites')) {
        localStorage.setItem('storedFavorites', '[]');
    }

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('storedFavorites')));

    const updateFavoritesHandler = () => {
        const updatedFavorites = JSON.parse(localStorage.getItem('storedFavorites'));
        return setFavorites(updatedFavorites);
    };

    useEffect(() => {
        updateFavoritesHandler();
    }, [statedFavorites]);

    return (
        <ul className={styles['favorites-list']}>
            {favorites.length ? favorites.map((item) => (
                <HotelItem
                    key={`#${item.id}`}
                    id={item.id}
                    favorite={true}
                    title={item.title}
                    stars={item.stars}
                    arrivalDate={item.checkIn}
                    dayCount={item.dayCount}
                    price={item.price}
                />
            )) : (<li className={styles['favorites-list__no-item-plugin']}>{'Добавьте понравишийся отель, нажав\u00A0на сердечко'}</li>)}
        </ul>
    );
};

export default FavoritesList;
