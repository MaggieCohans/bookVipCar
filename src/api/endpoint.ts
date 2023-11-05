export const BASE_URL = __DEV__ ? "http://127.0.0.1:8000/api/v1/" : 'https://bookvipcar.vjitp.com/api/v1/';
export const BASE_URL_LOCAL = "http://127.0.0.1:8000/api/v1/";

export const SEAT_CONDITIONS = BASE_URL + 'seatConditions';

export const SEARCH_CAR = BASE_URL + 'searchCar';
export const SEARCH_CAR_BY_ID = BASE_URL + 'searchCar/{{ID}}';
export const GET_POVINCE = 'getProvinces';
export const GET_BRAND_CONDITIONS = 'brandConditions';
export const GET_SEAT_CONDITIONS = 'seatConditions';

export const SIGNIN = BASE_URL_LOCAL + 'login';
export const SIGNUP = BASE_URL_LOCAL + 'create-account';
export const ADD_BOOKING = BASE_URL_LOCAL + 'addBooking';
export const SAVE_BOOKING = BASE_URL + 'saveBooking';
export const CAR_ID = BASE_URL + 'car/{{ID}}';


export const GET_POINTS = BASE_URL + 'points';
export const GET_HISTORY_POINTS = BASE_URL + 'pointHistory';
export const UPDATE_POINTS = BASE_URL + 'points/{{ID}}';

export const GET_PROMOTIONS = BASE_URL + 'promotions';

