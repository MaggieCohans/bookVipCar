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
    headingStyle: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight:'bold',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
        paddingBottom:15
    },
    backButtonText: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 10
    },
  
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        // borderRadius: 45,
        borderBottomWidth:0.8,
        //marginBottom:12
        
    },
    itemLogo: {
        padding: 5,
    },
    itemImage: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:15
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    itemName: {
        fontWeight: "500",
        fontSize: 16,
    },
    itemFare: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    fare: {
        fontWeight: "500",
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

  });