import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Picker } from 'react-native';
import AppToolbar from './AppToolbar';
import {schedule} from '../app-data/schedule';
import Flag from 'react-native-round-flags';
import HomeModal from './HomeModal';
import {s} from './HomeStyle';

const ScheduledDay = ({day, count}) => <Text style={s.schedule_text}>{day} <Text>&bull;</Text> {count}</Text>;

const MatchCard = ({content, handleModal}) => (
  <View style={s.day_container}>
    <View style={s.day_container_text}>
      <View style={{elevation: 2, backgroundColor: '#ea214d', padding: 3, borderRadius: 6, height: 25}}>
        <Text style={{color: 'white'}}>{content.dateFormat}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 18, position: 'relative', right: 6, fontWeight: 'bold'}}>Match </Text>
        <View style={s.day_match}>
          <Text style={{color: 'white'}}>{content.match}</Text>
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
      <Text style={{fontSize: 16, fontWeight: 'bold', fontFamily: 'san-serif'}}>{content.stadium}</Text>
    </View>
    {
      (content.team1 === 'TBD' || content.team2 === 'TBD') ?
        (
          <TouchableOpacity style={{backgroundColor: '#d3d3d3', borderTopColor: '#232882', borderTopWidth: 1.5}}>
            <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>Compare squads</Text>
          </TouchableOpacity>
        )
        : (
          <TouchableOpacity onPress={() => handleModal(content)} style={{backgroundColor: '#ea214d', borderTopColor: '#232882', borderTopWidth: 1.5}}>
            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Compare squads</Text>
          </TouchableOpacity>
        )
    }
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
    filteredItem: '',
    today: [],
    upcoming: [],
    past: [],
    selectedTeam: 'All'
  }

  handleDrawer = () => this.props.navigation.toggleDrawer();

  handleSelectedTeam = (team) => {
    this.setState({selectedTeam: team}, () => this.handleFilterTeam());
  }

  handleFilterTeam = () => {
    let more;
    if ( this.state.selectedTeam === 'All') {
      more = this.state.upcoming;
    } else {
      more = this.state.upcoming.filter((item) => {
        if (item.team1 === this.state.selectedTeam || item.team2 === this.state.selectedTeam) {
          return true;
        }
        return false;
      });
    }
    this.setState({filteredItem: more});
    return more;
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

  componentDidMount() {
    let today = this.state.schedule.filter((item) => {
      return (item.date === (new Date().getMonth()+" "+new Date().getDate()));
    });
    let upcoming = this.state.schedule.filter((item) => {
      if (parseInt(item.date.split(' ')[0]) > (new Date().getMonth()) ||
          (parseInt(item.date.split(' ')[0]) === (new Date().getMonth()) &&
            parseInt(item.date.split(' ')[1]) > (new Date().getDate()))) {
              return true;
        }
      return false;
    });
    let past = this.state.schedule.filter((item) => {
      if (parseInt(item.date.split(' ')[0]) < (new Date().getMonth()) ||
          (parseInt(item.date.split(' ')[0]) === (new Date().getMonth()) &&
            parseInt(item.date.split(' ')[1]) < (new Date().getDate()))) {
              return true;
      }
      return false;
    });
    this.setState({...this.state, today, upcoming, past});
  }

  render() {
    const upcomingGames = this.state.filteredItem || this.state.upcoming;
    return (
      <React.Fragment>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <View style={{flex: 1, backgroundColor: '#232882'}}>
          <View style={{flex: 1}}>
            <ScheduledDay day='Today' count={this.state.today.length}/>
            <View style={{flex: 8}}>
              <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.today}
                renderItem={({item}) => <MatchCard key={parseInt(item.match)} content={item} handleModal={() => this.handleModalVisibility(item)}/>}/>
            </View>
          </View>
          <View style={{flex: 1}}>
            <ScheduledDay day='Upcoming' count={upcomingGames.length}/>
            <View style={{flex:0,flexDirection: 'row', position: 'absolute', top: -14, left: 300}}>
              <Text style={{color: 'white', textAlignVertical: 'center'}}>{this.state.selectedTeam}</Text>
              <Picker selectedValue={this.state.selectedTeam} style={{width: 50}} onValueChange={this.handleSelectedTeam}>
                <Picker.Item label='All' value='All' />
                <Picker.Item label='Afghanistan' value='Afghanistan' />
                <Picker.Item label='Australia' value='Australia' />
                <Picker.Item label='Bangladesh' value='Bangladesh' />
                <Picker.Item label='England' value='England' />
                <Picker.Item label='India' value='India' />
                <Picker.Item label='New Zealand' value='New Zealand' />
                <Picker.Item label='Pakistan' value='Pakistan' />
                <Picker.Item label='South Africa' value='South Africa' />
                <Picker.Item label='Sri Lanka' value='Sri Lanka' />
                <Picker.Item label='West Indies' value='West Indies' />
              </Picker>
            </View>
            <FlatList 
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={upcomingGames}
              renderItem={({item}) => <MatchCard key={parseInt(item.match)} content={item} handleModal={() => this.handleModalVisibility(item)}/>}/>
          </View>
          <View style={{flex: 1}}>
            <ScheduledDay day='Past' count={this.state.past.length}/>
            <FlatList 
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={this.state.past}
              renderItem={({item}) => <MatchCard key={parseInt(item.match)} content={item} handleModal={() => this.handleModalVisibility(item)}/>}/>
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