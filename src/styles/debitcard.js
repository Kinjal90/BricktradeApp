import { Platform, StyleSheet, Dimensions } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainBack: {
    width: '100%',
    height: '100%',
  },
  container: {
    // position: 'absolute',
    // bottom: 0,
  },
  bottomModal: {
    // justifyContent: "flex-end",
    // margin: 0,
    // backgroundColor: colors.red100,
  },
  inputModexBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dfdde8',
    width: '80%',
    // padding: 5,
    // height: 40,
    justifyContent: 'center', 
  },
  modelTextInput: {
    color: '#747b90',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 5,
    padding: 10,
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
  innerMedelContainer: {
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: 20,
  },
  headingtext: {
    fontSize: 14,
    color: colors.black,
    textAlign: 'left',
    marginBottom: 10,
    fontFamily: 'WorkSans-Regular',
    fontWeight: '600',
    fontStyle: 'normal',
    marginTop: 5,
  },
  headingLighttext: {
    marginVertical: 6,
    fontSize: 14,
    color: '#bdbdbd',
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 15,
  },
  selectChatFlatImage: {
    height: 60,
    width: 60,
    marginRight: 8,
    // alignItems: 'center',
  },
  selectChatFlatText: {
    color: colors.white,
    fontSize: 10,
    position: 'absolute',
    bottom: 3,
    // left: 3,
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
    borderColor: colors.pink300,
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
    marginTop: 20,
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
