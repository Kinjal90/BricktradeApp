import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import { COLOR as colors } from 'react-native-material-ui';
import CongratesScreen from './CongratesScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import AccountScreen from './AccountScreen';
import DebitCardScreen from './DebitCardScreen';
import BrickLocationScreen from './BrickLocationScreen';
import ProfileScreen from './ProfileScreen';
import BuyScreen from './BuyScreen';
// import CustomTabBarBottom from '../../components/CustomTabBarBottom';

const navigationConfig = {
  initialRouteName: 'Places',
  headerMode: 'float',
  navigationOptions: {
    title: 'App Name',
    header: ({ state, setParams }) => ({
      style: { backgroundColor: 'green' }
    })
  }
}

const components = {
  // Congrates: { 
  //   screen: CongratesScreen,
  // },
  Home: { screen: StackNavigator({
    Home: { screen: HomeScreen },
    HomeDetail: { screen: DetailScreen },
  }, {
    headerMode: 'screen',
    initialRouteName: 'Home',
  }) },
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
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 10,
    },
    scrollEnabled: false,
    showIcon: true,
    showLabel: true,
    style: {
      borderTopColor: colors.grey100,
      borderBottomWidth: 2
    },
  },
  tabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarPosition: 'bottom',
  hiddenTabs: ['CongratesScreen']
});

export default TabScreen;
