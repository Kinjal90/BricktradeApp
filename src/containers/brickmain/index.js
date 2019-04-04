import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarTop, View, Button } from 'react-navigation';
import { COLOR as colors } from 'react-native-material-ui';
import CongratesScreen from './CongratesScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import AccountScreen from './AccountScreen';
import BrickLocationScreen from './BrickLocationScreen';
import ProfileScreen from './ProfileScreen';
// import CustomTabBarBottom from '../../components/CustomTabBarBottom';

const components = {
  Congrates: { 
    screen: CongratesScreen,
    // tabBarOptions: {
    //   visible: false,
    // }
    // navigationOptions: {
    //   // tabBarVisible: false,
    // }
  },
  // Home: { screen: HomeScreen },
  Home: { screen: StackNavigator({
    Home: { screen: HomeScreen },
    HomeDetail: { screen: DetailScreen },
  }, {
    headerMode: 'screen',
    initialRouteName: 'Home',
  }) },
  Account: { screen: AccountScreen },
  Brick360: { screen: BrickLocationScreen },
  Profile: { screen: ProfileScreen },
};

const TabScreen = TabNavigator(components, {
  initialRouteName: 'Congrates',
  lazy: false,
  swipeEnabled: false,
  tabBarComponent: TabBarTop,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: colors.pink300,
    inactiveBackgroundColor: colors.black,
    inactiveTintColor: colors.black,
    iconStyle: {
      marginTop: 10,
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
      backgroundColor: '#f9f9f9',
    },
  },
  tabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarPosition: 'bottom',
  hiddenTabs: ['CongratesScreen']
  // tabBarComponent: (props) => <CustomTabBarBottom {...props} />
});

export default TabScreen;
