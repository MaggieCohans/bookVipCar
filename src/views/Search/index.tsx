import React from 'react';
import { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';
import Feather from 'react-native-vector-icons/Feather';
import { SelectList } from 'react-native-dropdown-select-list';
import { PrimaryButton } from '../../components/Button';
import { SearchScreenProps } from '../../navigator/type';
import { useTranslation } from 'react-i18next';
import { getProvinces, getSeatConditions, searchCar } from '../../api';
import { formatDate } from '../../utils';
import { Loading } from '../../components/Loading';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Card } from 'react-native-ui-lib';
import { NormalText, PrimaryText, SecondaryText } from '../../components/Text';
import Rating from '../../components/Rating';
import { COLORS } from '../../common';
import { updateSearchBrand } from '../../redux/slices/AppSlice';

type InforCar = {
  imagePath: string;
  brand: string;
  price: string;
}

export default function SearchScreen({ navigation }: SearchScreenProps) {
  const app = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  const { t, i18n } = useTranslation();

  const [listCar, setListCar] = useState<InforCar[]>([]);

  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [dropOffDate, setDropOffDate] = useState(new Date());
  const [openDatePickerPickUp, setOpenDatePickerPickUp] = useState(false);
  const [openDatePickerDropOff, setOpenDatePickerDropOff] = useState(false);

  const [selectedPlaceReceive, setSelectedPlaceReceive] = useState<number>(1);
  const [selectedSeats, setSelectedSeats] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const [provinces, setProvinces] = useState([]);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    getProvinces()
      .then(response => {
        const provincesData = response.data.data.map((item: { id: string; name: string; }) => ({ key: item.id, value: item.name }));
        setProvinces(provincesData);
      })
      .catch(error => {
        console.error('Error: ' + error);
      });

    getSeatConditions()
      .then(res => {
        const seatsData = res.data.data;
        setSeats(seatsData);
      })
      .catch(error => {
        console.error('Error: ' + error);
      });

    return () => {
      dispatch(updateSearchBrand(""));
    }
  }, [])

  useEffect(() => {
    searchCar({})
      .then(res => {
        setListCar(res.data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error: " + err);
        setIsLoading(false);
      })
  }, [app.searchBrand]);

  const handleSelectSeats = (index: number) => {
    if (index === 1) {
      return "4";
    } else if (index === 2) {
      return "7";
    } else if (index === 3) {
      return "16";
    } else {
      return "";
    }
  }

  const handleButtonSearch = () => {
    setIsLoading(true);
    // console.log(formatDate(pickUpDate), formatDate(dropOffDate), selectedPlaceReceive, [handleSelectSeats(selectedSeats).toString()]);
    searchCar({
      startDate: formatDate(pickUpDate).replace(/\//g, '-'),
      endDate: formatDate(dropOffDate).replace(/\//g, '-'),
      provinces: selectedPlaceReceive,
      seats: selectedSeats === 0 ? [] : [handleSelectSeats(selectedSeats).toString()],
    })
      .then(res => {
        // console.log(res.data);
        navigation.navigate("ListCar", res.data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error: " + err);
        setIsLoading(false);
      })
  }

  return (
    <ScrollView style={styles.ScroolView}>
      <View style={styles.SearchCar}>
        <View>
          <Text style={styles.TextHeadingSearch}>{t('Pick-up Date')}</Text>
          <View style={styles.BoxItemSearch}>
            <TouchableOpacity
              onPress={() => setOpenDatePickerPickUp(true)}
              style={styles.TouchItemSearch}>
              <TextInput
                style={styles.TextInputItemSearch}
                onChangeText={(txt) => setPickUpDate(new Date(txt))}
                defaultValue={formatDate(pickUpDate)}
                editable={false}
              />
              <Feather
                size={20}
                name="calendar"
                style={styles.CalendarItemSearch}
              />
              <DatePicker
                modal
                mode="datetime"
                is24hourSource="locale"
                locale={t('Locate')}
                minimumDate={new Date()}
                open={openDatePickerPickUp}
                date={pickUpDate}
                onConfirm={date => {
                  setOpenDatePickerPickUp(false);
                  setPickUpDate(date);
                }}
                onCancel={() => {
                  setOpenDatePickerPickUp(false);
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.TextHeadingSearch}>{t('Drop-off Date')}</Text>
          <View style={styles.BoxItemSearch}>
            <TouchableOpacity
              onPress={() => setOpenDatePickerDropOff(true)}
              style={styles.TouchItemSearch}>
              <TextInput
                style={styles.TextInputItemSearch}
                onChangeText={(txt) => setDropOffDate(new Date(txt))}
                defaultValue={
                  formatDate(dropOffDate) < formatDate(pickUpDate)
                    ? formatDate(pickUpDate)
                    : formatDate(dropOffDate)
                }
                editable={false}
              />
              <Feather
                size={20}
                name="calendar"
                style={styles.CalendarItemSearch}
              />
              <DatePicker
                modal
                mode="datetime"
                is24hourSource="locale"
                locale={t('locate')}
                minimumDate={pickUpDate}
                open={openDatePickerDropOff}
                date={dropOffDate}
                onConfirm={date => {
                  setOpenDatePickerDropOff(false);
                  setDropOffDate(date);
                }}
                onCancel={() => {
                  setOpenDatePickerDropOff(false);
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.TextHeadingSearch}>{t('Place To Rent')}</Text>
          <SelectList
            setSelected={setSelectedPlaceReceive}
            data={provinces}
            arrowicon={
              <FontAwesome
                name="chevron-down"
                size={15}
                color={'gray'}
                style={styles.arrowIcon}
              />
            }
            searchicon={
              <FontAwesome
                name="search"
                size={15}
                color={'gray'}
                style={styles.searchIcon}
              />
            }
            search={true}
            boxStyles={styles.BoxItemSearch}
            maxHeight={100}
            dropdownTextStyles={styles.dropdownTextStyles}
            inputStyles={styles.inputStyles}
            dropdownStyles={styles.dropdownStyles}
            defaultOption={{ key: '1', value: 'Ha Noi' }}
          />
        </View>
        <View>
          <Text style={styles.TextHeadingSearch}>{t('Seating Capacity')}</Text>
          <SelectList
            setSelected={setSelectedSeats}
            data={seats.map((item: { seats: string }, index: number) => ({ key: index + 1, value: t(item.seats + " Seats") }))}
            arrowicon={
              <FontAwesome
                name="chevron-down"
                size={15}
                color={'gray'}
                style={styles.arrowIcon}
              />
            }
            searchicon={
              <FontAwesome
                name="search"
                size={15}
                color={'gray'}
                style={styles.searchIcon}
              />
            }
            search={true}
            boxStyles={styles.BoxItemSearch}
            maxHeight={100}
            dropdownTextStyles={styles.dropdownTextStyles}
            inputStyles={styles.inputStyles}
            dropdownStyles={styles.dropdownStyles}
          // defaultOption={{ key: '1', value: t('4 Seats') }}
          />
        </View>
        <View style={styles.boxButton}>
          <PrimaryButton
            onPress={handleButtonSearch}
            title={t('Search Car')}
            style={styles.primaryButtonSearchCar}
            colors={['#25aae1', '#4481eb', '#04befe', '#3f86ed']}
          />
          {isLoading && <Loading />}
        </View>
        <View style={styles.footerBook} />
      </View>
      {app.searchBrand === "Mercedes" &&
        <ScrollView>
          <View style={styles.hr} />
          {listCar.map((item, index) =>
            <Card key={index} style={styles.card}>
              <Image
                source={{ uri: item.imagePath }}
                width={180}
                style={{ objectFit: 'contain' }}
              />
              <View style={styles.textContainer}>
                <PrimaryText content={item.brand} color={COLORS.primary} />
                <SecondaryText content={parseFloat(item.price).toLocaleString() + " VND"} style={styles.textPrice} />
                <NormalText content={t("For 9 hours/100km")} color={COLORS.primary} />
                < Rating stars={5} />
                <PrimaryButton
                  onPress={() => navigation.navigate('Payment')}
                  title={t("Booking")}
                />
              </View>
            </Card>
          )}
        </ScrollView>
      }
    </ScrollView >
  );
}
