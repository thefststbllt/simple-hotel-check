import { API_TOKEN, MAX_HOTEL_COUNT } from '../utils/utils';

export const getCityId = async (cityName) => {
    const request = await fetch(`https://engine.hotellook.com/api/v2/lookup.json?query=${cityName}&lang=ru&lookFor=both&limit=1`)
    return await request.json();
};

export const getCityHotels = async (cityId, checkIn, checkOut) => {
    const request = await fetch(`https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency=rub&language=ru&limit=${MAX_HOTEL_COUNT}&id=${cityId}&type=popularity&check_in=${checkIn}&check_out=${checkOut}&token=${API_TOKEN}`)
        return await request.json();
}