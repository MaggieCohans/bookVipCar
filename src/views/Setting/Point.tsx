import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useTranslation } from 'react-i18next';
import { Image } from "react-native-ui-lib";
import { COLORS } from "../../common";
import { styles } from './PointStyle';
import LinearGradient from 'react-native-linear-gradient';
import { getPoints, getHistoryPoints } from '../../api/index';
interface Point {
    id: string;
    title: string;
    content: string;
    status: string;
    pointChange: string;
    currentPoints: number;
    lifetimeScore: number;
}

interface Props {
    navigation: any;
}

const PointScreen: React.FC<Props> = ({ navigation }) => {

    const { t } = useTranslation();
    const [notificationList, setNotificationList] = useState<Point[]>([]);
    const [activeStatus, setActiveStatus] = useState<string>('History');
    const [originalList, setOriginalList] = useState<Point[]>([]);
    const [points, setPoints] = useState<number>(0);
    const [lifetimeScore, setLifetimeScore] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initialize isLoading state

    const listTab = [
        {
            status: t('History'),
        },
        {
            status: t('Earn more')
        },
        {
            status: t('Rewards'),
        },
    ];


    const fetchPoints = () => {
        getPoints()
            .then((response) => {
                const data: Point[] = response.data;
                if (Array.isArray(data) && data.length > 0) {
                    const firstItem = data[0];
                    setPoints(firstItem.currentPoints);
                    setLifetimeScore(firstItem.lifetimeScore);
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
    const fetchNotifications = () => {
        getHistoryPoints()
            .then((response) => {
                const data: Point[] = response.data;
                if (Array.isArray(data) && data.length > 0) {
                    const updatedData = data.map((item) => ({
                        ...item,
                        pointChange: `${item.pointChange}`,
                    }));
                    setNotificationList(updatedData);
                    setOriginalList(updatedData);
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
        fetchNotifications();
        fetchPoints();
    }, []);

    const filterNotifications = (status: string) => {
        if (status === t('History')) {
            setNotificationList(originalList.filter((item) => item.status === t('History')));
        } else if (status === t('Earn more')) {
            setNotificationList(originalList.filter((item) => item.status === t('Earn more')));
        } else if (status === t('Rewards')) {
            setNotificationList(originalList.filter((item) => item.status === t('Rewards')));
        }
        setActiveStatus(status);
    };
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome5Icon name="arrow-left" size={20} style={{ marginRight: 5 }} />
                <Text style={styles.backButtonText}>{t('Earn Points')}</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', marginTop: 15, alignItems: 'center', height: 220 }}>
                <ImageBackground
                    source={require('./img/celebra.png')}
                    style={{ width: 400, height: 217, justifyContent: 'center', marginTop: 15, alignItems: 'center', }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, color: COLORS.secondary }}>{t('CURRENT POINTS')}</Text>
                    <LinearGradient
                        colors={['#25aae1', '#4481eb', '#04befe', '#3f86ed']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.primary}
                    >
                        <Text style={{ color: 'white', fontSize: 53, fontWeight: '700' }}>{points}</Text>
                    </LinearGradient>
                    <View style={{ backgroundColor: '#E0FFFF', padding: 9, borderRadius: 7 }}>
                        <Text style={{ color: '#1E90FF', fontWeight: '500' }}>{t('Lifetime score')} {lifetimeScore}</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.exchangeContainer}>
                <Image source={require('./img/exchange-coin.png')} style={{ width: 30, height: 30, marginRight: 5, resizeMode: 'cover' }} />
                <TouchableOpacity style={styles.notification} onPress={() => navigation.navigate('ReedemPoint')} >
                    <Text style={styles.title}>{t('Reedem Points')}</Text>
                    <Text style={styles.content}>{t('Convert your earn point into money')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.deleteButton}
                >
                    <EntypoIcon name="chevron-right" size={20} color={'#1E90FF'} />
                </TouchableOpacity>
            </View>

            <View style={styles.listTab}>
                {listTab.map((tab) => (
                    <TouchableOpacity
                        key={tab.status}
                        style={[
                            styles.btnTab,
                            activeStatus === tab.status && styles.btnTabActive,
                        ]}
                        onPress={() => filterNotifications(tab.status)}
                    >
                        <Text
                            style={[
                                styles.textTab,
                                activeStatus === tab.status && styles.textTabActive,
                            ]}
                        >
                            {tab.status}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {notificationList.map((item) => (
                <View key={item.id} style={styles.notificationContainer}>
                    <Image source={require('./img/exchange-coin.png')} style={{ width: 30, height: 30, marginRight: 5, resizeMode: 'cover' }} />
                    <TouchableOpacity style={styles.notification}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.content}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ marginLeft: 5, fontWeight: '500', color: '#37ad6d' }}>{item.pointChange}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}

        </ScrollView>
    );
};

export default PointScreen;
