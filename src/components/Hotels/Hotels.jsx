import styles from './Hotels.module.css';
import { useSelector } from 'react-redux';
import { getCorrectDate } from '../../utils/utils';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import FoundHotels from '../FoundHotels/FoundHotels';

const Hotels = () => {

    const checkInDate = useSelector(store => store.setCityInfo.checkIn);
    const locationName = useSelector(store => store.setCityInfo.location);

    return (
        <div className={styles.hotels}>
            <div className={styles['hotels__title']}>
                <ul className={styles['hotels__breadcrumbs']}>
                    <li>Отели</li>
                    <li>{locationName ?? 'Москва'}</li>
                </ul>
                <span className={styles['hotels__date']}>{checkInDate ? getCorrectDate(checkInDate) : ''}</span>
            </div>
            <ImageCarousel />
            <FoundHotels />
        </div>
    );
};

export default Hotels;