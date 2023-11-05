import { View, StyleProp, TextStyle, TextInput, ViewStyle, StyleSheet, Image, ImageStyle } from 'react-native'
import React from 'react'
import SecondaryText from '../Text/SecondaryText';
import NormalText from '../Text/NomalText';
import { BaseButton } from '../Button';

type TextInputProps = {
    placeholder: string,
    placeholderStyle?: StyleProp<TextStyle>,
    icon?: string,
    iconStyle?: StyleProp<ImageStyle>;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

export default function index({ placeholder, placeholderStyle, icon, iconStyle, style, children }: TextInputProps) {
    return (
        <View style={style ? style : styles.container}>
            {children && children}
            <TextInput placeholder={placeholder} style={placeholderStyle && placeholderStyle} />
            {icon &&
                <BaseButton title='Icon' width={20} height={20} style={{ borderWidth: 0 }}>
                    <Image
                        source={{ uri: icon }}
                        style={iconStyle ? iconStyle : styles.icon}
                    />
                </BaseButton>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        width: '100%',
        padding: 10,
    },
    icon: {
        width: 24,
        height: 24,
    }
})