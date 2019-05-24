import React from 'react';
import { View, Text, Button } from 'react-native';
import AppToolbar from './AppToolbar';

export default class Home extends React.Component {


  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  handleSquad = () => {
    // fetch('https://api.myjson.com/bins/ygyoo')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    // fetch('https://api.jsonbin.io/b/5ce6c9d1bc2a75194e4cf6a9/latest', {headers:{"secret-key":"$2a$10$A2yuCQpLPlo4/fAMWpmtQu3oW1Lo1cfNgxcZPDGnSSO9nBOfCGgLe"}})
    //       .then(resp => resp.json())
    //       .then(data => console.log(data))
  }

  render() {
    console.log("Home--->", this.props);
    return (
      <View>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <Text>This is home screen</Text>
        <Text>{this.props.screenProps.value}</Text>
        <Button onPress={this.handleSquad} title="Press"/>
      </View>
    );
  }
}