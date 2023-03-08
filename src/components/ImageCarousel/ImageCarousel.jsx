import { HARDCODED_PICTURES } from '../../utils/utils';
import styles from './ImageCarousel.module.css';

import ImageItem from '../ImageItem/ImageItem';

const ImageCarousel = () => {
    return (
        <ul className={styles['image-carousel']}>
            {HARDCODED_PICTURES.map(item => (
                <ImageItem
                    key={item.ID}
                    id={item.ID}
                    common={item.COMMON}
                    retina={item.RETINA}
                    description={item.DESCRIPTION}
                />
            ))}
        </ul>
    );
};

export default ImageCarousel;