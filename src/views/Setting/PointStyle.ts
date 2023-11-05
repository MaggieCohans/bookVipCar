import { COLORS } from '../../common/index';
import {
    StyleSheet,
    Dimensions,
} from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: 20,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    notificationContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    exchangeContainer: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 11,
        margin: 5,
        marginLeft: 13,
        borderColor: '#f23557',
        borderRadius: 10,
        width: 350,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 5,
        backgroundColor: 'white',
    },
    notification: {
        flex: 1,
        padding: 5,
        marginLeft: 5
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    content: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: '500'
    },
    deleteButton: {
        marginLeft: 16,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
    },
    backButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    listTabContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    listTab: {
        marginTop: 15,
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderColor: '#1E90FF',
        padding: 5,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
    },
    textTab: {
        fontSize: 16,
    },
    btnTabActive: {
        borderBottomWidth: 2,
    },
    textTabActive: {
        color: '#1E90FF',
    },
    primary: {
        padding: 5,
        width: 230,
        borderRadius: 15,
        alignItems: 'center',
        margin: 11
    },
});
