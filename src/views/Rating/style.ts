import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 20,
    backgroundColor: 'white',
},
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 18,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#f23557',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center', 
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    paddingBottom:15
},
backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
},
});
export default styles;
