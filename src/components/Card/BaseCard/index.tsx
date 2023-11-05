import { View, Text, Image } from 'react-native'
import React from 'react'
import { CardProps } from '../types'
import { PrimaryButton } from '../../Button'
import styles from './styles'

export default function BaseCard({ title, titleStyle, titleButton, urlImage, imgStyle, children, containerStyle, onPressButton }: CardProps) {
    return (
        <View style={containerStyle ? containerStyle : styles.container}>
            {urlImage && <Image source={{ uri: urlImage }} style={imgStyle ? imgStyle : styles.imageStype} />}
            {title && <Text style={titleStyle ? titleStyle : styles.titleStyle}>{title}</Text>}
            {children && children}
            {titleButton && <PrimaryButton title={titleButton} backgroundColor='#ed6ea0' onPress={onPressButton} />}
        </View>
    )
}