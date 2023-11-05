import React,{ useState,useEffect } from 'react'
import {ScrollView,Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LanguageScreenProps } from '../../navigator/type'
import {styles} from './languagestyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NormalText } from '../../components/Text';

const LanguageScreen = ({ navigation }:LanguageScreenProps) => {
    const rightIconComponent = <Icon name="language" size={15} color={'#3B525F'} />;
    const { t, i18n } = useTranslation();
    const setLanguage =(code:any) => {
        AsyncStorage.setItem('LANG', code);
        return i18n.changeLanguage(code);
    };
    const lang = [
        {id: '1',
        shortform: 'en',
        longform: t('English'),
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
        onPress: () => setLanguage('en')
    },
        {id: '2',shortform: 'jp',
        longform: t('Japanese'),
        img: 'https://i.natgeofe.com/k/988c4715-bba9-4697-ae66-9ded8cfabed3/japan-flag.gif',
        onPress: () => setLanguage('jp')
    },
        {id: '3',shortform: 'vi',
        longform:t('Vietnamese'),
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png',
        onPress: () => setLanguage('vi'),
    },
      ];
    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
        >
            <Icon name="arrow-left" size={20} style={{ marginRight: 5 }} />
            <NormalText content={t('Language Setting')} style={styles.backButtonText}/>
        </TouchableOpacity>
        <ScrollView>
            {lang.map((item, index) => (
                <OptionItem
                    key={index}
                    title={item.longform}
                    icon={
                        <Image
                            style={styles.itemImage}
                            source={{
                                uri: item.img,
                            }}
                        />
                    }
                    subtitle={item.shortform}
                    onPress={item.onPress}
                    fare={rightIconComponent}
                />
            ))}
        </ScrollView>
    </View>
    )
}
interface OptionItemProps {
    title: string;
    icon: JSX.Element;
    subtitle: string;
    onPress: () => void;
    fare: JSX.Element;    
}

const OptionItem: React.FC<OptionItemProps> = ({
    title,
    icon,
    subtitle,
    onPress,
    fare,
    
  
}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <View style={styles.itemLogo}>{icon}</View>
        <View style={styles.itemBody}>
            <NormalText style={styles.itemName} content={title}/>
            <NormalText  style={{ textTransform: 'uppercase'}} content={subtitle}/>
        </View>
        <View style={styles.itemFare}>
            <Text style={styles.fare}>{fare}</Text>
        </View>
    </TouchableOpacity>
);

export default LanguageScreen