import React, { Component } from 'react';
import { View, Text, Image, Platform, StatusBar, TouchableOpacity, ScrollView  } from 'react-native';
import { Button } from 'react-native-material-ui';
import { COLOR as colors } from 'react-native-material-ui';
import { ButtonGroup } from 'react-native-elements';
import RangeSlider from 'rn-range-slider';
import styles, { homeButton, applyButtonStyles, resetButtonStyles } from '../../styles/home';
import BrickX from '../../assets/images/ic_home.png';
import IC_CLOSE from '../../assets/images/ic_close.png';
import Modal from 'react-native-modal';

export class HomeScreen extends Component {
  static navigationOptions = () => ({
    title: '',
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
    tabBarLabel: 'BrickX',
    tabBarIcon: ({ tintColor }) => <Image source={BrickX} style={{ tintColor }} />,
  });

  constructor () {
    super()
    this.state = {
      isModalVisible: false,
      selectedIndex: 0,
      leftValue: 0,
      rightValue: 100,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  // Toggle Filter Modal
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  // Update selected button index
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  // Update Range slider's selected value
  onValueChanged = (lowValue, highValue, fromUser) => {
      this.setState({
        leftValue: lowValue,
        rightValue: highValue,
      });
    };

  render() {
    const credibilityButtons = [
      { element: () => <Text>Recommended</Text> }, 
      { element: () => <Text>Non-recommended</Text> }
    ];

    const ownershipButtons = [
      { element: () => <Text>Possession</Text> }, 
      { element: () => <Text>Non-possession</Text> }
    ];

    const roomsButtons = [
      { element: () => <Text>1 BHK</Text> }, 
      { element: () => <Text>2 BHK</Text> },
      { element: () => <Text>3 BHK</Text> },
      { element: () => <Text>Villa</Text> }
    ];

    return (
      <View style={styles.buttonContainer}>
        <Button
          primary
          title=""
          text="Home Page"
          upperCase={false}
          onPress={this._toggleModal}
          style={homeButton}
        />

        <Button
          primary
          title=""
          text="Open Detail"
          upperCase={false}
          onPress={() => { this.props.navigation.navigate('HomeDetail'); }}
          style={homeButton}
        />

        <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <TouchableOpacity style={styles.closebtn} onPress={this._toggleModal}>
                <Image
                  style={styles.image}
                  source={IC_CLOSE}
                />
              </TouchableOpacity>

              <Text style={styles.headingtext}>Credibility</Text>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={this.state.selectedIndex}
                buttons={credibilityButtons}
                containerStyle={styles.groupContainerStyle} 
                buttonStyle={styles.groupButtonStyle}
                selectedButtonStyle={styles.groupSelectedButtonStyle}
                innerBorderStyle={styles.groupInnerBorderStyle}
              />

              <Text style={styles.headingtext}>Price Range</Text>
              <View style={{ flexDirection: 'row', width: '100%' }}>
                <Text style={{ }}>{this.state.leftValue}</Text>
                <Text style={{ marginLeft: 'auto' }}>{this.state.rightValue}</Text>
              </View>
              <RangeSlider
                style={{ width: '100%', height: 30 }}
                blankColor={colors.grey300}
                selectionColor={colors.pink300}
                thumbColor={colors.pink300}
                labelStyle='none'
                min={0}
                max={100}
                step={1}
                onValueChanged={this.onValueChanged}
              />

              <Text style={styles.headingtext}>Ownership</Text>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={this.state.selectedIndex}
                buttons={ownershipButtons}
                containerStyle={styles.groupContainerStyle} 
                buttonStyle={styles.groupButtonStyle}
                selectedButtonStyle={styles.groupSelectedButtonStyle}
                innerBorderStyle={styles.groupInnerBorderStyle}
              />

              <Text style={styles.headingtext}>Looking For</Text>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={this.state.selectedIndex}
                buttons={roomsButtons}
                containerStyle={styles.groupContainerStyle} 
                buttonStyle={styles.groupButtonStyle}
                selectedButtonStyle={styles.groupSelectedButtonStyle}
                innerBorderStyle={styles.groupInnerBorderStyle}
              />

              <Text style={styles.headingtext}>Area</Text>
              <View style={{ flexDirection: 'row', width: '100%' }}>
                <Text style={{ }}>{this.state.leftValue}</Text>
                <Text style={{ marginLeft: 'auto' }}>{this.state.rightValue}</Text>
              </View>
              <RangeSlider
                style={{ width: '100%', height: 30 }}
                blankColor={colors.grey300}
                selectionColor={colors.pink300}
                thumbColor={colors.pink300}
                labelStyle='none'
                min={0}
                max={100}
                step={1}
                onValueChanged={this.onValueChanged}
              />

              <Text style={{ marginBottom: 10 }}>Area range: 10,000 - 20,000 sqm.</Text>
              
              <View style={styles.bottomContainer}>
                <Button
                  accent
                  text="Apply"
                  onPress={this._toggleModal}
                  upperCase={false}
                  style={applyButtonStyles}
                />

                <Button
                  accent
                  text="Reset"
                  onPress={this._toggleModal}
                  upperCase={false}
                  style={resetButtonStyles}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
};

export default HomeScreen;