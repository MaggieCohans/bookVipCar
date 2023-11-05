import { Alert, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native-ui-lib'
import { Heading, NormalText, PrimaryText, SecondaryText } from '../../components/Text'
import { COLORS } from '../../common'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Loading } from '../../components/Loading'
import { styles } from './styles'
import { PrimaryButton } from '../../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MainProps } from './type'
import { useTranslation } from 'react-i18next'
import { getData, saveData } from '../../helpers'
import PaymentView from '../../components/PaymentVIew/demo'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '../../hooks/redux'
import { addBooking } from '../../api'

interface BookingData {
    pickUpDate: Date;
    dropOffDate: Date;
    pickUpPlace: string;
    whereTo: string;
    locationNotes: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    moreNotes: string;
    utilities: string[];
}

interface CarData {
    id: number;
    price: string;
    imagePath: string;
    brand: string;
    seats: string;
    transmission: string;
}

export default function Confirm({ activeIndex, setActiveIndex, setCompletedStepIndex }: MainProps) {
    const { t, i18n } = useTranslation();
    const navigation = useNavigation();

    const app = useAppSelector(state => state.app);

    const [userID, setUserID] = useState(0);
    const [data, setData] = useState<BookingData>();
    const [dataCar, setDataCar] = useState<CarData>();
    const [loading, setLoading] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const getDataBooking = async () => {
        setLoading(true);
        try {
            const dataCarBooking = await getData("carBooking");
            setDataCar(dataCarBooking);
            const dataBooking = await getData("booking");
            setData(dataBooking);
            const user = await getData("user_id");
            setUserID(user);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (setCompletedStepIndex) setCompletedStepIndex(activeIndex);
        getDataBooking();
    }, []);

    function calPrice(dropOffDate: Date, pickUpDate: Date, price: string) {
        var date1 = new Date(pickUpDate);
        var date2 = new Date(dropOffDate);
        var start = Math.floor(date1.getTime() / (3600 * 24 * 1000));
        var end = Math.floor(date2.getTime() / (3600 * 24 * 1000));
        var daysDiff = end - start;
        return daysDiff * parseInt(price);
    }

    function formatDateToCustomFormat(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    const handleComfirm = () => {
        setLoadingSubmit(true);
        if (data && dataCar) {
            console.log(data, dataCar);
            return addBooking({
                user_id: userID,
                car_id: dataCar.id,
                pick_up_date: formatDateToCustomFormat(new Date(data.pickUpDate)),
                drop_off_date: formatDateToCustomFormat(new Date(data.dropOffDate)),
                pick_up_place: data.pickUpPlace,
                where_to: data.whereTo,
                note_location: data.locationNotes ? data.locationNotes : "No",
                first_name: data.firstName,
                last_name: data.lastName,
                phone_number: data.phoneNumber,
                email: data.email,
                more_notes: data.moreNotes ? data.moreNotes : "No",
                price: calPrice(data.dropOffDate, data.pickUpDate, dataCar.price),
                status: "Pending",
                utilities: JSON.stringify(data.utilities)
            })
                .then((response) => response.json())
                .then((res) => {
                    if (res.status == 200) {
                        navigation.navigate('MethodPayment');
                        saveData("urlPay", res.data.payment_url);
                        switch (app.transactionStatus) {
                            case 0:
                                AsyncStorage.removeItem("booking");
                                if (setCompletedStepIndex) setCompletedStepIndex(activeIndex);
                                if (setActiveIndex) setActiveIndex(activeIndex + 1);
                                break;
                            case 1:
                                Alert.alert(t("Transaction not completed"));
                                break;
                            case 2:
                                Alert.alert(t("Transaction error"));
                                break;
                            case 4:
                                Alert.alert(t("Irrelevant transaction (Customer has had money deducted at the Bank but the transaction has not been successful at VNPAY)"));
                                break;
                            case 5:
                                Alert.alert(t("VNPAY is processing this transaction (refund transaction)"));
                                break;
                            case 6:
                                Alert.alert(t("VNPAY has sent a refund request to the Bank (Refund transaction)"));
                                break;
                            case 7:
                                Alert.alert(t("The transaction is suspected of fraud"));
                                break;
                            case 9:
                                Alert.alert(t("Refund transaction declined"));
                                break;
                            default:
                                break;
                        }
                    } else {
                        Alert.alert(t("Booking failed!"), res.message);
                    }
                })
                .finally(() => {
                    setLoadingSubmit(false);
                })
        }
    }

    return (
        <ScrollView>
            <Heading content={t('Confirm booking information')} color={COLORS.secondary} textAlign='center' />
            {loading && <Loading />}
            {(dataCar && data) &&
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={{ uri: `${dataCar.imagePath}` }}
                            width={160}
                            height={200}
                            style={{ objectFit: 'contain' }}
                        />
                        <View style={{ paddingVertical: 10, marginLeft: 10 }}>
                            <SecondaryText content={dataCar.brand} style={{ marginVertical: 10, color: COLORS.primary, fontSize: 20, fontWeight: '900' }} />
                            <SecondaryText content={t('Specifications')} style={{ marginVertical: 10, color: COLORS.primary, fontSize: 18, fontWeight: 'bold' }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='car-seat' color={COLORS.primary} size={30} />
                                <SecondaryText content={`${dataCar.seats}` + " " + t('Seats')} style={{ color: COLORS.primary, fontSize: 16, fontWeight: 'bold', marginLeft: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='car' color={COLORS.primary} size={30} />
                                <SecondaryText content={t(`${dataCar.transmission}`)} style={{ color: COLORS.primary, fontSize: 16, fontWeight: 'bold', marginLeft: 10 }} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxInfo}>
                        <View>
                            <NormalText content={t('Pick-up Date') + ':'} style={styles.textBoxTitle} />
                            <NormalText content={t('Drop-off Date') + ':'} style={styles.textBoxTitle} />
                            <NormalText content={t('Pick-up Place') + ':'} style={styles.textBoxTitle} />
                            <NormalText content={t('Where To') + ':'} style={styles.textBoxTitle} />
                            <NormalText content={t('Location Notes') + ':'} style={styles.textBoxTitle} />
                            <NormalText content={(t('First Name') == 'First Name' ? 'Full' : t('First Name')) + " " + (t('Last Name') == 'Last Name' ? 'Name' : t('Last Name')) + ':'} style={styles.textBoxTitle} />
                            <NormalText content={t('Phone Number') + ':'} style={styles.textBoxTitle} />
                            <NormalText content={t('Email') + ':'} style={styles.textBoxTitle} />
                            <NormalText content={t('More Notes') + ':'} style={styles.textBoxTitle} />
                            <NormalText content={t('Other services') + ':'} style={styles.textBoxTitle} />
                        </View>
                        <View>
                            <NormalText content={(new Date(data.pickUpDate)).toLocaleDateString()} color={COLORS.primary} />
                            <NormalText content={(new Date(data.dropOffDate)).toLocaleDateString()} color={COLORS.primary} />
                            <NormalText content={data.pickUpPlace} color={COLORS.primary} />
                            <NormalText content={data.whereTo} color={COLORS.primary} />
                            <NormalText content={data.locationNotes} color={COLORS.primary} />
                            <NormalText content={data.firstName + " " + data.lastName} color={COLORS.primary} />
                            <NormalText content={data.phoneNumber} color={COLORS.primary} />
                            <NormalText content={data.email} color={COLORS.primary} />
                            <NormalText content={data.moreNotes} color={COLORS.primary} />
                            {data.utilities.map((item, key) => (
                                <NormalText content={item} key={key} color={COLORS.primary} />
                            ))}
                        </View>
                    </View>
                    <View style={styles.boxPay}>
                        <PrimaryText content={t("Total Cost: " + `${calPrice(data.dropOffDate, data.pickUpDate, dataCar.price).toLocaleString('vi-VN')}` + " VND")} color={COLORS.primary} />
                        <NormalText content={t("Payment methods - Credit Card")} color={COLORS.primary} />
                    </View>
                    <View style={styles.box}>
                        <PrimaryButton title={t('Comfirm')} onPress={handleComfirm} />
                        {loadingSubmit && <Loading />}
                    </View>
                </View>
            }
        </ScrollView>
    )
}