import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
import { Image } from "react-native-ui-lib";
import { COLORS } from "../../common";
import { PrimaryButton } from "../../components/Button";
import { styles } from './Reedemstyle';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue, setOutputValue } from '../../redux/slices/AppSlice'
import { RootState } from "../../redux/store";
import { getPoints, update_Points } from '../../api/index'; // Đảm bảo đường dẫn tới tệp API của bạn là đúng

interface Point {
    currentPoints: number;
}

const ReedemScreen: React.FC<any> = ({ navigation }) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [points, setPoints] = useState<number>(0);
    const inputValue = useSelector((state: RootState) => state.app.inputValue);
    const outputValue = useSelector((state: RootState) => state.app.outputValue);
    const dispatch = useDispatch();

    const fetchPoints = () => {
        getPoints()
            .then((response) => {
                const data: Point[] = response.data;
                if (Array.isArray(data) && data.length > 0) {
                    const firstItem = data[0];
                    setPoints(firstItem.currentPoints);
                    dispatch(setInputValue(firstItem.currentPoints.toString()));
                    dispatch(setOutputValue(''));
                } else {
                    console.error('API response does not contain valid data for points and lifetimescore');
                }
            })
            .catch((error) => {
                console.error('Error fetching points:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchPoints();
    }, []);

    const calculateUpdatedPoints = (currentPoints: number, inputValue: string): number => {
        const parsedValue = parseFloat(inputValue.replace(',', '.'));
        if (!isNaN(parsedValue)) {
            const updatedPoints = currentPoints - parsedValue;
            return updatedPoints;
        }
        return currentPoints;
    };

    const handleButtonPress = () => {
        const parsedValue = parseFloat(inputValue.replace(',', '.'));
        if (!isNaN(parsedValue)) {
            const result = parsedValue * 10;
            dispatch(setOutputValue(result.toString()));
        }
    };
    const confirmTransactionAndUpdatePoints = () => {
        Alert.alert(
            t('Confirm transaction'),
            t('Are you sure you want to proceed with this transaction?'),
            [
                {
                    text: t('Cancel'),
                    style: 'cancel',
                },
                {
                    text: t('Confirm'),
                    onPress: () => {
                        const updatedPoints = calculateUpdatedPoints(points, inputValue);
                        setPoints(updatedPoints);
                        const id = '2'; // Đảm bảo rằng id là một chuỗi

                        const data = {
                            id: id,
                            currentPoints: updatedPoints,
                        };

                        update_Points(id, data) // Gọi hàm update_Points với id và dữ liệu
                            .then((response) => {
                                console.log("Response Data:", response.data);

                                if (response.data && response.data.message === "Points updated") {
                                    const updatedPoints = calculateUpdatedPoints(points, inputValue);
                                    setPoints(updatedPoints);
                                    Alert.alert(t('Transaction successful'), `${t('Current points')}: ${updatedPoints}`);
                                } else {
                                    console.error('Error updating points:', response.data.message || 'Unknown error');
                                    Alert.alert('Error, Unable to update points');
                                }
                            })
                            .catch((error) => {
                                console.error('Error updating points:', error);
                                Alert.alert('Error, Unable to update points');
                            });
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome5Icon name="arrow-left" size={20} style={{ marginRight: 5 }} />
                <Text style={styles.backButtonText}>{t('Reedem Points')}</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginBottom: 35 }} >
                <Image source={require('./img/exchange-coin.png')} style={{ width: 210, height: 180, marginRight: 5, marginTop: 5, objectFit: 'cover' }} />
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    <Text style={styles.title}>{points}</Text>
                )}
                <Text style={styles.contents}>{t('Available App Points')}</Text>
                <Text style={styles.content}>{t('Convert your Earn Points into money')}</Text>
                <Text style={styles.contents}>{t('1 Points = 10$')}</Text>
            </View>
            <View>
                <Text style={styles.enterpoint}>{t('ENTER  POINTS')}</Text>
                <View style={styles.points}>
                    <TextInput
                        value={inputValue}
                        placeholder={'Please type points...'}
                        style={{ width: '45%', paddingLeft: 45 }}
                        onChangeText={(text) => dispatch(setInputValue(text))}
                    />
                    <ImageBackground source={require('./img/vertical.png')} style={{ width: 30, height: 53 }}>
                        <FontAwesome name="exchange" size={22} color={COLORS.activeTintColor} style={{ paddingTop: 13, paddingLeft: 5 }} />
                    </ImageBackground>
                    <TextInput
                        value={outputValue + '  $'}
                        placeholder={'Convert to money...'}
                        style={{ width: '40%', marginLeft: 45 }}
                        editable={false}
                    />
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.minimum}>{t('Current  balance in your wallet =')} <Text style={{ color: '#37ad6d' }}>{outputValue} $</Text></Text>
            </View>
            <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <PrimaryButton
                    style={{
                        borderRadius: 10,
                        padding: 8,
                    }}
                    onPress={handleButtonPress}
                    title={t('Convert')}
                    colors={['#25aae1', '#4481eb', '#04befe', '#3f86ed']}
                />
                <PrimaryButton
                    style={{
                        borderRadius: 10,
                        padding: 8,
                    }}
                    onPress={confirmTransactionAndUpdatePoints}
                    title={t('Reedem Now')}
                    colors={['#25aae1', '#4481eb', '#04befe', '#3f86ed']}
                />
            </View>
        </View>
    );
};

export default ReedemScreen;
