import React, { Component } from 'react';
import { View, Text, Image, Platform, StatusBar  } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';
import styles from '../../styles/main';
import Home from '../../assets/images/ic_home.png';

export class HomeScreen extends Component {
  static navigationOptions = () => ({
    title: 'Account',
    header: 'none',
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
    tabBarLabel: 'BrickX',
    tabBarIcon: ({ tintColor }) => <Image source={Home} style={{ tintColor }} />,
  });

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.loginButton}>Home Screen</Text>
      </View>
    )
  }
};

export default HomeScreen;