import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert, Image, Clipboard } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { PromosScreenProps } from "../../navigator/type";
import { PrimaryButton } from '../../components/Button';
import { useTranslation } from 'react-i18next';
import { styles } from './promosstyle';
import { NormalText } from "../../components/Text";
import { getPromotions } from "../../api";

interface Promotion {
    id: string;
    promotion_name: string;
    description: string;
    end_date: Date;
    coupon_code: string;
    discount_value: string;
}

const PromotionScreen: React.FC<PromosScreenProps> = ({ navigation }) => {
    const [discountCode, setDiscountCode] = useState("");
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const { t } = useTranslation();

    const handleApplyDiscount = () => {
        const validPromotion = promotions.find((item) => item.coupon_code === discountCode);

        if (validPromotion) {
            Alert.alert(t("Notification"),
                t("Applied discount code successfully"),);
        } else {
            Alert.alert(t("Notification"),
                t("Invalid discount code"),);

        }
    };


    const handleShowCouponCode = (couponCode: string) => {
        Alert.alert(t("Discount code"), `${t("Your discount code")}: ${couponCode}`, [{
            text: t("Get code"),
            onPress: () => {
                Clipboard.setString(couponCode);
                Alert.alert(t("Notification"), t("Copied discount code to clipboard"));
            },
        },
        {
            text: t("Close"),
            onPress: () => { },
            style: "cancel",
        },
        ]);
    };

    useEffect(() => {
        getPromotions()
            .then((response) => {
                const data: Promotion[] = response.data;
                setPromotions(data);
            })
            .catch((error) => {
                console.error('Error fetching promotions:', error);
                Alert.alert('Error fetching promotions');
            });
    }, []);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome5Icon name="arrow-left" size={20} style={{ marginRight: 5 }} />
                <NormalText style={styles.backButtonText} content={t('Promos')} />
            </TouchableOpacity>

            <View style={styles.discountContainer}>
                <TextInput
                    style={styles.discountInput}
                    placeholder={t('Enter your discount code')}
                    value={discountCode}
                    onChangeText={(text) => setDiscountCode(text)}
                />
                <PrimaryButton
                    onPress={handleApplyDiscount}
                    title={t("Apply")}
                >
                </PrimaryButton>
            </View>

            <FlatList
                data={promotions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.promotionContainer}
                        onPress={() => handleShowCouponCode(item.coupon_code)}
                    >
                        <Image
                            source={{
                                uri: 'https://previews.123rf.com/images/houbacze/houbacze1701/houbacze170100363/71044716-red-easy-vector-illustration-isolated-paper-bubble-banner-promo-this-element-is-well-adapted-for.jpg',
                            }}
                            style={styles.promotionImage}
                        />
                        <View style={styles.promotionDetails}>
                            <NormalText style={styles.promotionTitle} content={` ${item.promotion_name}  -${item.discount_value} `} />
                            <NormalText style={styles.promotionDescription} content={item.description} />
                            <NormalText style={styles.promotionDescription} content={`${t("Expiration date")}: ${item.end_date}`} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default PromotionScreen;
