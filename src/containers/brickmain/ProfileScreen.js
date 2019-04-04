import React, { Component } from 'react';
import { View, Text, Platform, StatusBar, Image } from 'react-native';
import styles from '../../styles/main';
import Profile from '../../assets/images/ic_profile.png';
import { COLOR as colors } from 'react-native-material-ui';

export class ProfileScreen extends Component {
  static navigationOptions = () => ({
    title: 'Profile',
    headerStyle: {
      backgroundColor: colors.white,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight + 10,
    },
    headerTitleStyle: {
      alignSelf: 'center',
      color: colors.black,
      fontSize: 18,
    },
    headerRight: (<View />),
    headerLeft: (<View />),
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => <Image source={Profile} style={{ tintColor }} />,
  });

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Text> Profile Screen </Text>
      </View>
    )
  }
};

export default ProfileScreen;