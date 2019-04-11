import { Platform, StyleSheet, Dimensions } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainBack: {
    width: '100%',
    height: '100%',
  },
  bottomModal: {
    margin: 0,
  },
  outerScrollContainer: {
    flex: 1,
  },
  scrollContainer: {
    position: 'absolute',
    bottom: 0,
  },
  innerScrollContainer: {
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  inputModexBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dfdde8',
    width: '95%',
    justifyContent: 'center', 
  },
  modelTextInput: {
    marginLeft: 5,
    padding: 2,
    fontFamily: 'WorkSans-Medium',
    fontSize: 20,
    color: '#757D98',
    fontStyle: 'normal',
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
  headingtext: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 14,
    color: '#192f3d',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.3,
  },
  headingLighttext: {
    marginVertical: 6,
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'WorkSans-Medium',
    fontSize: 14,
    color: '#979797',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.3,
  },
  selectChatFlatImage: {
    height: 60,
    width: 60,
    marginRight: 8,
  },
  selectChatFlatText: {
    color: colors.white,
    fontSize: 10,
    position: 'absolute',
    bottom: 3,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  groupContainerStyle: {
    width: '100%',
    marginLeft: -6,
    height: 50,
    borderWidth: 0,
    borderRadius: 0,
  },
  groupButtonStyle: {
    borderWidth: 0,
    backgroundColor: colors.grey300,
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  groupSelectedButtonStyle: {
    borderWidth: 2,
    backgroundColor: colors.white,
    borderColor: '#FF5050',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  groupInnerBorderStyle: {
    color: colors.transparent,
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
  transactionDownload: {
    marginTop: 20,
    fontSize: 13,
    color: '#FF5050',
    marginBottom: 5,
  },
  transactionEdit: {
    fontSize: 13,
    color: '#FF5050',
  },
  leftContainer: {
    flex: 1,
  },
  leftDownloadContainer: {
    alignItems: 'flex-end',
  },
  transferTitle: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 14,
    color: '#979797',
    marginTop: 15,
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
  imageBack: {
    backgroundColor: colors.white,
    borderRadius: 150,
    alignSelf: 'center',
    marginTop: 20,
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratesImage: {
    alignSelf: 'center',
    height: 110,
    width: 110,
  },
  closebtn: {
    height: 20,
    width: 20,
    alignSelf: 'flex-end',
  },
  image: {
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
  cls_image: {
    height: 20,
    width: 20,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    width: width - 100 - 4,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonModelContainer: {
    alignItems: 'center',
    backgroundColor: colors.transparent,
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
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonModelText: {
    textAlign: 'center',
    color: colors.white,
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
  createButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
});

export const resetButtonStyles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#bfc3c8',
    fontWeight: 'bold',
  },
  container: {
    height: Platform.OS === 'ios' ? 40 : 45,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
  },
});

export default styles;
