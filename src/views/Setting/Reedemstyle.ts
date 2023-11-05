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
    title: {
        fontSize: 35,
        fontWeight: "700",
    },
    content: {
        marginTop: 8,
        fontSize: 15,
        fontWeight: '600',
        color: '#A9A9A9'
    },
    contents: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "700",
        paddingLeft:15
    },
    enterpoint: {
        marginTop: 8,
        fontSize: 14,
        color: '#A9A9A9',
        fontWeight: '700',
        paddingLeft:15
    },
    minimum: {
        color: COLORS.activeTintColor,
        marginTop: 9,
        fontSize: 15,
        fontWeight: '600',
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
    points:{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 2,
        margin: 5,
        marginLeft:13,
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
        backgroundColor:'white',
    }
});
