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
    marginTop: 10,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 10,
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
    flexDirection: 'row',
    marginBottom: 30,

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
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15, 
    borderBottomRightRadius:20, 
    borderTopRightRadius: 20, 
    elevation: 4
  },

  modal_headers_text: {
    fontSize: 25, 
    color: 'white', 
    fontWeight: 'bold', 
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20
  },

  modal_headers_image: {
    width: 20, 
    height: 20, 
    position: 'relative', 
    top: 17,
    left: 5
  },

  modal_stats: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#232882', 
    padding: 5, 
    marginBottom: 15,
  }

});

const ScheduledDay = ({day}) => <Text style={s.schedule_text}>{day}</Text>;

const TodayMatch = ({content, handleModal}) => (
  <View style={s.day_container}>
    <View style={s.day_container_text}>
      <View style={{elevation: 4, backgroundColor: '#0d98ba', padding: 2}}>
        <Text style={{fontSize: 17, flex: 1, color: 'white', fontWeight: 'bold'}}>{content.dateFormat}</Text>
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
    <TouchableOpacity onPress={() => handleModal(content)} style={{backgroundColor: 'orange', borderTopColor: '#232882', borderTopWidth: 1}}>
      <Text style={{fontSize: 17, textAlign: 'center'}}>Compare squads</Text>
    </TouchableOpacity>
  </View>
);

const HeadToHead = ({stats, display, closeModal}) => (
  <Modal visible={display} animationType='slide'>
    <View style={s.modal_container}>
      <View style={s.modal_btn}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <Icon name='ios-arrow-back' size={20} color='#232882' style={s.modal_btn_icon}/>
        </TouchableWithoutFeedback>
        <Text style={s.modal_btn_text} onPress={closeModal}>Back</Text>
      </View>
      <View style={s.modal_headers}>
        <Image source={require('../assets/hth.png')} style={s.modal_headers_image}/>
        <Text style={s.modal_headers_text}>Head to Head</Text>
      </View>
      <View style={s.modal_stats}>
        <View style={{flex:1,}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Stats</Text>
          <Text style={{color: 'white', fontSize: 16}}>Last 5 ODIs</Text>
          <Text style={{color: 'white', fontSize: 16}}>Last 5 encounters</Text>
          <Text style={{color: 'white', fontSize: 16}}>Win against in WC</Text>
          <Text style={{color: 'white', fontSize: 16}}>Finals played</Text>
          <Text style={{color: 'white', fontSize: 16}}>World Cup title</Text>
        </View>
        <View style={{flex:1, alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{stats.team1}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['Last 5 ODIs']}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['Last 5 encounters']}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['Win against in WC']}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['Finals played']}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['World Cup title']}</Text>
        </View>
        <View style={{flex:1, alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{stats.team2}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['Last 5 ODIs']}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['Last 5 encounters']}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['Win against in WC']}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['Finals played']}</Text>
          <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['World Cup title']}</Text>
        </View>
      </View>
      <View style={s.modal_headers}>
        <Image source={require('../assets/mvp.png')} style={s.modal_headers_image}/>
        <Text style={s.modal_headers_text}>Star players</Text>
      </View>
      <ModalHTHSection 
        team={stats.team1} 
        best={stats.headToHead.t1}
        />
      <ModalHTHSection 
        team={stats.team2} 
        best={stats.headToHead.t2}
        />
    </View>
  </Modal>
)

const ModalHTHSection = ({team, best}) => (
  <View style={{flex:1, alignItems: 'center', backgroundColor: '#232882', elevation: 4}}>
    <View style={{paddingTop: 10}}>
      <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>{team}</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex:1, paddingLeft: 10}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Role</Text>
        <Image source={require('../assets/bat.png')} style={{width: 20, height: 20, marginBottom: 12}}/>
        <Image source={require('../assets/ball.png')} style={{width: 20, height: 20, marginBottom: 12}}/>
        <Image source={require('../assets/all.png')} style={{width: 20, height: 20, marginBottom: 12}}/>
      </View>
      <View style={{flex:2, alignItems: 'flex-start'}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Player</Text>
        <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best ODI Batsman'].split(',')[0]}</Text>
        <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best ODI Bowler'].split(',')[0]}</Text>
        <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best Allrounder'].split(',')[0]}</Text>
      </View>
      <View style={{flex:1, alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>ODI Ranking</Text>
        <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best ODI Batsman'].split(',')[1]}</Text>
        <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best ODI Bowler'].split(',')[1]}</Text>
        <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best Allrounder'].split(',')[1]}</Text>
      </View>
    </View>
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
            <View style={{flex: 8}}>
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
            <ScrollView horizontal={true}>
              {
                this.state.schedule.map(item => {
                  if (item.date > (new Date().getMonth()+" "+new Date().getDate())) {
                    return <TodayMatch key={parseInt(item.match)} content={item} handleModal={() => this.handleModalVisibility(item)}/>
                  }
                })
              }
            </ScrollView>
          </View>
          <View style={{flex: 1}}>
            <ScheduledDay day={this.state.past} />
            <ScrollView horizontal={true}>
              {
                this.state.schedule.map(item => {
                  if (item.date < (new Date().getMonth()+" "+new Date().getDate())) {
                    return <TodayMatch key={parseInt(item.match)} content={item} handleModal={() => this.handleModalVisibility(item)}/>
                  }
                })
              }
            </ScrollView>
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