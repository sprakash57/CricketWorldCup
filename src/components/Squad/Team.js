import React from 'react';
import { View, FlatList } from 'react-native';
import AppToolbar from '../AppToolbar';
import CustomRow from './CustomRow';
import squad from '../../app-data/squad'

export default class Team extends React.Component {
  state = {
    squad
  }

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
      <React.Fragment>  
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <View style={{flex: 1}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: '#232882'}}
            data={this.state.squad}
            renderItem={({ item }) => (
              <CustomRow
                key={parseInt(item.rank)}
                country={item.country}
                code={item.code}
                rank={item.rank}
                stats={item["Last 5 ODIs"]}
                members={item.members}
                />
                )
              }
            />
        </View>
      </React.Fragment>
    );
  }
}