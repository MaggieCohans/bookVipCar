import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#354167',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    form: {
        marginTop: 200,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        borderWidth: 0,
        width: 140,
    },
    titleSignin: {
        fontSize: 14,
        color: '#4C5B7D',
        textDecorationLine: 'underline'
    },
    isActive: {
        borderBottomWidth: 2,
    },
    mV10: {
        marginVertical: 10
    },
    hr: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc'
    },
    textHr: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginHorizontal: 8
    }
});