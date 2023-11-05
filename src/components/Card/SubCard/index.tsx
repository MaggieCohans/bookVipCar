import { View, Text } from 'react-native'
import React from 'react'
import { SubCardProps } from '../types'
import styles from './styles'

export default function SubCard({ title, titleStyle, subTitle, subTitleStyle, containerStyle, detailSubTitle }: SubCardProps) {
    return (
        <View style={containerStyle && containerStyle}>
            <Text style={titleStyle ? titleStyle : styles.title}>{title}</Text>
            <View style={subTitleStyle ? subTitleStyle : styles.subTitle}>
                <Text>{subTitle}</Text>
                {detailSubTitle && detailSubTitle}
            </View>
        </View>
    )
}