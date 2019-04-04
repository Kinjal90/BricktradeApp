import React, { Component } from 'react';
import { View, Text, Image, Platform, StatusBar  } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';
import styles from '../../styles/congrates';
import BrickX from '../../assets/images/ic_home.png';
import Congrates from '../../assets/images/congrates.png';
// import console = require('console');

export class CongratesScreen extends Component {
  static navigationOptions = () => ({
    title: 'Congrates',
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
    tabBarLabel: 'Congrates',
    tabBarIcon: ({ tintColor }) => <Image source={BrickX} style={{ tintColor }} />,
  });

  render() {
    return (
      <View style={styles.mainBack}>
        <Text style={styles.title}>
          Congratulations
        </Text>

        <Text style={styles.subTitle}>
          Your Bricktrade profile is complete & verified
        </Text>

        <Image
          source={Congrates}
          style={styles.image}
          size={10}
        />
      </View>
    )
  }
};

export default CongratesScreen;