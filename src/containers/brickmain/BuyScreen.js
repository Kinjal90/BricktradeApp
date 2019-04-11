
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions  } from 'react-native';
import { COLOR as colors } from 'react-native-material-ui';
import styles from '../../styles/buy';
import LeftArrow from '../../assets/images/leftarrow.png';
import Notification from '../../assets/images/notification.png';
import Person from '../../assets/images/person.jpg';
import ArrowRight from '../../assets/images/rightarrow.png';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export class BuyScreen extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: colors.transparent,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      headerTintColor: colors.black,
      headerTitleStyle: { color: 'black' }
    },
    headerLeft: (
      <Image source={LeftArrow}  style={{ marginLeft: 10, height: 30, width: 30 }}/>
    ),
    headerRight: (
      <Image source={Notification}  style={{ marginRight: 10, height: 20, width: 20 }}/>
    ),
    tabBarLabel: ' ',
    // tabBarIcon: ({ tintColor }) =>  
    //   <LinearGradient
    //     colors={['rgb(255,55,64)', 'rgb(255,55,119)', 'rgb(255, 44, 163)']}
    //     style={{
    //       width: 60,
    //       height: 60,
    //       backgroundColor: 'rgb(254,0,138)',
    //       position: 'absolute',
    //       bottom: 0,
    //       borderRadius: 30,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       alignSelf: 'center',
    //       zIndex: 999,
    //       // flex: 0.1,
    //     }}
    //   >
    //     <Text style={{ color: 'white' }}>Buy</Text>
    // </LinearGradient>,
  });

  render() {
    const width = Dimensions.get('window').width;
  
    return (
      <View style={styles.mainBack}>
        <KeyboardAwareScrollView>
          <Text style={styles.title}>
            Review going
          </Text>

          <Text style={styles.subTitle}>
            Review details of your transfer
          </Text>

          <View style={styles.innerContainer}>
            <View style={styles.transferContainer}>
              <Text style={styles.transferMaintitle}>
                Transfer Details
              </Text>
              <Text style={styles.transferEdit}>
                Edit
              </Text>
            </View>

            <View style={styles.transferContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.transferTitle}>
                  Number of tokens
                </Text>
                <View style={styles.transferInnerContainer}>
                  <Text style={styles.transfersubTitle}>
                    10,000
                  </Text>
                  <Text style={styles.transferInnersubTitle}>
                    AUD
                  </Text>
                </View>

                <Text style={styles.transferTitle}>
                  Peter R. get
                </Text>
                <View style={styles.transferInnerContainer}>
                  <Text style={styles.transfersubTitle}>
                    9,999
                  </Text>
                  <Text style={styles.transferInnersubTitle}>
                    AUD
                  </Text>
                </View>
              </View>

              <View style={styles.leftContainer}>
                <Text style={styles.transferTitle}>
                  Fee
                </Text>
                <Text style={styles.transfersubTitle}>
                {'\u00A3'} 0.0002
                </Text>

                <Text style={styles.transferTitle}>
                  Deduction
                </Text>
                <Text style={styles.transfersubTitle}>
                {'\u00A3'} 0.0002
                </Text>
              </View>
            </View>
          
            <View style={styles.transferContainer}>
              <Text style={styles.transferMaintitle}>
                Receiver Details
              </Text>
              <Text style={styles.transferEdit}>
                Edit
              </Text>
            </View>

            <View style={styles.transferContainer}>
              <View style={styles.receiverLeftContainer}>
                <View style={styles.transferInnerContainer}>
                  <Image
                    source={Person}
                    style={styles.image}
                  />
                  <Text style={styles.transferLeftTitle}>
                    Peter R.
                  </Text>
                </View>
              </View>

              <View style={styles.receiverRightContainer}>
                <Text style={styles.receiverTitle}>
                  Feb 23
                </Text>
                <Text style={styles.receiverTitle}>
                  09.00 AM
                </Text>
              </View>
            </View>
          
            <Text style={styles.transferTitle}>
              Receiver Wallet address
            </Text>
            <Text style={styles.transfersubTitle}>
              HGTDT2u6vHHZx21738
            </Text>

            <Text style={styles.transferTitle}>
              Email address
            </Text>
            <Text style={styles.transfersubTitle}>
              peter@gmail.com
            </Text>
          </View>

          <View style={styles.buttonMainContainer}>
            <LinearGradient
                colors={['#FF5050', '#FB54AD']}
                style={styles.buttonOuterContainer}
            >
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.buttonTouchableContainer}
                  onPress={() => { this.props.navigation.navigate('DebitCard'); }}
                >
                    <Text style={styles.buttonText}>
                      Confirm & Continue
                    </Text>
                    <Image
                      source={ArrowRight}
                      style={styles.arrow}
                    />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
};

export default BuyScreen;