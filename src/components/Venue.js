import React from 'react';
import { View, Text } from 'react-native';
import AppToolbar from './AppToolbar';

export default class Venue extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: 'Venue',
  //   drawerIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('../assets/burger.png')}
  //       style={[styles.icon, {tintColor: tintColor}]}
  //     />
  //   ),
  // };

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
      <View>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <Text>Venue screen</Text>
      </View>
    );
  }
}