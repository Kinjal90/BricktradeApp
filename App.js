import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { SwitchNavigator } from 'react-navigation';
import MainScreen from './src/containers/MainScreen';
import TabScreen from './src/containers/brickmain';

export default class App extends Component {
    

  render() {
    const AppNavigator = SwitchNavigator({
        MainScreen: { screen: MainScreen },
        TabScreen: { screen: TabScreen },
    }, {
        headerMode: 'screen',
        initialRouteName: 'MainScreen',
    });

    return (
        <View style={{ flex: 1 }}>
            <AppNavigator />
        </View>
    );
  }
}

AppRegistry.registerComponent('App',  () => App);
