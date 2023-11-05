import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Search: undefined;
  Book: undefined;
  Setting: undefined;
  Language: undefined;
  Notification: undefined;
  Promos: undefined;
  Payment: undefined;
  MethodPayment: {
    url: string
  };
  Rating: undefined;
  ListCar: {
    id: number;
    licensePlates: string;
    imagePath: string;
    seats: string;
    transmission: string;
    price: string;
    partnerPrice: string;
    priceSpecialDay: string;
    provinceId: string;
    partnerId: string;
    status: string;
    deleteFlag: string;
    startDate: string;
    endDate: string;
    brand: string;
  }[];
  EarnPoint: undefined;
  ReedemPoint: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Home'
>;

export type SearchScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Search'
>;

export type BookScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Book'
>;

export type PaymentScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Payment'
>;

export type MethodPaymentScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'MethodPayment'
>;

export type ListCarsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'ListCar'
>;

export type SettingScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Setting'
>;

export type AuthenStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SiginScreenProps = NativeStackScreenProps<
  AuthenStackParamList,
  'SignIn'
>;

export type SiginoutScreenProps = NativeStackScreenProps<
  AuthenStackParamList,
  'SignUp'
>;
export type LanguageScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Language'
>;
export type NotificationScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Notification'
>;
export type PromosScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Promos'
>;
export type PointScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'EarnPoint'
>;
export type ReedemScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'ReedemPoint'
>;
export type RatingScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Rating'
>;
