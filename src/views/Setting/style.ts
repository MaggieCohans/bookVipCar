import {StyleSheet} from 'react-native';
import {COLORS} from '../../common';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 20,
  },
  userInfoText: {
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLORS.gray,
    padding: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userMail: {
    fontSize: 12,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    backgroundColor: '#ec8c69',
  },
  option: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3B525F',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  icon: {
    fontSize: 16,
    color: '#3B525F',
  },
});
