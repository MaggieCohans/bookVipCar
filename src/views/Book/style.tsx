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
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 0
    },
    backButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    listTabContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    listTab: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderColor: '#f23557',
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
        color: '#f23557',
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
    },
    itemLogo: {
        padding: 5,
    },
    itemImage: {
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemFare: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    fare: {
        fontWeight: 'bold',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        right: -20,
    },
});