import { Platform, StyleSheet, Dimensions } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainBack: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: colors.black,
  },
  subTitle: {
    fontSize: 15,
    color: colors.grey400,
  },
  image: {
    alignSelf: 'center',
    marginTop: 50,
    height: 100,
    width: 100,
  }
});

export default styles;
