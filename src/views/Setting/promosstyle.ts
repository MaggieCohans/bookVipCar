import { StyleSheet } from "react-native";
import { COLORS } from '../../common';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20,
        backgroundColor: "#F7F7F7",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },

    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    promotionContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#f23557'

    },
    promotionImage: {
        marginLeft: 5,
        height: 70,
        width: 70,
        borderRadius: 35,

    },
    promotionDetails: {
        flex: 1,
        padding: 5,

    },
    promotionTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    promotionDescription: {
        marginTop: 5,
        fontSize: 14,
    },
    discountContainer: {
        flexDirection: "row",
        alignItems: "center",

        marginBottom: 20
    },
    discountInput: {
        flex: 1,
        paddingHorizontal: 10,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 10,
        color: COLORS.primary,
        padding: 8,
    },
});
