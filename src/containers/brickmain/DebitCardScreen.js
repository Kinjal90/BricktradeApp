import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput, FlatList, ImageBackground, Platform, ScrollView  } from 'react-native';
import { Button } from 'react-native-material-ui';
import { COLOR as colors } from 'react-native-material-ui';
import Modal from 'react-native-modal';
import styles, { resetButtonStyles } from '../../styles/debitcard';
import LeftArrow from '../../assets/images/leftarrow.png';
import Notification from '../../assets/images/notification.png';
import Person from '../../assets/images/person.jpg';
import Congrates from '../../assets/images/congrates.png';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IC_CLOSE from '../../assets/images/ic_close.png';
import PERSON_IMG from '../../assets/images/person.jpg';
import { ButtonGroup } from 'react-native-elements';

export class DebitCardScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colors.transparent,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      headerTintColor: colors.black,
      headerTitleStyle: { color: 'black' }
    },
    headerLeft: (
      <TouchableOpacity onPress={() => { navigation.goBack(); }}>
        <Image
          source={LeftArrow}
          style={{ marginLeft: 10, height: 30, width: 30 }}
        />
    </TouchableOpacity>
    ),
    headerRight: (
      <Image
        source={Notification}
        style={{ marginRight: 10, height: 20, width: 20 }}
      />
    ),
    tabBarLabel: ' ',
    tabBarIcon: ({ tintColor }) =>  <LinearGradient
      colors={['rgb(255,55,64)', 'rgb(255,55,119)', 'rgb(255, 44, 163)']}
      style={{
        width: 60,
        height: 60,
        backgroundColor: 'rgb(254,0,138)',
        position: 'absolute',
        bottom: 0,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 999,
        }}
      >
        <Text style={{ color: 'white' }}>Buy</Text>
    </LinearGradient>,
  });

  constructor () {
    super()
    this.state = {
      isModalVisible: false,
      selectedIndex: 0,
      accountNo: 'BT45678945',
      paymentId: 'BT-997845',
      receiveMail: 'peter@gmail.com',
      receiveWallet: 'HGTDT2u6vHHZx21738',
      selectFromChatList: [
        {name: 'Robert G.', image: PERSON_IMG},
        {name: 'Robert G.', image: PERSON_IMG},
        {name: 'Robert G.', image: PERSON_IMG},
        {name: 'Robert G.', image: PERSON_IMG},
        {name: 'Robert G.', image: PERSON_IMG},
        {name: 'Robert G.', image: PERSON_IMG},
        {name: 'Robert G.', image: PERSON_IMG},
      ],
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    const width = Dimensions.get('window').width;
    
    const newRicipientButtons = [
      { element: () => <Text>Myself</Text> }, 
      { element: () => <Text>Business</Text> }, 
      { element: () => <Text>Others</Text> }
    ];

    return (
      <View style={styles.mainBack}>
        <KeyboardAwareScrollView>
          <Text style={styles.title}>
            Successfully sent
          </Text>

          <Text style={styles.subTitle}>
            You have Successfully sent 10,000 Audly token to Peter R.
          </Text>

          <View style={styles.imageBack}>
            <Image
              source={Congrates}
              style={styles.congratesImage}
            />
          </View>

          <View style={styles.innerContainer}>
            <View style={styles.transferContainer}>
              <Text style={styles.transferMaintitle}>
                Transation Summary
              </Text>

              <View style={styles.leftDownloadContainer}>
                <TouchableOpacity onPress={() => this._toggleModal()}>
                  <Text style={styles.transactionDownload}>
                    Get QR
                  </Text>
                  <Text style={styles.transactionEdit}>
                    Receipt
                  </Text>
                </TouchableOpacity>
              </View>
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
              </View>

              <View style={styles.leftContainer}>
                <Text style={styles.transferTitle}>
                  Fee
                </Text>
                <Text style={styles.transfersubTitle}>
                {'\u00A3'} 0.0002
                </Text>
              </View>

              <View style={styles.leftDownloadContainer}>
                <Text style={styles.transactionDownload}>
                  Download
                </Text>
                <Text style={styles.transactionEdit}>
                  PDF Receipt
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <Modal
          isVisible={this.state.isModalVisible}
          style={styles.bottomModal}
        >
          <View style={styles.outerScrollContainer}>
          <ScrollView style={styles.scrollContainer}>
            
            <View style={styles.innerScrollContainer}>
              <TouchableOpacity style={styles.closebtn} onPress={this._toggleModal}>
                <Image
                  style={styles.cls_image}
                  source={IC_CLOSE}
                />
              </TouchableOpacity>

              <Text style={styles.headingtext}>New Recipient</Text>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={this.state.selectedIndex}
                buttons={newRicipientButtons}
                containerStyle={styles.groupContainerStyle} 
                buttonStyle={styles.groupButtonStyle}
                selectedButtonStyle={styles.groupSelectedButtonStyle}
                innerBorderStyle={styles.groupInnerBorderStyle}
              />

              <Text style={styles.headingtext}>Select from Chat</Text>
              <FlatList
                horizontal
                style={{ marginTop: 5 }}
                data={this.state.selectFromChatList}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <ImageBackground
                      key={item.name}
                      source={item.image}
                      style={styles.selectChatFlatImage}
                      imageStyle={{ height: '100%', width: '100%', resizeMode: 'stretch' , borderRadius: 10 }}
                    >
                      <Text style={styles.selectChatFlatText} numberOfLines={1} >{item.name}</Text>
                    </ImageBackground>
                  )
                }}
              />
              <Text style={styles.headingLighttext}>Account no.</Text>
              <View style={styles.inputModexBox}>
                <TextInput
                  style={styles.modelTextInput}
                  underlineColorAndroid={colors.transparent}
                  value={this.state.accountNo}
                  autoCapitalize="characters"
                  onChangeText={(e) => this.setState({ accountNo: e })}
                />
              </View>

              <Text style={styles.headingLighttext}>Receiver Wallet Address</Text>
              <View style={styles.inputModexBox}>
                <TextInput
                  style={styles.modelTextInput}
                  underlineColorAndroid={colors.transparent}
                  value={this.state.receiveWallet}
                  onChangeText={(e) => this.setState({ receiveWallet: e })}
                />
              </View>

              <Text style={styles.headingLighttext}>Receiver Email Address</Text>
              <View style={styles.inputModexBox}>
                <TextInput
                  onChangeText={(e) => this.setState({ receiveMail: e })}
                  style={styles.modelTextInput}
                  underlineColorAndroid={colors.transparent}
                  value={this.state.receiveMail}
                />
              </View>

              <Text style={styles.headingLighttext}>Payment ID</Text>
              <View style={styles.inputModexBox}>
                <TextInput
                  style={styles.modelTextInput}
                  underlineColorAndroid={colors.transparent}
                  value={this.state.paymentId}
                  onChangeText={(e) => this.setState({ paymentId: e })}
                />
              </View>

              <View style={styles.bottomContainer}>
                <LinearGradient
                  colors={['#FF5050', '#FB54AD']}
                  style={styles.createButton}
                >
                  <TouchableOpacity
                    style={styles.buttonModelContainer}
                    onPress={() => {
                      this._toggleModal();
                      this.props.navigation.goBack(); 
                    }}
                  >
                      <Text style={styles.buttonModelText}>
                        Confirm & Continue
                      </Text>
                  </TouchableOpacity>
                </LinearGradient>

                <Button
                  accent
                  text="Reset"
                  onPress={this._toggleModal}
                  upperCase={false}
                  style={resetButtonStyles}
                />
              </View>
            </View>
            
          </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
};

export default DebitCardScreen;