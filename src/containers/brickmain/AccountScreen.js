import React, { Component } from 'react';
import { View, Text, Image, Platform, StatusBar  } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';
import styles from '../../styles/main';
import Account from '../../assets/images/ic_account.png';

export class AccountScreen extends Component {
  static navigationOptions = () => ({
    title: 'Account',
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
    tabBarLabel: 'Account',
    tabBarIcon: ({ tintColor }) => <Image source={Account} style={{ tintColor }} />,
  });

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.loginButton}>Account Screen</Text>
      </View>
    )
  }
};

export default AccountScreen;