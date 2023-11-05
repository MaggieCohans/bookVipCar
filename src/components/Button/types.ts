import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
    title: string;
    onPress?: () => void;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    width?: number;
    height?: number;
    backgroundColor?: string;
};

export type PrimaryButtonProps = ButtonProps & {
    colors?: string[];
    primaryButtonStyle?: StyleProp<ViewStyle>;
}