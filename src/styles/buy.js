import { Platform, StyleSheet, Dimensions } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainBack: {
    width: '100%',
    height: '100%',
    // paddingTop: 50,
  },
  title: {
    // marginTop: 20,
    fontSize: 22,
    color: colors.black,

    fontFamily: 'WorkSans-Regular',
    fontWeight: '600',
    fontStyle: 'normal',
    marginLeft: 20,
    marginRight: 20,
  },
  subTitle: {
    fontSize: 15,
    color: '#757D98',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  innerContainer: {
    backgroundColor: colors.white,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  transferContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  transferMaintitle: {
    marginTop: 20,
    fontSize: 22,
    color: colors.black,
    flex: 1,
    fontFamily: 'WorkSans-Regular',
    fontWeight: '600',
    fontStyle: 'normal',
  },
  transferEdit: {
    marginTop: 20,
    fontSize: 13,
    color: '#FF5050',
  },
  leftContainer: {
    flex: 1,
  },
  transferTitle: {
    fontSize: 14,
    color: '#757D98',
    marginTop: 15,
  },
  transferInnerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  transfersubTitle: {
    fontSize: 18,
    color: '#676E92',
    marginTop: 10,
  },
  transferInnersubTitle: {
    fontSize: 10,
    color: '#757D98',
    marginTop: 13,
    marginLeft: 10,
  },
  transferInnerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  receiverLeftContainer: {
    flex: 1,
    marginTop: 10,
  },
  receiverRightContainer: {
    marginTop: 10,
  },
  receiverTitle: {
    fontSize: 14,
    color: '#757D98',
    marginTop: 5,
    marginLeft: 10,
  },
  transferLeftTitle: {
    fontSize: 14,
    color: '#757D98',
    marginTop: 15,
    marginLeft: 10,
  },
  image: {
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
  buttonOuterContainer: {
    height: 48,
    width: width - 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonContainer: {
    width: width - 100 - 4,
    height: 48 - 4,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FF5050',
    padding: 13,
    fontSize: 16,
  },
  buttonMainContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  arrow: {
    alignSelf: 'center',
    height: 25,
    width: 25,
  },
});

export default styles;
