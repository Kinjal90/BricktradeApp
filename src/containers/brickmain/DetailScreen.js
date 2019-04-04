import React, { Component } from 'react';
import { View, Text, Platform, StatusBar, Image } from 'react-native';
import styles from '../../styles/main';
import BrickX from '../../assets/images/ic_home.png';

export class DetailScreen extends Component {
  static navigationOptions = () => ({
    tabBarIcon: ({ tintColor }) => <Image source={BrickX} style={{ tintColor }} />,
  });

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Text> Home Detail Screen </Text>
      </View>
    )
  }
};

export default DetailScreen;