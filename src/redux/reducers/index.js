import { combineReducers } from 'redux';
import login from './login';
import setCityInfo from './cityInfo';
import getCityHotels from './cityHotels';
import getFavorites from './favorites';

const reducer = combineReducers({
    login,
    setCityInfo,
    getCityHotels,
    getFavorites
});

export default reducer;