import { StyleSheet } from "react-native";
import { COLORS } from "../../common";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: 20,
    },
    card: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#f23557',
        borderRadius: 10,
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        margin: 10
    },
    textPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.activeTintColor
    },
    starRating: {
        color: COLORS.primary,
        lineHeight: 20,
        marginBottom: 10
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
        paddingBottom: 15
    },
    backButtonText: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 15
    },
    wrapper: {
        marginBottom: 20
    }
});