import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../common';

const styles = StyleSheet.create({
  splash: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
    backgroundColor: COLORS.gray,
  },
  logo: {
    width: 335,
    height: 104,
  },
  content: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default styles;
