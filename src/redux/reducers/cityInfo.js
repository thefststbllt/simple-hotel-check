import { SET_CITY_INFO } from '../constants';
import { DEFAULT_LOCATION } from '../../utils/utils';

const initialState = {
    location: DEFAULT_LOCATION.LOCATION,
    checkIn: DEFAULT_LOCATION.CHECK_IN,
    dayCount: DEFAULT_LOCATION.DAY_COUNT
};

const setCityInfo = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CITY_INFO:
            return {
                ...state,
                location: payload.location,
                checkIn: payload.checkIn,
                dayCount: payload.dayCount
            }
        default:
            return state;
    }
};

export default setCityInfo;