import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AppToolbar from './AppToolbar';
import winnersList from '../app-data/winnersList';

const WinnerList = ({year, series, final, venue, image, firstInnings, secondInnings, result, captain, teams, minnows, potm}) => (
  <View>
    <Text>{series}, {year}</Text>
  </View>
);

export default class PastWinners extends React.Component {

  state = {
    winnersList,
    modalVisible: false
  }

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
      <View>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <View style={{flex: 1}}>
          <FlatList 
            data={this.state.winnersList}
            renderItem={({item}) => <WinnerList title={item}/>}/>
        </View>
      </View>
    );
  }
}