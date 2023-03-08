import { CURRENCY_SIGNS } from '../../utils/utils';

import styles from './FoundHotels.module.css'

import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import HotelItem from '../HotelItem/HotelItem';

import {diffDate, getCorrectDate, createEnding, prettifyNum} from '../../utils/utils';

const FoundHotels = () => {

    const hotels = useSelector(state => state.getCityHotels.hotels);
    const favorites = useSelector(state => state.getFavorites.favorites);
    const getDaysWithCorrectEnding = (checkIn, checkOut) => {
        return createEnding(diffDate(checkIn, checkOut), 'day')
    };

    const storedFavorites = JSON.parse(localStorage.getItem('storedFavorites'));

    const [checkedIds, setCheckedIds] = useState([])

    useEffect(() => {
        const updatedFavorites = JSON.parse(localStorage.getItem('storedFavorites'));
        setCheckedIds(updatedFavorites.map(fav => fav.id));

    }, [favorites]);

    return (
        <>
            <span className={styles['found-hotels__favorites-added']}>Добавлено в Избранное: <span
                className={styles['found-hotels__favorites-value']}>{storedFavorites?.length ?? 0}</span>
                {storedFavorites?.length ? createEnding(storedFavorites.length, 'hotel') : ' отелей'}
            </span>
            <ul className={styles['found-hotels']}>
                {hotels.map((hotel => (
                    <HotelItem
                        key={hotel.hotel_id}
                        id={hotel.hotel_id}
                        title={hotel.name}
                        arrivalDate={hotel.last_price_info ? getCorrectDate(hotel.last_price_info.search_params.checkIn) : 'Нет даты заселения'}
                        dayCount={(hotel.last_price_info) ? getDaysWithCorrectEnding(hotel.last_price_info.search_params.checkIn, hotel.last_price_info.search_params.checkOut) : 'Дни не известны'}
                        stars={hotel.stars}
                        rating={hotel.rating}
                        price={hotel.last_price_info?.price ? `${prettifyNum(hotel.last_price_info?.price)} ${CURRENCY_SIGNS.RU_ROUBLE}` : '-'}
                        heartChecked={checkedIds.includes(hotel.hotel_id)}
                    />
                )))}
            </ul>
        </>
    );
};

export default FoundHotels;
