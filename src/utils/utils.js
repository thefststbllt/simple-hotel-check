const getCalendarDate = (inputDate) => {
    return new Date(inputDate).toISOString().slice(0, 10);
};

const getCorrectDate = (date) => {
    return new Date(date).toLocaleDateString(
        'ru-RU',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    ).slice(0, -2).trim();
};

const diffDate = (checkIn, checkOut) => {
    if (!checkIn && !checkOut) {
        return
    }
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

const getCheckOutDate = (checkIn, daysCount) => {
    const time1 = (new Date(checkIn)).getTime();
    const time2 = time1 + Number(daysCount) * (1000 * 3600 * 24);

    return getCalendarDate(time2);
};

const createEnding = (number, endingType) => {
    const endings = {
        day: ['день', 'дня', 'дней'],
        hotel: ['отель', 'отеля', 'отелей']
    };
    const cases = [2, 0, 1, 1, 1, 2];
    switch (endingType) {
        case 'day':
            return `${number} ${endings.day[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
        case 'hotel':
            return `\u00A0${endings.hotel[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
        default: return
    }
};

const prettifyNum = (num) => {
    return num.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
};

const getCleanNumber = (stringPrice) => {
    return Number(stringPrice.slice(0, -1).trim().replace(/\s/g,''));
};

const HARDCODED_PICTURES = [
    {
        ID: '1',
        COMMON: require('./../assets/content/hotel-1.png'),
        RETINA: require('./../assets/content/retina/hotel-1@2x.png'),
        DESCRIPTION: 'картинка-1'
    },
    {
        ID: '2',
        COMMON: require('./../assets/content/hotel-2.png'),
        RETINA: require('./../assets/content/retina/hotel-2@2x.png'),
        DESCRIPTION: 'картинка-2'
    },
    {
        ID: '3',
        COMMON: require('./../assets/content/hotel-3.png'),
        RETINA: require('./../assets/content/retina/hotel-3@2x.png'),
        DESCRIPTION: 'картинка-3'
    },
    {
        ID: '4',
        COMMON: require('./../assets/content/hotel-4.png'),
        RETINA: require('./../assets/content/retina/hotel-4@2x.png'),
        DESCRIPTION: 'картинка-4'
    }
];

const MIN_PASSWORD_LENGTH = 7;
const API_TOKEN = '8ce4fcb8a7544dc1ab8157d7c6b7b8fa';
const MAX_HOTEL_COUNT = 25;
const CURRENCY_SIGNS = {
    US_DOLLAR: '$',
    CH_YUAN: '¥',
    RU_ROUBLE: '₽',
    EURO: '€'
};

const STARS_RATING = [1, 2, 3, 4, 5];
const STARS_COLORS = {
    DEFAULT: '#6C684599',
    FILLED: '#CDBC1E'
};

const DEFAULT_LOCATION = {
    LOCATION: 'Москва',
    CHECK_IN: getCalendarDate(Date.now()),
    DAY_COUNT: '1'
};

const REG_EXP_CYRILLIC = /[\u0400-\u04FF]/g;

export {
    getCorrectDate,
    diffDate,
    getCheckOutDate,
    createEnding,
    prettifyNum,
    getCleanNumber,
    MIN_PASSWORD_LENGTH,
    HARDCODED_PICTURES,
    API_TOKEN,
    MAX_HOTEL_COUNT,
    CURRENCY_SIGNS,
    STARS_RATING,
    STARS_COLORS,
    DEFAULT_LOCATION,
    REG_EXP_CYRILLIC
};