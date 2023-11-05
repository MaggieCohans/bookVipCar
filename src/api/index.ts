import { type } from '@testing-library/react-native/build/user-event/type';
import instance from './config';
import {
  ADD_BOOKING,
  CAR_ID,
  GET_BRAND_CONDITIONS,
  GET_POVINCE,
  GET_SEAT_CONDITIONS,
  SAVE_BOOKING,
  SEARCH_CAR,
  SEARCH_CAR_BY_ID,
  SEAT_CONDITIONS,
  SIGNIN,
  SIGNUP,
  GET_POINTS,
  GET_HISTORY_POINTS,
  UPDATE_POINTS,
  GET_PROMOTIONS
} from './endpoint';

export const getSeatCondition = () => {
  return instance.get(SEAT_CONDITIONS);
};

type SearchCarParams = {
  startDate?: string;
  endDate?: string;
  provinces?: number;
  seats?: string[];
}
type UpdatePointsParams = {
  userId?: number,
  bookingId?: number,
  currentPoints?: number,
  lifetimeScore?: number,
}


export const update_Points = (id: string, data: UpdatePointsParams) => {
  const url = UPDATE_POINTS.replace('{{ID}}', id);
  const config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: url,
    data: data,
  };
  return instance.request(config);
};



export const searchCar = (data: SearchCarParams) => {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: SEARCH_CAR,
    data: data,
  };
  return instance.request(config);
};

// type BookingParams = {
//   carId: 0,
//   startDate: string,
//   endDate: string,
//   startLocation: string,
//   firstName: string,
//   lastName: string,
//   phone: string,
//   city: string,
//   district: string,
//   ward: string,
//   email: string,
//   noteLocation: string,
//   other: string,
//   endLocation: string,
//   otherService: {
//     souvenir: boolean,
//     hotelReservation: boolean,
//     golfReservation: boolean,
//     translation: boolean,
//     massage: boolean,
//     japaneseKaraoke: boolean,
//   },
// }
// export const saveBooking = (data: BookingParams) => {
//   const url = '';
//   return instance.post(url);
// };

export const searchById = (id: string) => {
  const url = SEARCH_CAR_BY_ID.replace('{{ID}}', id);
  return instance.get(url);
};

export const getProvinces = () => {
  return instance.get(GET_POVINCE);
};

export const getBrandConditions = () => {
  return instance.get(GET_BRAND_CONDITIONS);
};

export const getSeatConditions = () => {
  return instance.get(GET_SEAT_CONDITIONS);
};

type SignInPrams = {
  email: string,
  pass: string
}
export const signIn = (data: SignInPrams) => {
  return fetch(SIGNIN, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email,
      password: data.pass
    })
  });
};

type SignUpPrams = {
  username: string,
} & SignInPrams;
export const signUp = (data: SignUpPrams) => {
  return fetch(SIGNUP, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.pass
    })
  });
};

type BookingParams = {
  user_id: number;
  car_id: number;
  pick_up_date: string;
  drop_off_date: string;
  pick_up_place: string;
  where_to: string;
  note_location: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  more_notes: string;
  price: number;
  status: string;
  utilities: string;
}
export const addBooking = (data: BookingParams) => {
  return fetch(ADD_BOOKING, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: data.user_id,
      car_id: data.car_id,
      pick_up_date: data.pick_up_date,
      drop_off_date: data.drop_off_date,
      pick_up_place: data.pick_up_place,
      where_to: data.where_to,
      note_location: data.note_location,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      email: data.email,
      more_notes: data.more_notes,
      price: data.price,
      status: data.status,
      utilities: data.utilities,
    })
  });
}
export const getPoints = () => {
  return instance.get(GET_POINTS);
};

export const getHistoryPoints = () => {
  return instance.get(GET_HISTORY_POINTS);
};
export const getPromotions = () => {
  return instance.get(GET_PROMOTIONS);
};
