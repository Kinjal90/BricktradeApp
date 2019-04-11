import { Platform, StyleSheet, Dimensions } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainBack: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 26,
    color: colors.black,
    fontFamily: 'WorkSans-SemiBold',
    marginLeft: 20,
    marginRight: 20,
    letterSpacing: -0.8,
    lineHeight: 40,
  },
  subTitle: {
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'WorkSans-Medium',
    fontSize: 14,
    color: '#979797',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.3,
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
    flex: 1,
    fontSize: 26,
    color: colors.black,
    fontFamily: 'WorkSans-SemiBold',
    letterSpacing: -0.8,
    lineHeight: 40,
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
    fontFamily: 'WorkSans-Medium',
    fontSize: 14,
    color: '#979797',
    marginTop: 10,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.3,
  },
  transferInnerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  transfersubTitle: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 18,
    color: '#757D98',
    fontStyle: 'normal',
  },
  transferInnersubTitle: {
    fontSize: 10,
    color: '#979797',
    marginTop: 13,
    marginLeft: 10,
  },
  receiverLeftContainer: {
    flex: 1,
    marginTop: 10,
  },
  receiverRightContainer: {
    marginTop: 10,
  },
  receiverTitle: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 14,
    color: '#979797',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.3,
  },
  transferLeftTitle: {
    marginLeft: 10,
    fontFamily: 'WorkSans-Medium',
    fontSize: 14,
    color: '#979797',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.3,
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
  buttonTouchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FF5050',
    padding: 13,
    fontSize: 17,
    fontFamily: 'WorkSans-Medium',
    lineHeight: 20,
    letterSpacing: -0.3,
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
