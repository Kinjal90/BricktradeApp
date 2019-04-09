import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-material-ui';
import styles, { loginButton } from '../styles/main';

export class MainScreen extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          primary
          title=""
          text="Start"
          upperCase={false}
          onPress={() => { this.props.navigation.navigate('TabScreen'); }}
          style={loginButton}
        />
      </View>
    )
  }
};

export default MainScreen;