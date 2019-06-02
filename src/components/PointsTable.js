import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import AppToolbar from './AppToolbar';
import {table} from '../app-data/table';
import Flag from 'react-native-round-flags';

const s = StyleSheet.create({
  photo: {
    height: 40,
    width: 40,
    position: 'relative',
    top: 3
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: 10,
    marginLeft:12,
    marginRight:12,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
  },
});

const flagExtractor = code => code !== 'WI' ? (<Flag code={code} style={s.photo}/>) : <Image source={require('../assets/WI.png')} style={s.photo}/>;

const RankTable = ({content}) => {
  console.log('content', content);
  return  (
    <View style={s.container}>
      {flagExtractor(content.country)}
      <Text style={{fontSize: 15}}>{content.matches}</Text>
      <Text style={{fontSize: 15}}>{content.won}</Text>
      <Text style={{fontSize: 15}}>{content.lost}</Text>
      <Text style={{fontSize: 15}}>{content.tie}</Text>
      <Text style={{fontSize: 15}}>{content.nr}</Text>
      <Text style={{fontSize: 15}}>{content.pt}</Text>
    </View>
  );
}

export default class PointsTable extends React.Component {

  state = {
    table
  }

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  render() {
    console.log('points', this.state.table);
    return (
      <React.Fragment>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <View style={{flex: 1,}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', position: 'relative', top: 20}}>
            <Text style={{fontSize: 12}}>Teams</Text>
            <Text style={{fontSize: 12}}>Matches</Text>
            <Text style={{fontSize: 12}}>Won</Text> 
            <Text style={{fontSize: 12}}>Lost</Text>
            <Text style={{fontSize: 12}}>Tie</Text>
            <Text style={{fontSize: 12}}>N/R</Text>
            <Text style={{fontSize: 12}}>PT</Text>
          </View>
          <View style={{flex: 9}}>
            <ScrollView>
              {this.state.table.map(item => <RankTable key={item.id} content={item}/>)}
            </ScrollView>
          </View>
        </View>
      </React.Fragment>
    );
  }
}