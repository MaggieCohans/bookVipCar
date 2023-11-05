import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from "react-native";
import { styles } from "./style";
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'; import { BookScreenProps } from "../../navigator/type";
import { NormalText } from "../../components/Text";
import { useTranslation } from 'react-i18next';
interface BookHistoryItem {
    id: string;
    destination: string;
    status: string;
    date: string;
    fare: number;
}


const BookScreen = ({ navigation }: BookScreenProps) => {
    const [activeStatus, setActiveStatus] = useState<string>('History');
    const { t, i18n } = useTranslation();
    const listTab = [
        {
            status: t('History')
        },
        {
            status: t('Ongoing')
        },
        {
            status: t('Scheduled')
        },
    ];

    const data: BookHistoryItem[] = [
        {
            id: '1',
            destination: 'CVPM Quang Trung',
            status: t('History'),
            date: '2023-08-15',
            fare: 125000,
        },
        {
            id: '2',
            destination: '71 Tan Lap 2',
            status: t('Ongoing'),
            date: '2023-08-14',
            fare: 100000,
        },
        {
            id: '3',
            destination: 'Toa nha 8',
            status: t('Scheduled'),
            date: '2023-08-16',
            fare: 150000,
        },
    ];
    const [dataList, setDataList] = useState<BookHistoryItem[]>(data);
    const setStatusFilter = (status: string) => {
        if (status !== t('History')) {
            setDataList(data.filter(e => e.status.includes(status)));
        } else {
            setDataList(data);
        }
        setActiveStatus(status);
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <FontAwsomeIcon name="arrow-left" size={20} style={{ marginRight: 5 }} />
                <NormalText style={styles.backButtonText} content={t('Book History')} />
            </TouchableOpacity>

            <View style={styles.listTab}>
                {listTab.map(e => (
                    <TouchableOpacity
                        key={e.status}
                        style={[
                            styles.btnTab,
                            activeStatus === e.status && styles.btnTabActive,
                        ]}
                        onPress={() => setStatusFilter(e.status)}
                    >
                        <NormalText
                            style={[
                                styles.textTab,
                                activeStatus === e.status && styles.textTabActive,
                            ]}
                            content={e.status}

                        />
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView>
                {dataList.map((item, index) => (
                    <OptionItem
                        key={index}
                        title={item.destination}
                        icon={
                            <Image
                                style={styles.itemImage}
                                source={{
                                    uri: 'https://www.bookvipcar.com/image/hondacivic.png',
                                }}
                            />
                        }
                        subtitle={item.date}
                        fare={formatCurrency(item.fare)}
                    />
                ))}
            </ScrollView>
        </View>

    );
};

interface OptionItemProps {
    title: string;
    icon: JSX.Element;
    subtitle: string;
    fare: string;
}

const OptionItem: React.FC<OptionItemProps> = ({
    title,
    icon,
    subtitle,
    fare,
}) => (
    <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.itemLogo}>{icon}</View>
        <View style={styles.itemBody}>
            <NormalText style={styles.itemName} content={title} />
            <NormalText content={subtitle} />
        </View>
        <View style={styles.itemFare}>
            <NormalText style={styles.fare} content={fare} />
        </View>
    </TouchableOpacity>
);

export default BookScreen;

