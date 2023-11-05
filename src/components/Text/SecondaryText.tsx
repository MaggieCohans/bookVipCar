import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextProps } from './types'
import { FONTS } from '../../assets/fonts'

export default function SecondaryText({ content, color, margin, textAlign, style }: TextProps) {
    return (
        <Text style={style ? style : [styles.secondaryText, { color: color, margin: margin, textAlign: textAlign }]}>{content}</Text>
    )
}

const styles = StyleSheet.create({
    secondaryText: {
        fontSize: 18,
        fontFamily: FONTS.primary,
        fontWeight: '700',
    }
})