import { DEFAULT_LOCATION } from '../../utils/utils';

import styles from './SearchForm.module.css';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCityInfo } from '../../redux/actions/actionCreator';

import Button from '../UI/Button/Button';

const SearchForm = () => {

    const [formData, setFormData] = useState({
        location: DEFAULT_LOCATION.LOCATION,
        checkIn: DEFAULT_LOCATION.CHECK_IN,
        dayCount: DEFAULT_LOCATION.DAY_COUNT
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCityInfo(formData));
    }, [])

    const handleFormData = (evt) => {
        evt.preventDefault();
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(setCityInfo(formData));
    };

    return (
        <form onSubmit={handleSubmit} className={styles['search-form']}>
            <label htmlFor='city-name'>Локация</label>
            <input
                id='city-name'
                name={'location'}
                onChange={handleFormData}
                value={formData.location}
            />
            <label htmlFor='arrival-date'>Дата заселения</label>
            <input
                id='arrival-date'
                name={'checkIn'}
                onChange={handleFormData}
                type='date'
                value={formData.checkIn}
            />
            <label htmlFor='day-quantity'>Количество дней</label>
            <input
                id='day-quantity'
                name={'dayCount'}
                onChange={handleFormData}
                type='number'
                min='1'
                value={formData.dayCount}
            />
            <Button type='submit'  text='Найти'/>
        </form>
    );
};

export default SearchForm;