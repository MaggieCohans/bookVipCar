import { StyleProp, View, ViewStyle } from 'react-native'
import React from 'react'
import styles from './styles';
import { Modal } from "react-native";

type ModalProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    animationType?: "none" | "slide" | "fade";
    transparent?: boolean;
    visible?: boolean;
}

export default function index({ children, animationType, transparent, visible, style }: ModalProps) {
    return (
        <Modal animationType={animationType} transparent={transparent} visible={visible} style={style ? style : styles.modal}>
            <View style={styles.modalWrapper}>
                {children}
            </View>
        </Modal>
    )
}

