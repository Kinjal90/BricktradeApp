import { Platform, StyleSheet, Dimensions } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
 },
 bottomModal: {
  justifyContent: "flex-end",
  margin: 0,
},
container: {
},
innerContainer: {
  borderRadius: 8,
  alignItems: 'flex-start',
  backgroundColor: colors.white,
  padding: 20,
},
closebtn: {
  height: 20,
  width: 20,
  alignSelf: 'flex-end',
},
image: {
  height: 20,
  width: 20,
  alignSelf: 'flex-end',
},
headingtext: {
  fontSize: 14,
  color: colors.black,
  textAlign: 'left',
  marginBottom: 5,
},
bottomContainer: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  width: '100%',
},
groupContainerStyle: {
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
}
});

export const homeButton = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
  container: {
    height: Platform.OS === 'ios' ? 40 : 45,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.pink300,
    justifyContent: 'center',
  },
});

export const applyButtonStyles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
  container: {
    height: Platform.OS === 'ios' ? 40 : 45,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: colors.pink300,
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export const resetButtonStyles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.grey500,
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
