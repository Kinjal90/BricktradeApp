import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import { COLOR as colors } from 'react-native-material-ui';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import AccountScreen from './AccountScreen';
import DebitCardScreen from './DebitCardScreen';
import BrickLocationScreen from './BrickLocationScreen';
import ProfileScreen from './ProfileScreen';
import BuyScreen from './BuyScreen';

const components = {
  Home: { screen: HomeScreen },
  Account: { screen: AccountScreen },
  Buy: { screen: StackNavigator({
    Buy: { screen: BuyScreen },
    DebitCard: { screen: DebitCardScreen },
  }, {
    headerMode: 'screen',
    initialRouteName: 'Buy',
  }) },
  Brick360: { screen: BrickLocationScreen },
  Profile: { screen: ProfileScreen },
};

const TabScreen = TabNavigator(components, {
  initialRouteName: 'Buy',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: 'rgb(254,0,138)',
    inactiveTintColor: 'rgb(83,101,119)',
    activeBackgroundColor: 'white',
    inactiveBackgroundColor: 'white',
    iconStyle: {
      // marginTop: 10,
    },
    indicatorStyle: {
      opacity: 0,
    },
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 10,
    },
    scrollEnabled: false,
    showIcon: true,
    showLabel: true,
    style: {
      borderTopColor: colors.grey100,
      borderBottomWidth: 2,
      backgroundColor: 'white',
    },
  },
  tabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarPosition: 'bottom',
});

export default TabScreen;
