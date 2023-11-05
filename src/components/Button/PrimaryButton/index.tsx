import React from 'react'
import { PrimaryButtonProps } from '../types';
import BaseButton from '../BaseButton';
import LinearGradient from 'react-native-linear-gradient';
import { SecondaryText } from '../../Text';

export default function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <LinearGradient
            colors={props.colors ? props.colors : ['#ed6ea0', '#ec8c69', '#f7186a', '#fbb03b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={props.primaryButtonStyle ? props.primaryButtonStyle : { borderRadius: 10 }}
        >
            <BaseButton
                {...props}
                children={props.children ? props.children : <SecondaryText content={props.title} color='#fff' />}
                style={props.style ? props.style : { borderWidth: 0 }}
            />
        </LinearGradient>
    );
}