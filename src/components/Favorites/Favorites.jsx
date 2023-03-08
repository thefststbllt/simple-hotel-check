import styles from './Favorites.module.css';

import FavoritesList from '../FavoritesList/FavoritesList';
import Sortings from '../Sortings/Sortings';

const Favorites = () => {
    return (
        <div className={styles.favorites}>
            <h2>Избранное</h2>
            <Sortings />
            <FavoritesList />
        </div>
    );
};

export default Favorites;