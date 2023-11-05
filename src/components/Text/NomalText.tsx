import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextProps } from './types'
import { FONTS } from '../../assets/fonts'

export default function NormalText({ content, color, margin, textAlign, style }: TextProps) {
    return (
        <Text style={style ? style : [styles.normalText, { color: color, margin: margin, textAlign: textAlign }]}>{content}</Text>
    )
}

const styles = StyleSheet.create({
    normalText: {
        fontSize: 18,
        fontFamily: FONTS.primary,
    }
})