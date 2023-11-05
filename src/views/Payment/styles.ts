import { StyleSheet } from "react-native";
import { COLORS } from "../../common";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    stepper: {
        paddingVertical: 30,
    },
    infor: {
        marginTop: 20,
        paddingHorizontal: 14
    },
    lable: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5
    },
    lableText: {
        color: COLORS.secondary,
        fontSize: 20,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        color: COLORS.primary,
        padding: 8,
    },
    utilities: {
        fontSize: 28,
        color: COLORS.secondary,
        textAlign: 'center',
        marginVertical: 10
    },
    btn: {
        marginVertical: 20,
        borderRadius: 10,
    },
    checkBox: {
        marginVertical: 10
    },
    boxInfo: {
        padding: 10,
        flexDirection: 'row',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10
    },
    textBoxTitle: {
        color: COLORS.secondary,
        fontWeight: '800',
        fontSize: 16,
        marginRight: 10
    },
    box: {
        marginVertical: 10,
        marginHorizontal: 10,
        rowGap: 4
    },
    TouchItemSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
    },
    TextInputItemSearch: {
        color: 'black',
        marginLeft: 10,
        fontSize: 15
    },
    CalendarItemSearch: {
        padding: 12,
        marginLeft: 15
    },
    BoxItemSearch: {
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boxPay: {
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
    }
});