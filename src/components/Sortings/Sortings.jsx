import styles from './Sortings.module.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortFavorites } from '../../redux/actions/actionCreator';

import { getCleanNumber } from '../../utils/utils';

const Sortings = () => {
    const dispatch = useDispatch();
    const statedFavorites = useSelector(state => state.getFavorites.favorites);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('storedFavorites')));
    const [isPriceToBig, setIsPriceToBig] = useState('init');
    const [isRatingToBig, setIsRatingToBig] = useState('init');

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('storedFavorites')));
    }, [statedFavorites])

    const toggleButtonClass = (isToBig) => {
        if (isToBig === 'init') {
            return
        }
        return isToBig ? styles['sortings__button--to-big'] : styles['sortings__button--to-small'];
    };

    const handleSortRating = () => {
        setIsRatingToBig(true);
        setIsPriceToBig('init');
        if (isRatingToBig) {
            const sorted = favorites.sort((a, b) => {
                return a.rating - b.rating
            });
            dispatch(sortFavorites(sorted));
            localStorage.setItem('storedFavorites', JSON.stringify(sorted));
        } else {
            const sorted = favorites.sort((a, b) => {
                return b.rating - a.rating
            });
            dispatch(sortFavorites(sorted));
            localStorage.setItem('storedFavorites', JSON.stringify(sorted));
        }
        setIsRatingToBig(!isRatingToBig);
    };

    const handleSortPrice = () => {
        setIsPriceToBig(true);
        setIsRatingToBig('init');
        if (isPriceToBig) {
            const sorted = favorites.sort((a, b) => {
                return getCleanNumber(a.price) - getCleanNumber(b.price);
            });
            dispatch(sortFavorites(sorted));
            localStorage.setItem('storedFavorites', JSON.stringify(sorted));
        } else {
            const sorted = favorites.sort((a, b) => {
                return getCleanNumber(b.price) - getCleanNumber(a.price);
            });
            dispatch(sortFavorites(sorted));
            localStorage.setItem('storedFavorites', JSON.stringify(sorted));
        }
        setIsPriceToBig(!isPriceToBig);
    };

    return (
        <ul className={styles.sortings}>
            <li>
                <button
                    className={`${styles['sortings__button']} ${toggleButtonClass(isRatingToBig)}`}
                    onClick={handleSortRating}
                    disabled={favorites?.length <= 1}>Рейтинг
                </button>
            </li>
            <li>
                <button className={`${styles['sortings__button']} ${toggleButtonClass(isPriceToBig)}`}
                        onClick={handleSortPrice}
                        disabled={favorites?.length <= 1}>Цена
                </button>
            </li>
        </ul>
    );
};

export default Sortings;