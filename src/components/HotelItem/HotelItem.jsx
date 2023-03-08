import styles from './HotelItem.module.css'

import { useDispatch } from 'react-redux';

import Rating from '../Rating/Rating';
import Icons from '../UI/Icons/Icons';

import { collectFavorite, deleteFavorite } from '../../redux/actions/actionCreator';

const HotelItem = (props) => {
    const dispatch = useDispatch();

    const isFavorite = props.favorite ? styles['hotel-item--favorite'] : '';

    const getCurrentFavorites = () => {
        return JSON.parse(localStorage.getItem('storedFavorites'))
    };

    const isAlreadyStored = (id) => {
        return getCurrentFavorites().find(item => item.id === id)
    };

    const getHotelInfo = () => {
        if (!props.favorite && !isAlreadyStored(props.id)) {
            dispatch(collectFavorite(
                {
                    id: props.id,
                    title: props.title,
                    checkIn: props.arrivalDate,
                    dayCount: props.dayCount,
                    stars: props.stars,
                    rating: props.rating,
                    price: props.price
                }
            ))
        } else if (isAlreadyStored(props.id)) {
            const favoriteToDelete = getCurrentFavorites().filter((favorite) => favorite.id !== props.id);
            localStorage.setItem('storedFavorites', JSON.stringify(favoriteToDelete))
            dispatch(deleteFavorite (
                {
                    id: props.id,
                    title: props.title,
                    checkIn: props.arrivalDate,
                    dayCount: props.dayCount,
                    stars: props.stars,
                    rating: props.rating,
                    price: props.price
                }
            ))
        }
    };

    return (
        <li className={`${styles['hotel-item']} ${isFavorite}`}>
            <h3>{props.title}</h3>
            <span className={styles['hotel-item__date']}>{props.arrivalDate}
                <span className={styles['hotel-item__day-count']}>{props.dayCount}</span>
            </span>

            <Rating stars={props.stars}/>
            <span className={styles['hotel-item__price']}>
                <span className={styles['hotel-item__price-label']}>Price:</span> {props.price}
            </span>
            <button className={props.heartChecked ? styles['hotel-item__heart-button--checked'] : ''} onClick={getHotelInfo} type={'button'}>
                <Icons
                    name='heart'
                    size='21'
                    className={styles['hotel-item__heart-button']}
                />
            </button>
        </li>
    );
};

export default HotelItem;