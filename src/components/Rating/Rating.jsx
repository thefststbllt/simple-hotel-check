import { STARS_RATING, STARS_COLORS } from '../../utils/utils';

import styles from './Rating.module.css'
import Icons from '../UI/Icons/Icons';

const Rating = (props) => {
    const starsColored = props.stars;

    return (
        <ul className={styles.rating}>
            {STARS_RATING.map((starItem, index) => (
                <li key={index}>
                    <Icons
                        name='star'
                        color={index < starsColored ? STARS_COLORS.FILLED : STARS_COLORS.DEFAULT}
                        opacity={index < starsColored ? '1' : '0.6'}
                        size='17'
                        className='rating-star'
                    />
                </li>
            ))}
        </ul>
    );
};

export default Rating;