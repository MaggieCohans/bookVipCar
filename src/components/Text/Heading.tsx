import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { TextProps } from './types'
import { FONTS } from '../../assets/fonts'

export default function Heading({ content, color, margin, textAlign, style }: TextProps) {
    return (
        <Text style={style ? style : [styles.heading, { color: color, margin: margin, textAlign: textAlign }]}>{content}</Text >
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 36,
        fontWeight: '700',
        fontFamily: FONTS.primary,
    }
})