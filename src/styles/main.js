import { Platform, StyleSheet, Dimensions } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
 },
});

export const loginButton = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
  container: {
    height: Platform.OS === 'ios' ? 40 : 45,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.pink300,
    justifyContent: 'center',
  },
});

export default styles;
