import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextProps } from './types'
import { FONTS } from '../../assets/fonts'

export default function PrimaryText({ content, color, margin, textAlign, style }: TextProps) {
    return (
        <Text style={style ? style : [styles.primaryText, { color: color, margin: margin, textAlign: textAlign }]}>{content}</Text>
    )
}

const styles = StyleSheet.create({
    primaryText: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: FONTS.primary,
    }
})