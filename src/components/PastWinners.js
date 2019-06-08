import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, Image, TouchableWithoutFeedback } from 'react-native';
import AppToolbar from './AppToolbar';
import {winnersList} from '../app-data/winnersList';
import Icon from 'react-native-vector-icons/Ionicons';

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft:16,
    marginRight:16,
    marginTop: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
    justifyContent: 'center'
  },

  container_text: {
    color: 'black',
    fontSize: 20,
    flex: 0,
    width: 400,
    textAlign: 'center',
    flexWrap: 'nowrap',
    fontWeight: '600',
    letterSpacing: 1
  },

  modal_container: {
    flex: 1, 
    justifyContent: 'space-around', 
    alignItems: 'center'
  },

  modal_btn:{
    position: 'relative',
    top: 10,
    left: 10,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start'
  },

  modal_btn_text: {
    fontSize: 18, 
    flex: 0,
    flexWrap: 'nowrap',
    width: 100,
    color:'#232882', 
    fontWeight: 'bold'
  },

  modal_btn_icon: {
    position: 'relative', 
    top: 2, 
    marginRight: 10,
  },

  modal_image: {
    backgroundColor: '#f2f2f2',
    elevation: 10,
    paddingBottom: 10
  },

  modal_match: {
    flex: 2,
    alignItems: 'center',
    position: 'relative',
    top: 20
  },

  modal_innings: {
    backgroundColor: '#232882',
    flex: 3,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 380,
    position: 'relative',
    top: -25,
    paddingBottom: 10
},

  modal_innings_score: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  modal_innings_score_text: {
    fontSize: 14,
    flex: 1, 
    textAlign: 'center',
    fontWeight: '600', 
    color: 'white', 
    paddingLeft: 4
  },

  modal_innings_footer_text: {
    fontSize: 15, 
    color: 'white', 
    paddingLeft: 8
  }
})

const WinnerModal = ({content, display, closeModal}) => (
    <Modal visible={display} onRequestClose={closeModal} animationType='fade'>
      <View style={s.modal_container}>
        <View style={s.modal_btn}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <Icon name='ios-arrow-back' size={20} color='#232882' style={s.modal_btn_icon}/>
          </TouchableWithoutFeedback>
          <Text style={s.modal_btn_text} onPress={closeModal}>Back</Text>
        </View>
        <View style={s.modal_image}> 
          {ImageSelction(content.year)}
          <Text style={{fontSize: 16, fontWeight: 'bold', paddingLeft: 5, paddingTop: 7, color:'#232882'}}>{content.captain}</Text>
        </View>
        <View style={s.modal_match}>
          <Text style={{fontSize: 18, flex: 0, flexWrap: 'nowrap', width: 300, textAlign: 'center',fontWeight: '600', color:'#232882'}}>{content.series}, {content.year}</Text>
          <Text style={{fontSize: 32, flex: 0, flexWrap: 'nowrap', width: 400, textAlign: 'center',fontWeight: 'bold', color:'#232882'}}>{content.final}</Text>
          <Text style={{fontSize: 16, fontStyle: 'italic', fontWeight: '600', color:'#232882'}}>{content.venue}</Text>
        </View>
        <View style={s.modal_innings}>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 25,  flex: 0, flexWrap: 'nowrap', width: 300, textAlign: 'center',fontWeight: '800', color: 'white', textDecorationLine: 'underline'}}>Match Summary</Text>
          </View>
          <View style={s.modal_innings_score}>
            <Text style={s.modal_innings_score_text}>{content.firstInnings}</Text>
            <Text style={s.modal_innings_score_text}>{content.score1}</Text>
          </View>
          <View style={s.modal_innings_score}>
            <Text style={s.modal_innings_score_text}>{content.secondInnings}</Text>
            <Text style={s.modal_innings_score_text}>{content.score2}</Text>
          </View>
          <View style={{flex: 2, alignItems: 'center', justifyContent: 'space-evenly'}}>  
            <Text style={{fontSize: 16, flex: 0, flexWrap: 'nowrap', width: 300, textAlign: 'center',fontWeight: 'bold', backgroundColor: 'lightgreen', paddingLeft: 5, paddingRight: 5}}>{content.Result}</Text>
            <Text style={{fontSize: 16, flex: 0, flexWrap: 'nowrap', width: 400, textAlign: 'center', fontWeight: 'bold', color: 'white'}}>Player of the Match: {content.potm}</Text>
          </View>
          <View style={{flex: 2, alignSelf: 'flex-start', justifyContent: 'space-evenly'}}>
            <Text style={s.modal_innings_footer_text}>* Number of participants: {content.teams}</Text>
            <Text style={s.modal_innings_footer_text}>* Total number of matches played: {content.total}</Text>
            <Text style={s.modal_innings_footer_text}>* Minnows: {content.minnows}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );

const ImageSelction = (year) => {
  switch(year) {
    case 1975:
      return <Image source={require('../assets/wc75.jpg')} />;
    case 1979:
      return <Image source={require('../assets/wc79.jpg')} />;
    case 1983:
      return <Image source={require('../assets/wc83.png')} />;
    case 1987:
      return <Image source={require('../assets/wc87.png')} />;
    case 1992:
      return <Image source={require('../assets/wc92.jpg')} />;
    case 1996:
      return <Image source={require('../assets/wc96.png')} />;
    case 1999:
      return <Image source={require('../assets/wc99.png')} />;
    case 2003:
      return <Image source={require('../assets/wc03.png')} />;
    case 2007:
      return <Image source={require('../assets/wc07.png')} />;
    case 2011:
      return <Image source={require('../assets/wc11.jpg')} />;
    default:
      return <Image source={require('../assets/wc15.jpg')} />;
  }
  
}

export default class PastWinners extends React.Component {

  state = {
    winnersList,
    modalVisible: false,
    selectedItem: ''
  }

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

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
        <View style={{flex: 1}}>
          <ScrollView style={{backgroundColor: '#232882'}}>
            {this.state.winnersList.map(item => (
              <TouchableOpacity key={parseInt(item.year)} style={s.container} onPress={() => this.handleModalVisibility(item)}>
                <Text style={s.container_text}>{item.series}, {item.year}</Text>
              </TouchableOpacity>
              )
            )}
          </ScrollView>
          <WinnerModal 
            content={this.state.selectedItem} 
            display={this.state.modalVisible}
            closeModal={this.handleModalVisibility}/>
        </View>
      </React.Fragment>
    );
  }
}