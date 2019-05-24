import React from 'react';
import { View, FlatList } from 'react-native';
import AppToolbar from '../AppToolbar';
import CustomRow from './CustomRow';
import squad from '../../app-data/squad';

export default class Team extends React.Component {

  state = {
    squad 
  }

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  handleSquad = () => {
    fetch('https://api.jsonbin.io/b/5ce6c9d1bc2a75194e4cf6a9/latest', {headers:{"secret-key":"$2a$10$A2yuCQpLPlo4/fAMWpmtQu3oW1Lo1cfNgxcZPDGnSSO9nBOfCGgLe"}})
        .then(resp => resp.json())
        .then(data => console.log(data))
  }

  render() {
    console.log("squad", this.state.squad);
    return (
      <React.Fragment>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <View style={{flex: 1}}>
          <FlatList
            data={this.state.squad}
            renderItem={({ item }) => <CustomRow
                                        country={item.country}
                                        code={item.code}
                                         members={item.members}
                                        />
                          }
            />
        </View>
      </React.Fragment>
    );
  }
}