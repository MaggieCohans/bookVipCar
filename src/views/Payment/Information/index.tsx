import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import DatePicker from 'react-native-date-picker';
import { Heading, SecondaryText } from '../../../components/Text';
import Lable from './Lable';
import { Checkbox, LoaderScreen } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loading } from '../../../components/Loading';
import { COLORS } from '../../../common';
import { MainProps } from '../type';
import { useTranslation } from 'react-i18next';
import Feather from 'react-native-vector-icons/Feather';
import { formatDate } from '../../../utils';
import { PrimaryButton } from '../../../components/Button';

export default function Information({ activeIndex, setActiveIndex, setCompletedStepIndex }: MainProps) {
    const { t, i18n } = useTranslation();

    const [pickUpDate, setPickUpDate] = useState(new Date());
    const [dropOffDate, setDropOffDate] = useState(new Date());
    const [pickUpPlace, setPickUpPlace] = useState("");
    const [whereTo, setWhereTo] = useState("");
    const [moreNotes, setMoreNotes] = useState("");
    const [locationNotes, setLocationNotes] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    // const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [onSubmit, setOnSubmit] = useState(false);

    const [openDatePickerPickUp, setOpenDatePickerPickUp] = useState(false);
    const [openDatePickerDropOff, setOpenDateDropOff] = useState(false);

    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const [option5, setOption5] = useState(false);
    const [option6, setOption6] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const value = await AsyncStorage.getItem('booking');
            if (value !== null) {
                const data = JSON.parse(value);
                setPickUpDate(new Date(data.pickUpDate));
                setDropOffDate(new Date(data.dropOffDate));
                setPickUpPlace(data.pickUpPlace);
                setWhereTo(data.whereTo);
                setMoreNotes(data.moreNotes);
                setLocationNotes(data.locationNotes);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);
                setPhoneNumber(data.phoneNumber);
                data.utilities.map((item: string) => {
                    if (listOfUtilities.indexOf(item) !== -1) {
                        handleCheckboxChange(listOfUtilities.indexOf(item));
                    }
                })
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    const listOfInputText: Array<{ name: string; required: boolean; value: string }> = [
        { name: t('Pick-up Place'), required: true, value: pickUpPlace },
        { name: t('Where To'), required: true, value: whereTo },
        { name: t('Location Notes'), required: false, value: locationNotes },
        { name: t('First Name'), required: true, value: firstName },
        { name: t('Last Name'), required: true, value: lastName },
    ];

    const handleTextInputChange = (index: number, value: string) => {
        switch (index) {
            case 0:
                setPickUpPlace(value);
                break;
            case 1:
                setWhereTo(value);
                break;
            case 2:
                setLocationNotes(value);
                break;
            case 3:
                setFirstName(value);
                break;
            case 4:
                setLastName(value);
                break;
            case 5:
                setEmail(value);
                break;
            case 6:
                setPhoneNumber(value);
                break;
            default:
                break;
        }
    };

    const listOfUtilities = [
        t('Souvenir'),
        t('Hotel Reservation'),
        t('Golf Reservation'),
        t('Traslator'),
        t('Massage'),
        t('Japanese Karaoke'),
    ]

    const getOptionValue = (index: number) => {
        switch (index) {
            case 0:
                return option1;
            case 1:
                return option2;
            case 2:
                return option3;
            case 3:
                return option4;
            case 4:
                return option5;
            case 5:
                return option6;
            default:
                return false;
        }
    };

    const handleCheckboxChange = (index: number) => {
        switch (index) {
            case 0:
                setOption1(!option1);
                break;
            case 1:
                setOption2(!option2);
                break;
            case 2:
                setOption3(!option3);
                break;
            case 3:
                setOption4(!option4);
                break;
            case 4:
                setOption5(!option5);
                break;
            case 5:
                setOption6(!option6);
                break;
            default:
                break;
        }
    };

    const handleDataUtils = () => {
        const list = [];
        for (let index = 0; index < listOfUtilities.length; index++) {
            if (getOptionValue(index)) {
                list.push(listOfUtilities[index])
            }
        }
        return list;
    }

    const saveData = async () => {
        setOnSubmit(true);
        try {
            const jsonValue = JSON.stringify({
                "pickUpDate": pickUpDate,
                "dropOffDate": dropOffDate,
                "pickUpPlace": pickUpPlace,
                "whereTo": whereTo,
                "locationNotes": locationNotes,
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phoneNumber": phoneNumber,
                "moreNotes": moreNotes,
                "utilities": handleDataUtils()
            });
            await AsyncStorage.setItem(
                "booking", jsonValue
            );
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
        if (setActiveIndex) setActiveIndex(activeIndex + 1);
        if (setCompletedStepIndex) setCompletedStepIndex(activeIndex);
        setOnSubmit(false);
    };

    return (
        <ScrollView style={styles.infor}>
            {loading && <Loading />}
            <Heading content={t('Fill in information')} color={COLORS.secondary} textAlign='center' />
            <Lable content={t('Pick-up Date')} important={true} />
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

            <Lable content={t('Drop-off Date')} important={true} />
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
            {listOfInputText.map((item, index) => <View key={index}>
                <Lable content={item.name} important={item.required} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => handleTextInputChange(index, text)}
                    value={item.value}
                />
            </View>)}
            <Lable content={t('Email')} important={true} />
            <TextInput value={email} style={styles.textInput} keyboardType='email-address' onChangeText={(text) => setEmail(text)} />
            <Lable content={t('Phone Number')} important={true} />
            <TextInput value={phoneNumber} style={styles.textInput} keyboardType='numeric' onChangeText={(text) => setPhoneNumber(text)} />
            <Lable content={t('More Notes')} important={false} />
            <TextInput style={styles.textInput} multiline numberOfLines={4} onChangeText={(text) => setMoreNotes(text)} />
            <SecondaryText content={t('Other services')} style={styles.utilities} />
            <View>
                {listOfUtilities.map((item, index) =>
                    <Checkbox key={index} value={getOptionValue(index)} label={item} onValueChange={() => handleCheckboxChange(index)} labelStyle={styles.lableText} style={styles.checkBox} />
                )}
            </View>
            <PrimaryButton title={t('Send')} primaryButtonStyle={styles.btn} onPress={saveData}>
                {onSubmit ?
                    <LoaderScreen />
                    :
                    <SecondaryText content={t('Send')} color='#fff' />
                }
            </PrimaryButton>
        </ScrollView>
    )
}