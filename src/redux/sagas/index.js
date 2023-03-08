import { SET_CITY_INFO, COLLECT_FAVORITE } from '../constants';

import { takeEvery, put } from '@redux-saga/core/effects';
import { select } from 'redux-saga/effects'

import { getCityId } from '../../api';
import { getCityHotels } from '../../api';

import { eraseFavorites, setCityInfo } from '../actions/actionCreator';
import { setCityHotels } from '../actions/actionCreator';

import { getCheckOutDate } from '../../utils/utils';

export function* getHotelsSaga () {
    yield setCityInfo();
    const cityName =  yield select(state => state.setCityInfo.location);
    const checkInDate = yield select(state => state.setCityInfo.checkIn);
    const dayCount = yield select(state => state.setCityInfo.dayCount);
    const checkOutDate = yield getCheckOutDate(checkInDate, dayCount);
    const { results } = yield getCityId(cityName);
    const locationId = yield results.locations.pop().id;
    const { popularity } = yield getCityHotels(locationId, checkInDate, checkOutDate);
    yield put(setCityHotels(popularity));
}

export function* heartHandlerSaga () {
    const favoritesCollection =  yield select(state => state.getFavorites.favorites);
    const storedCollection = yield JSON.parse(localStorage.getItem('storedFavorites'));
    const currentCollection = yield storedCollection.concat(favoritesCollection);
    yield put(eraseFavorites());
    localStorage.setItem('storedFavorites', JSON.stringify(currentCollection));
}

export function* watchClickSaga () {
    yield takeEvery(SET_CITY_INFO, getHotelsSaga);
    yield takeEvery(COLLECT_FAVORITE, heartHandlerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}