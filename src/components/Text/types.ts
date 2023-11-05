import { StyleProp, TextStyle } from "react-native";

export type TextProps = {
    content: string;
    color?: string;
    margin?: number;
    textAlign?: "auto" | "left" | "right" | "center" | "justify";
    style?: StyleProp<TextStyle>;
}