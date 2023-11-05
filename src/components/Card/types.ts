import React from "react";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export type CardProps = {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    urlImage?: string;
    imgStyle?: StyleProp<ImageStyle>;
    titleButton?: string;
    button?: React.ReactNode;
    children?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    onPressButton?: () => void;
}

export type SubCardProps = {
    title: string;
    titleStyle?: StyleProp<TextStyle>;
    subTitle?: string;
    subTitleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    detailSubTitle?: React.ReactNode;
}