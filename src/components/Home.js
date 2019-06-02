import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';
import AppToolbar from './AppToolbar';
import {schedule} from '../app-data/schedule';
import Flag from 'react-native-round-flags';
import Icon from 'react-native-vector-icons/Ionicons';

const s = StyleSheet.create({
  day_container: {
    flex:1, 
    width: 370, 
    marginTop: 20,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 20,
    backgroundColor: 'white'
  },

  day_container_text: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 10,
  },

  day_match: {
    backgroundColor: '#ea214d',
    fontSize: 16,
    borderRadius: 15,
    alignItems: 'center',
    width: 25,
    height: 25,
    elevation: 6
  },

  day_flag: {
    flex: 3, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },

  day_team: {
    flex: 1,
    alignItems: 'center'
  },

  day_country: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around'
  },

  schedule_text: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: 'white',
    paddingLeft: 10
  },

  photo: {
    width: 70,
    height: 70  
  },
  modal_container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start'
  },

  modal_btn:{
    position: 'relative',
    top: 10,
    left: 10,
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    marginBottom: 30,
    // alignSelf: 'flex-start',
    // justifyContent: 'flex-start',
  },

  modal_btn_text: {
    fontSize: 22, 
    color:'#232882', 
    fontWeight: 'bold'
  },

  modal_btn_icon: {
    position: 'relative', 
    top: 5, 
    marginRight: 10,
  },

  modal_headers: {
    backgroundColor: '#ea214d', 
    // paddingLeft: 10, 
    // paddingRight: 10, 
    marginBottom: 15, 
    borderBottomRightRadius:20, 
    borderTopRightRadius: 20, 
    elevation: 4
  },

  modal_headers_text: {
    fontSize: 25, 
    color: 'white', 
    fontWeight: 'bold', 
    padding: 10
  },


});

const ScheduledDay = ({day}) => <Text style={s.schedule_text}>{day}</Text>;

const TodayMatch = ({content, handleModal}) => (
  <View style={s.day_container}>
    <View style={s.day_container_text}>
      <Text style={{fontSize: 18, flex: 1, fontWeight: 'bold'}}>{content.dateFormat}</Text>
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
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{content.team1}</Text>
      </View>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>VS</Text>
      <View style={s.day_team}>
        {flagExtract(content.team2)}
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{content.team2}</Text>
      </View>
    </View>
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 14, fontWeight: '600', fontFamily: 'san-serif', marginTop: 8}}>{content.stadium}</Text>
    </View>
    <TouchableOpacity onPress={() => handleModal(content)}>
      <Text>Compare teams</Text>
    </TouchableOpacity>
  </View>
);

const HeadToHead = ({stats, display, closeModal}) => {
  console.log('display', display);
  return (
  <Modal visible={display} animationType='slide'>
    <View style={s.modal_container}>
      <View style={s.modal_btn}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <Icon name='ios-arrow-back' size={20} color='#232882' style={s.modal_btn_icon}/>
          </TouchableWithoutFeedback>
          <Text style={s.modal_btn_text} onPress={closeModal}>Back</Text>
        </View>
      <View style={s.modal_headers}>
        <Text style={s.modal_headers_text}>Head to Head</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#232882'}}>
        <View >
          <Text style={{color: 'whtite', fontSize: 20}}>Stats</Text>
          <Text style={{color: 'whtite', fontSize: 17}}>Last 5 ODIs</Text>
          <Text>Last 5 encounters</Text>
          <Text>Win against in WC</Text>
          <Text>Finale appearances</Text>
          <Text>World Cup title</Text>
        </View>
        <View >
          <Text>{stats.team1}</Text>
          <Text>{stats.headToHead.t1['Last 5 ODIs']}</Text>
          <Text>{stats.headToHead.t1['Last 5 encounters']}</Text>
          <Text>{stats.headToHead.t1['Win against in WC']}</Text>
          <Text>{stats.headToHead.t1['Finale appearances']}</Text>
          <Text>{stats.headToHead.t1['World Cup title']}</Text>
        </View>
        <View >
          <Text>{stats.team2}</Text>
          <Text>{stats.headToHead.t2['Last 5 ODIs']}</Text>
          <Text>{stats.headToHead.t2['Last 5 encounters']}</Text>
          <Text>{stats.headToHead.t2['Win against in WC']}</Text>
          <Text>{stats.headToHead.t2['Finale appearances']}</Text>
          <Text>{stats.headToHead.t2['World Cup title']}</Text>
        </View>
      </View>
      <View>
        <Text>Star players</Text>
      </View>
      <View style={{flex:5, alignItems: 'center', backgroundColor: 'red'}}>
        <View>
          <Text>{stats.team1}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex:1}}>
            <Text>Role</Text>
            <Image source={require('../assets/bat.png')} style={{width: 20, height: 20}}/>
            <Image source={require('../assets/ball.png')} style={{width: 20, height: 20}}/>
            <Image source={require('../assets/all.png')} style={{width: 20, height: 20}}/>
          </View>
          <View>
            <Text>Player</Text>
            <Text>{stats.headToHead.t1['Best ODI Batsman'].split(',')[0]}</Text>
            <Text>{stats.headToHead.t1['Best ODI Bowler'].split(',')[0]}</Text>
            <Text>{stats.headToHead.t1['Best Allrounder'].split(',')[0]}</Text>
          </View>
          <View>
            <Text>ODI Ranking</Text>
            <Text>{stats.headToHead.t1['Best ODI Batsman'].split(',')[1]}</Text>
            <Text>{stats.headToHead.t1['Best ODI Bowler'].split(',')[1]}</Text>
            <Text>{stats.headToHead.t1['Best Allrounder'].split(',')[1]}</Text>
          </View>
          
        </View>
      </View>
    </View>
  </Modal>
)}

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

  // componentDidMount() {
  //   this.state.schedule.map(item => {
  //     if (item.Date.split(' ')[0] === new Date().getMonth()) {
        
  //     }
  //   })
  // }

  handleSquad = () => {
    // fetch('https://api.myjson.com/bins/ygyoo')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    // fetch('https://api.jsonbin.io/b/5ce6c9d1bc2a75194e4cf6a9/latest', {headers:{"secret-key":"$2a$10$A2yuCQpLPlo4/fAMWpmtQu3oW1Lo1cfNgxcZPDGnSSO9nBOfCGgLe"}})
    //       .then(resp => resp.json())
    //       .then(data => console.log(data))
  }

  handleModalVisibility = (item) => {
    console.log('item', item);
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
            <View style={{flex: 9}}>
              <ScrollView horizontal={true}>
                {
                  this.state.schedule.map(item => {
                    if (item.date === (new Date().getMonth()+" "+new Date().getDate())) {
                      return <TodayMatch key={parseInt(item.match)} content={item} handleModal={() => this.handleModalVisibility(item)}/>
                    }
                  })
                }
              </ScrollView>
            </View>
            
          </View>
          <View style={{flex: 1}}>
            <ScheduledDay day={this.state.upcoming} />
          </View>
          <View style={{flex: 1}}>
            <ScheduledDay day={this.state.past} />
          </View> 
        </View>
        {this.state.modalVisible && (<HeadToHead 
          stats={this.state.selectedItem}
          display={this.state.modalVisible}
          closeModal={this.handleModalVisibility}/>)}
      </React.Fragment>
    );
  }
}