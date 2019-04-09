import React, { Component } from 'react';
import { View, Text, Platform, StatusBar, Image } from 'react-native';
import styles from '../../styles/main';
import Brick360 from '../../assets/images/ic_brick.png';
import { COLOR as colors } from 'react-native-material-ui';

export class BrickLocationScreen extends Component {
  static navigationOptions = () => ({
    title: 'Brick360',
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
    tabBarLabel: 'Brick360',
    tabBarIcon: ({ tintColor }) => <Image source={Brick360} style={{ tintColor }} />,
  });

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.loginButton}>Brick360 Screen</Text>
      </View>
    )
  }
};

export default BrickLocationScreen;