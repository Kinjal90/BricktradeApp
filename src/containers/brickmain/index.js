import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import DebitCardScreen from './DebitCardScreen';
import BrickLocationScreen from './BrickLocationScreen';
import ProfileScreen from './ProfileScreen';
import BuyScreen from './BuyScreen';
import LinearGradient from 'react-native-linear-gradient';

const S = StyleSheet.create({
  container: { flexDirection: "row", height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center" }
});

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
  lazy: false,
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#FF5050',
    inactiveTintColor: '#A9AEBE',
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
      fontSize: 12,
      fontFamily: 'WorkSans-Medium',
      lineHeight: 20,
      letterSpacing: -0.3,
    },
    scrollEnabled: false,
    showIcon: true,
    showLabel: true,
    style: {
      borderTopColor: colors.grey100,
    },
  },
  tabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarPosition: 'bottom',
  tabBarComponent: ({
    navigation, 
    navigationState,
    getLabel,
    renderIcon,
    activeTintColor,
    inactiveTintColor,
  }) => (
    <View style={{flex: 0.1, borderColor: colors.grey300, borderWidth: 1, backgroundColor: colors.white, paddingBottom: 10}} >
      <View
        style={{
          flexDirection:'row', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          paddingTop: 15
        }}
      >
      {navigationState.routes.map((route, idx) => {
        const focused = idx === navigationState.index;
        const tintColor = focused ? activeTintColor : inactiveTintColor;

        return (idx == 2)
        ?
          (
            <View
              style={{
                padding: 20,
              }}
            >
              <TouchableOpacity
                key={idx}
                style={{
                  position: 'absolute',
                  bottom: 10,
                  marginLeft: -10,
                }}
                onPress={() => navigation.navigate('Buy')}
              >
                <LinearGradient
                  colors={['rgb(255,55,64)', 'rgb(255,55,119)', 'rgb(255, 44, 163)']}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    zIndex: 999,
                  }}
                >
                  <Text style={{ color: colors.white }}>Buy</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )
        : 
          (
            <TouchableOpacity
              key={idx}
              style={S.tabButton}
              onPress={() => {
                navigation.navigate(route.routeName);
              }}
            >
              {renderIcon({ route, idx, focused, tintColor })}
              <Text style={{ color: tintColor, marginTop: 5 }}>{getLabel({ route, color: tintColor })}</Text>
            </TouchableOpacity>
          )
      })}
      </View>
    </View>
  ),
});

export default TabScreen;
