import { GET_CITY_HOTELS } from '../constants';

const initialState = {
    hotels: [],
};

const getCityHotels = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CITY_HOTELS:
            return {
                ...state,
                hotels: [...payload]
            }
        default:
            return state;
    }
}

export default getCityHotels;