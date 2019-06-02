import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import AppToolbar from './AppToolbar';
import {schedule} from '../app-data/schedule';
import Flag from 'react-native-round-flags';
import HomeModal from './HomeModal';
import {s} from './HomeStyle';

const ScheduledDay = ({day}) => <Text style={s.schedule_text}>{day}</Text>;

const TodayMatch = ({content, handleModal}) => (
  <View style={s.day_container}>
    <View style={s.day_container_text}>
      <View style={{elevation: 2, backgroundColor: '#0d98ba', padding: 3}}>
        <Text style={{fontSize: 15, color: 'white', textAlignVertical: 'center'}}>{content.dateFormat}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 18, position: 'relative', right: 6, fontWeight: 'bold'}}>Match </Text>
        <View style={s.day_match}>
          <Text style={{fontSize: 18, color: 'white'}}>{content.match}</Text>
        </View>
      </View>
    </View>
    <View style={s.day_flag}>
      <View style={s.day_team}>
        {flagExtract(content.team1)}
        <Text style={{fontWeight: 'bold',textAlign:'center', width:100, flexWrap:'nowrap'}}>{content.team1}</Text>
      </View>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>VS</Text>
      <View style={s.day_team}>
        {flagExtract(content.team2)}
        <Text style={{fontWeight: 'bold',textAlign:'center', width:100, flexWrap:'nowrap'}}>{content.team2}</Text>
      </View>
    </View>
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 14, fontWeight: '600', fontFamily: 'san-serif', marginTop: 8}}>{content.stadium}</Text>
    </View>
    <TouchableOpacity onPress={() => handleModal(content)} style={{backgroundColor: 'orange', borderTopColor: '#232882', borderTopWidth: 1.5}}>
      <Text style={{fontSize: 17, fontWeight: 'bold', textAlign: 'center'}}>Compare squads</Text>
    </TouchableOpacity>
  </View>
);

const flagExtract = (team) => {
  switch(team) {
    case 'Afghanistan':
      return <Flag code={'AF'} style={s.photo}/>
    case 'Australia':
      return <Flag code={'AU'} style={s.photo}/>
    case 'Bangladesh':
      return <Flag code={'BD'} style={s.photo}/>
    case 'England':
      return <Flag code={'GB'} style={s.photo}/>
    case 'India':
      return <Flag code={'IN'} style={s.photo}/>
    case 'New Zealand':
      return <Flag code={'NZ'} style={s.photo}/>
    case 'Pakistan':
      return <Flag code={'PK'} style={s.photo}/>
    case 'South Africa':
      return <Flag code={'ZA'} style={s.photo}/>
    case 'Sri Lanka':
      return <Flag code={'LK'} style={s.photo}/>
    case 'West Indies':
      return <Image source={require('../assets/WI.png')} style={s.photo}/>
  }
}

export default class Home extends React.Component {

  state = {
    schedule,
    modalVisible: false,
    selectedItem: '',
    today: 'Today',
    upcoming: 'Upcoming',
    past: 'Past'
  }

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  // handleSquad = () => {
  //   fetch('https://api.myjson.com/bins/ygyoo')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  //   fetch('https://api.jsonbin.io/b/5ce6c9d1bc2a75194e4cf6a9/latest', {headers:{"secret-key":"$2a$10$A2yuCQpLPlo4/fAMWpmtQu3oW1Lo1cfNgxcZPDGnSSO9nBOfCGgLe"}})
  //         .then(resp => resp.json())
  //         .then(data => console.log(data))
  // }

  handleModalVisibility = (item) => {
    this.state.modalVisible ? 
      this.setState({...this.state, modalVisible: false, selectedItem: ''}) 
      : 
      this.setState({...this.state, modalVisible: true, selectedItem: item});
  }

  render() {
    return (
      <React.Fragment>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <View style={{flex: 1, backgroundColor: '#232882'}}>
          <View style={{flex: 1}}>
            <ScheduledDay day={this.state.today} />
            <View style={{flex: 8}}>
              <FlatList 
                horizontal={true}
                data={this.state.schedule}
                renderItem={({item}) => {
                  if (item.date === (new Date().getMonth()+" "+new Date().getDate())) {
                    return <TodayMatch key={parseInt(item.match)} content={item} handleModal={() => this.handleModalVisibility(item)}/>
                  }
                }}/>
            </View>
          </View>
          <View style={{flex: 1}}>
            <ScheduledDay day={this.state.upcoming} />
            <FlatList 
              horizontal={true}
              data={this.state.schedule}
              renderItem={({item}) => {
                if (item.date.split(' ')[0] >= (new Date().getMonth())) {
                  if (item.date.split(' ')[1] > (new Date().getDate())) {
                    return <TodayMatch key={parseInt(item.match)} content={item} handleModal={() => this.handleModalVisibility(item)}/>
                  }
                }
              }}/>
          </View>
          <View style={{flex: 1}}>
            <ScheduledDay day={this.state.past} />
            <FlatList 
              horizontal={true}
              data={this.state.schedule}
              renderItem={({item}) => {
                if (item.date.split(' ')[0] < (new Date().getMonth())) {
                  return <TodayMatch key={parseInt(item.match)} content={item} handleModal={() => this.handleModalVisibility(item)}/>
                }
              }}/>
          </View> 
          <HomeModal 
            stats={this.state.selectedItem}
            display={this.state.modalVisible}
            closeModal={this.handleModalVisibility}/>
        </View>
      </React.Fragment>
    );
  }
}