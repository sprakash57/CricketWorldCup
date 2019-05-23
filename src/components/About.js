import React from 'react';
import { View, Text } from 'react-native';
import AppToolbar from './AppToolbar';

export default class About extends React.Component {

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
      <View>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <Text>About the dev</Text>
      </View>
    );
  }
}