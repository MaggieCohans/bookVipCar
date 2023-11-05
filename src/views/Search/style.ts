import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../common";
const screenwidth = Dimensions.get('screen').width
const screenheight = Dimensions.get('screen').height
export const styles = StyleSheet.create({

  container: {
    marginTop: 20,
    height: screenheight,
    width: screenwidth,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ScroolView: {
    flex: 1,
    backgroundColor: 'white'
  },
  searchbar: {
    borderWidth: 1,
    flexDirection: 'row',
    width: 350,
    height: 50,
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 15,
  },
  textHeadingTips: {
    color: '#354167',
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    margin: 10,
  },
  listItemTips: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  boxItemTips: {
    borderWidth: 0
  },
  imageItemTips: {
    height: 250,
    width: 370,
    objectFit: 'fill',
    borderRadius: 20,
    margin: 7
  },
  titleItemTips: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  baseCardTips: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderRadius: 10,
    backgroundColor: '#d0d0d0a5',
    padding: 10
  },
  textHeadingVipCar: {
    color: '#f23557',
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    margin: 10,
  },
  TextHeadingBookCar: {
    color: '#354167',
    fontSize: 30,
    fontWeight: '700',
  },
  headingTips: {
    alignItems: 'center',
    color: '#354167',
    fontWeight: '700',
  },
  listCardCar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  baseCardCar: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f23557',
    borderRadius: 20,
    padding: 20,
    margin: 10
  },
  imageCardCar: {
    width: 300,
    height: 150,
    resizeMode: 'contain'
  },
  BookingCard: {
    flexDirection: 'column',
    height: 485,
    alignItems: 'center',
  },
  TextBookingCard: {
    fontSize: 20,
    lineHeight: 30,
    color: '#354167',
    fontWeight: '700',
  },
  LongBar: {
    backgroundColor: "#f23557",
    width: 100,
    height: 5,
    marginBottom: 10,
    marginTop: 10
  },
  ListItemBookingCar: {
    flexDirection: 'row',
    alignItems: "center",
    marginVertical: 10
  },
  CircleBookingCard: {
    backgroundColor: "#f23557",
    width: 15,
    height: 15,
    borderRadius: 15,
    marginHorizontal: 10
  },
  ImageBookingCard: {
    width: 370,
    height: 250,
    resizeMode: 'contain',
    margin: 10,
    backgroundColor: "#354167",
    borderRadius: 20,
  },
  footer: {
    height: 50,
  },
  footerBook: {
    height: 30,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: "#EEEFF1"
  },
  headerImage: {
    width: screenwidth,
    height: 110,
    resizeMode: 'contain',
    margin: 10,
  },
  SearchCar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17
  },
  ImageSearchCar: {
    height: 600,
    width: Dimensions.get('screen').width
  },
  SearchWrap: {
    position: 'absolute',
    width: 300,
    height: 'auto',
    borderBlockColor: 'black',
    backgroundColor: '#857e7ec2',
    borderRadius: 20,
    alignItems: 'center'
  },
  TextHeadingSearch: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.secondary,
    marginTop: 15
  },
  BoxItemSearch: {
    borderWidth: 0,
    width: 350,
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
  TouchItemSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  arrowIcon: {
    padding: 3
  },
  searchIcon: {
    marginRight: 10
  },
  dropdownTextStyles: {
    color: 'black',
    fontSize: 15
  },
  inputStyles: {
    color: 'black', fontSize: 15
  },
  dropdownStyles: {
    backgroundColor: 'white'
  },
  boxButton: {
    marginTop: 20,
  },
  primaryButtonSearchCar: {
    width: 350,
    borderWidth: 0
  },
  commit: {
    backgroundColor: "#354167",
    width: 400,
    height: 400
  },
  headingCommit: {
    color: 'white',
    fontWeight: '700',
    fontSize: 36,
    textTransform: "capitalize",
    marginTop: 20,
    marginLeft: 10
  },
  listTextCommit: {
    justifyContent: 'space-between',
    margin: 20,
    flexDirection: 'column'
  },
  boxTextCommit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  itemTextCommit: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500'
  },
  iconCoinsCommit: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 20,
    padding: 5
  },
  iconClockCommit: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 20,
    padding: 5
  },
  iconStarCommit: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 20,
    padding: 6
  },
  card: {
    margin: 12,
    borderColor: '#f23557',
    borderRadius: 10,
    flexDirection: 'row',
    width: 350,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    margin: 10
  },
  textPrice: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.activeTintColor
  }, textSeat: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "500",
    color: '#3B525F'
  },
  starRating: {
    color: COLORS.primary,
    lineHeight: 20,
    marginBottom: 10
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 20
  }
});