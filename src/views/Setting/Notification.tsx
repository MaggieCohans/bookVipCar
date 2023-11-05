import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useTranslation } from 'react-i18next';
import { NotificationScreenProps } from "../../navigator/type";
import { styles } from './notificationstyle';

interface Notification {
    id: string;
    title: string;
    content: string;
    isImportant: boolean;
}

const notifications: Notification[] = [
    {
        id: "1",
        title: "Đơn hàng đã được hủy",
        content: "Nội dung",
        isImportant: true,
    },
    {
        id: "2",
        title: "Thanh toán đơn hàng thành công",
        content: "Chi tiết",
        isImportant: true,
    },
    {
        id: "3",
        title: "Thông báo mã khuyến mãi 1",
        content: "Mã khuyến mãi 1",
        isImportant: false,
    },
    {
        id: "4",
        title: "Ưu đãi dành riêng cho bạn",
        content: "Mã khuyến mãi 2",
        isImportant: false,
    },
];


const NotificationScreen: React.FC<NotificationScreenProps> = ({ navigation }) => {
    const { t } = useTranslation();
    const [notificationList, setNotificationList] = useState(notifications);
    const [activeStatus, setActiveStatus] = useState<string>('All');

    const listTab = [
        {
            status: t('All')
        },
        {
            status: t('Important')
        },
        {
            status: t('Promos')
        },
    ];

    const handleDeleteNotification = (id: string) => {
        const updatedNotifications = notificationList.filter(
            (item) => item.id !== id
        );
        setNotificationList(updatedNotifications);
    };

    const filterNotifications = (status: string) => {
        if (status === t('All')) {
            setNotificationList(notifications);
        } else if (status === t('Important')) {
            setNotificationList(notifications.filter((item) => item.isImportant));
        } else if (status === t('Promos')) {
            setNotificationList(notifications.filter((item) => !item.isImportant));
        }
        setActiveStatus(status);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome5Icon name="arrow-left" size={20} style={{ marginRight: 5 }} />
                <Text style={styles.backButtonText}>{t('Notification')}</Text>
            </TouchableOpacity>

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
                    {item.isImportant ? (
                        <EntypoIcon name="bell" size={24} color={'gray'} style={{ marginRight: 10 }} />
                    ) : (
                        <FontAwesome5Icon name="gift" size={24} color={'gray'} style={{ marginRight: 10 }} />
                    )}
                    <TouchableOpacity style={styles.notification}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.content}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleDeleteNotification(item.id)}
                        style={styles.deleteButton}
                    >
                        <EntypoIcon name="cross" size={20} />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

export default NotificationScreen;
