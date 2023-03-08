import {
    USER_LOGIN,
    USER_LOGOUT,
    SET_CITY_INFO,
    GET_CITY_HOTELS,
    COLLECT_FAVORITE,
    ERASE_FAVORITES,
    DELETE_FAVORITE,
    SORT_FAVORITES
} from '../constants';

export const userLogin = () => ({
    type: USER_LOGIN
});

export const userLogout = () => ({
    type: USER_LOGOUT
});

export const setCityInfo = (payload) => ({
    type: SET_CITY_INFO,
    payload
});

export const setCityHotels = (payload) => ({
    type: GET_CITY_HOTELS,
    payload
});

export const collectFavorite = (payload) => ({
    type: COLLECT_FAVORITE,
    payload
});

export const eraseFavorites = () => ({
    type: ERASE_FAVORITES
});

export const deleteFavorite = (payload) => ({
    type: DELETE_FAVORITE,
    payload
});

export const sortFavorites = (payload) => ({
    type: SORT_FAVORITES,
    payload
});
