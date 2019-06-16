import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Picker } from 'react-native';
import AppToolbar from '../AppToolbar';
import {s} from '../Home/HomeStyle';
import {flagExtract} from '../../utils/index';
import ScoreModal from '../ScoreModal';
import HomeModal from './HomeModal';

const ScheduledDay = ({day, count}) => <Text style={s.schedule_text}>{day} <Text>&bull;</Text> {count}</Text>;

const MatchCard = ({content, handleModal,flag, cardColor ,txtColor}) => (
  <View style={s.day_container}>
    <View style={s.day_container_text}>
      <View style={{elevation: 2, backgroundColor: cardColor,paddingLeft:5, paddingRight: 3, height: 25}}>
        <Text style={{color: txtColor}}>{content.dateFormat}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 18, position: 'relative', right: 6, fontWeight: 'bold'}}>Match </Text>
        <View style={{backgroundColor: cardColor, borderRadius: 15,alignItems: 'center',width: 25,height: 25,elevation: 6}}>
          <Text style={{color: txtColor}}>{content.match}</Text>
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
      <Text style={{fontSize: 15, fontWeight: 'bold', fontFamily: 'san-serif'}}>{content.stadium}</Text>
    </View>
    {
      flag ? (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'space-around', backgroundColor: cardColor, borderTopColor: '#232882', borderTopWidth: 2,borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
          <TouchableOpacity onPress={() => handleModal(content, flag)} style={{flex:1,borderRightColor: '#232882', borderRightWidth: 1}}>
            <Text style={{color: txtColor, fontWeight: 'bold', flex:1, fontSize:16, textAlign: 'center', textAlignVertical:'center'}}>{flag}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleModal(content)} style={{flex:1,borderLeftColor: '#232882', borderLeftWidth: 1}}>
            <Text style={{color: txtColor, fontWeight: 'bold', flex:1, fontSize:16, textAlign: 'center', textAlignVertical:'center'}}>Compare squads</Text>
          </TouchableOpacity>
        </View> 
      ) : (
        content.result ? (
          <View style={{flex: 1,backgroundColor: cardColor, borderTopColor: '#232882',borderTopWidth: 1.5, borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
            <Text style={{fontWeight: 'bold',flex:1, fontSize:16, textAlign: 'center', textAlignVertical:'center'}}>{content.result}</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={() => handleModal(content)} style={{flex: 1,backgroundColor: cardColor, borderTopColor: '#232882', borderTopWidth: 1.8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
            <Text style={{color: txtColor,fontWeight: 'bold', flex:1, fontSize:14, textAlign: 'center', textAlignVertical:'center'}}>Compare squads</Text>
          </TouchableOpacity>
        )
      )
    }
  </View>
);

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      schedule: this.props.screenProps.schedule,
      flag: '',
      modalVisible: false,
      selectedItem: '',
      filterUpcoming: '',
      filterPast: '',
      today: [],
      upcoming: [],
      past: [],
      selectedTeam: 'All'
    }
  }

  handleDrawer = () => this.props.navigation.toggleDrawer();

  handleSelectedTeam = (team) => {
    this.setState({selectedTeam: team}, () => this.handleFilterTeam());
  }

  handleFilterTeam = () => {
    let upGames, pastGames;
    if ( this.state.selectedTeam === 'All') {
      upGames = this.state.upcoming;
      pastGames = this.state.past;
    } else {
      upGames = this.state.upcoming.filter((item) => {
        if (item.team1 === this.state.selectedTeam || item.team2 === this.state.selectedTeam) {
          return true;
        }
        return false;
      });
      pastGames = this.state.past.filter((item) => {
        if (item.team1 === this.state.selectedTeam || item.team2 === this.state.selectedTeam) {
          return true;
        }
        return false;
      });
    }
    this.setState({filterUpcoming: upGames, filterPast: pastGames});
    return upGames;
  }

  handleModalVisibility = (item, flag) => {
    this.state.modalVisible ? 
      this.setState({...this.state, modalVisible: false, selectedItem: '', flag: ''}) 
      : 
      this.setState({...this.state, modalVisible: true, selectedItem: item, flag});
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
    const upcomingGames = this.state.filterUpcoming || this.state.upcoming;
    const pastGames = this.state.filterPast || this.state.past;
    const {flag} = this.state;
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
                renderItem={({item}) => <MatchCard key={parseInt(item.match)} cardColor="green" txtColor="white" flag="Live score" content={item} handleModal={this.handleModalVisibility}/>}/>
            </View>
          </View>
          <View style={{flex: 1}}>
            <ScheduledDay day='Upcoming' count={upcomingGames.length}/>
            <View style={{flex:0,flexDirection: 'row', position: 'absolute', top: -14, left: 250}}>
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
              renderItem={({item}) => <MatchCard key={parseInt(item.match)} cardColor="#ea214d" txtColor="white" content={item} handleModal={() => this.handleModalVisibility(item)}/>}/>
          </View>
          <View style={{flex: 1}}>
            <ScheduledDay day='Past' count={pastGames.length}/>
            <FlatList 
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={pastGames}
              renderItem={({item}) => <MatchCard key={parseInt(item.match)} cardColor="#d3d3d3" txtColor="black" content={item} handleModal={() => this.handleModalVisibility(item)}/>}/>
          </View> 
          {
            (flag === 'Live score') ? (
              <ScoreModal closeModal={this.handleModalVisibility} display={this.state.modalVisible} id={this.state.selectedItem.id}/>
            ) : (
              <HomeModal stats={this.state.selectedItem} display={this.state.modalVisible} closeModal={this.handleModalVisibility}/>
            )
          }
        </View>
      </React.Fragment>
    );
  }
}