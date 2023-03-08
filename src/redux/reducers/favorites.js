import {
    COLLECT_FAVORITE,
    DELETE_FAVORITE,
    ERASE_FAVORITES,
    SORT_FAVORITES
} from '../constants';

const initialState = {
    favorites: [],
};

const getFavorites = (state = initialState, {type, payload}) => {
    switch (type) {
        case COLLECT_FAVORITE:
            return {
                ...state,
                favorites: [payload]
            }
        case ERASE_FAVORITES:
            return {
                favorites: []
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite.id !== payload.id)
            }
        case SORT_FAVORITES:
            return {
                favorites: [payload]
            }
        default:
            return state;
    }
};

export default getFavorites;