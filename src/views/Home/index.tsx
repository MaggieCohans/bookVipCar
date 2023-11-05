import React from 'react';
import { useEffect, useState } from 'react';
import {
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Modal,
  Linking,
} from 'react-native';
import { styles } from './style';
import { BaseCard, SubCard } from '../../components/Card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DatePicker from 'react-native-date-picker';
import Feather from 'react-native-vector-icons/Feather';
import { SelectList } from 'react-native-dropdown-select-list';
import { PrimaryButton } from '../../components/Button';
import { HomeScreenProps } from '../../navigator/type';
import { getProvinces, searchCar } from '../../api';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../../utils';
import { Loading } from '../../components/Loading';
import { useAppDispatch } from '../../hooks/redux';
import { updateSearchBrand } from '../../redux/slices/AppSlice';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { t, i18n } = useTranslation();

  const urllocation = 'https://64e73527b0fd9648b78f8847.mockapi.io/FamousPlace';
  const urllistcar = 'https://64e73527b0fd9648b78f8847.mockapi.io/ListVipCar';

  const [text, setText] = useState('');
  const [datalistcar, setDataListCar] = useState<any>([]);
  const [datalocation, setDataLocation] = useState<any>([]);

  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [dropOffDate, setDropOffDate] = useState(new Date());
  const [openDatePickerPickUp, setOpenDatePickerPickUp] = useState(false);
  const [openDatePickerDropOff, setOpenDateDropOff] = useState(false);

  const [selectedPlaceReceive, setSelectedPlaceReceive] = useState<number>(1);

  const [provinces, setProvinces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(urllistcar)
      .then(resp => resp.json())
      .then(json => setDataListCar(json))
      .catch(error => console.error(error)); // .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(urllocation)
      .then(resp => resp.json())
      .then(json => setDataLocation(json))
      .catch(error => console.error(error)); // .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getProvinces()
      .then(response => {
        const provincesData = response.data.data.map((item: { id: string; name: string; }) => ({ key: item.id, value: item.name }));
        setProvinces(provincesData);
      })
      .catch(error => {
        console.error('Error: ' + error);
      });
  }, []);

  const listText = [
    t('Supports Japanese'),
    t('Online Payment'),
    t('Luxury Cars Available'),
  ];

  const handleButtonSearch = () => {
    setIsLoading(true);
    searchCar({
      startDate: formatDate(pickUpDate).replace(/\//g, '-'),
      endDate: formatDate(dropOffDate).replace(/\//g, '-'),
      provinces: selectedPlaceReceive,
    })
      .then(res => {
        console.log(res.data);
        navigation.navigate("ListCar", res.data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error: " + err);
        setIsLoading(false);
      })
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.ScroolView}>
      <View style={styles.header}>
        <Image
          source={require('./Picture/logoHeader.png')}
          style={styles.headerImage}
        />
        <View style={styles.searchbar}>
          <TouchableOpacity>
            <EvilIcons
              name="search"
              size={37}
              color="black"
              style={styles.imageSearch}
              onPress={() => {
                dispatch(updateSearchBrand("Mercedes"))
                navigation.navigate('Search');
                console.log('====================================');
              }}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.inputs}
            onChangeText={(txt) => setText(txt)}
            defaultValue={text}
            placeholder="Search"
          />
          <TouchableOpacity onPress={() => setText('')}>
            <MaterialCommunityIcons
              name="close-circle"
              size={30}
              style={styles.imageClear}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.BookingCard}>
        <View>
          <Text style={styles.TextHeadingBookCar}>{t('Rental Cars with Drivers')}</Text>
          <View style={styles.LongBar} />
          {listText.map((item, key) => (
            <View key={key} style={styles.ListItemBookingCar}>
              <View style={styles.CircleBookingCard} />
              <Text style={styles.TextBookingCard}>{item} </Text>
            </View>
          ))}
        </View>
        <Image
          source={require('./Picture/car.png')}
          style={styles.ImageBookingCard}
        />
      </View>

      <View style={styles.SearchCar}>
        <ImageBackground
          source={require('./Picture/search_bg2.36ee872ec9a2b0b86779.jpg')}
          resizeMode="cover"
          style={styles.ImageSearchCar}
        />
        <View style={styles.SearchWrap}>
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
                  locale={t('locate')}
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
                onPress={() => setOpenDateDropOff(true)}
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
                    setOpenDateDropOff(false);
                    setDropOffDate(date);
                  }}
                  onCancel={() => {
                    setOpenDateDropOff(false);
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
          <View style={styles.boxButton}>
            <PrimaryButton
              onPress={handleButtonSearch}
              title={t('Search Car')}
              style={styles.primaryButtonSearchCar}
              colors={['#25aae1', '#4481eb', '#04befe', '#3f86ed']}
            />
          </View>
          {isLoading && <Loading />}
          <View style={styles.footerBook} />
        </View>
      </View>

      <View style={styles.headingTips}>
        <Text style={styles.textHeadingTips}>{t('Where Are You Going?')}</Text>
        <View style={styles.listItemTips}>
          {datalocation.map(
            (
              location: { image: any; name: any },
              index: React.Key | null | undefined,
            ) => (
              <BaseCard
                key={index}
                containerStyle={styles.boxItemTips}
                urlImage={location.image} // Do Here
                imgStyle={styles.imageItemTips}
                children={
                  <SubCard
                    title={location.name}
                    titleStyle={styles.titleItemTips}
                    subTitle={t('Find Cars')}
                    containerStyle={styles.baseCardTips}
                  />
                }
              />
            ),
          )}
        </View>
      </View>

      <View>
        <View style={styles.headingTips}>
          <Text style={styles.textHeadingVipCar}>{t('Luxury Car')}</Text>
        </View>
        <View style={styles.listCardCar}>
          {datalistcar.map(
            (
              c: { image: any; name: any },
              index: React.Key | null | undefined,
            ) => (
              <BaseCard
                containerStyle={styles.baseCardCar}
                key={index}
                title={c.name}
                titleButton={t('Contact Now')}
                urlImage={c.image}
                imgStyle={styles.imageCardCar}
                onPressButton={openModal}
              />
            ),
          )}
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
        >
        <LinearGradient
        colors={['#22e1ff', '#1d8fe1', '#625eb1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.modalContent}
        >
          <Text style={styles.modalBigger}>{t('Booking Luxury Car')}</Text>
            <Text style={styles.modalTitle}>{t('Contact us by the form below if you have a need to use special high-end vehicles.')}</Text>
            <View style={styles.modalButtons}>
            <LinearGradient
              colors={['#ed6ea0', '#ec8c69', '#f7186a', '#fbb03b']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.button, styles.buttonRed]}
            >
              <TouchableOpacity onPress={() => Linking.openURL('tel:+8496-873-1699')}>
                <Text style={styles.buttonText}>Tel: +8496-873-1699</Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={['#25aae1', '#40e495', '#30dd8a', '#2bb673']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.button, styles.buttonGreen]}
            >
              <TouchableOpacity onPress={() => Linking.openURL('mailto:eigyou@aitravelgroup.com')}>
                <Text style={styles.buttonText}>Email</Text>
              </TouchableOpacity>

            </LinearGradient>
      </View>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
      </LinearGradient>
      </Modal>

        <View style={styles.listLogo}>
          <Image
            source={require('./Picture/toyota.png')}
            style={styles.imageLogo}
          />
          <Image
            source={require('./Picture/honda.png')}
            style={styles.imageLogo}
          />
          <Image
            source={require('./Picture/lexus.png')}
            style={styles.imageLogo}
          />
        </View>
        <View style={styles.listLogo}>
          <Image
            source={require('./Picture/mer.png')}
            style={styles.imageLogo}
          />
          <Image
            source={require('./Picture/marda.png')}
            style={styles.imageLogo}
          />
          <Image
            source={require('./Picture/nissan.png')}
            style={styles.imageLogo}
          />
        </View>
      </View>

      <View style={styles.commit}>
        <Text style={styles.headingCommit}>
          {t('Get The Best Experience With Your Rental Deals')}
        </Text>
        <View style={styles.listTextCommit}>
          <View style={styles.boxTextCommit}>
            <FontAwesome6
              name="coins"
              color="#f23557"
              size={40}
              style={styles.iconCoinsCommit}
            />
            <Text style={styles.itemTextCommit}> {t('Best price guaranteed')}</Text>
          </View>
          <View style={styles.boxTextCommit}>
            <MaterialCommunityIcons
              name="clock"
              color="#f23557"
              size={40}
              style={styles.iconClockCommit}
            />
            <Text style={styles.itemTextCommit}> {t('Support 24/7')}</Text>
          </View>
          <View style={styles.boxTextCommit}>
            <FontAwesome
              name="star-half-empty"
              color="#f23557"
              size={40}
              style={styles.iconStarCommit}
            />
            <Text style={styles.itemTextCommit}> {t('Pristine & Comfortable')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer} />
    </ScrollView >
  );
}
