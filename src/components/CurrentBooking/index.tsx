import { View, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { NormalText, PrimaryText, SecondaryText } from '../Text';
import { COLORS } from '../../common';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CurrentBooking() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.boxHeader]}>
                <View>
                    <SecondaryText content='Xe đang đến' color={'#fff'} />
                    <NormalText content='Thủ Đức' color={'#fff'} />
                </View>
                <SecondaryText content='4 phút' color={'#fff'} />
            </View>
            <View style={[styles.box, styles.boxBody]}>
                <View>
                    <Image source={{ uri: "https://www.bookvipcar.com/image/mec_c63.png" }} width={50} height={50} style={styles.img} />
                    <View style={styles.boxContent}>
                        <NormalText content='Truong Van Dat • 5.0' color={COLORS.primary} />
                        <NormalText content='★' style={styles.star} />
                    </View>
                </View>
                <View>
                    <PrimaryText content='51G-123.45' color={COLORS.primary} />
                    <NormalText content='Trắng -Mescedes' color={COLORS.primary} />
                </View>
            </View>
            <View style={[styles.box, styles.boxFooter]}>
                <TextInput placeholder='Chat với tài xế' placeholderTextColor={COLORS.primary} style={styles.textInput} />
                <Icon name='phone-alt' size={26} color={COLORS.primary} solid style={styles.icon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ccc',
        margin: 10,
        borderRadius: 10,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    boxHeader: {
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    boxBody: {
        backgroundColor: '#fff',
        alignItems: 'stretch',
        paddingBottom: 0
    },
    boxFooter: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    img: {
        objectFit: 'contain',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc'
    },
    star: {
        color: '#FBD700',
        fontSize: 20,
        marginHorizontal: 5
    },
    icon: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.primary,
        padding: 10,
        marginHorizontal: 5
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#ddd',
        color: COLORS.primary,
        padding: 10
    },
    boxContent: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});