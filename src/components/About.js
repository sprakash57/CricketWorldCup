import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppToolbar from './AppToolbar';
import Icon from 'react-native-vector-icons/Ionicons';
import {openLink} from '../utils/index';
import {LINKEDIN, GITHUB, WEB, MAIL, MOREAPPS} from '../utils/constants';

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
  },

  about: {
    color: 'white',
    paddingTop: 30,
    flex: 0,
    width: 200,
    flexWrap: 'nowrap',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },

  photo: {
    marginTop: 30,
    height: 130,
    width:  130,
    borderRadius: 70,
  },

  name: {
    color: 'white',
    fontSize: 25,
    marginTop: 10,
    fontWeight: '800',
    fontFamily: 'monospace',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 10
  },

  bio: {
    flex: 0,
    width: 300,
    flexWrap: 'nowrap',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: "200",
  },

  social: {
    flex: 1,
    flexDirection: 'row',
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'relative',
    top: 30
  },

  more_apps: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  message: {
    color: 'white',
    fontStyle: 'italic',
    paddingLeft: 20,
    fontSize: 20,
    paddingRight: 10
  },
})

export default class About extends React.Component {

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  handleLink = (url) => {
    openLink(url);
  }

  render() {
    return (
      <React.Fragment>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <View style={{flex: 1, backgroundColor: '#232882'}}>
          <View style={styles.container}>
            <Text style={styles.about}>About me</Text>
            <Image source={require('../assets/me.jpg')} style={styles.photo}/>
            <Text style={styles.name}>Sunny Prakash</Text>
            <Text style={styles.bio}>Web Developer | Android | BIT Mesra</Text>
            <View style={styles.social}>
              <Icon name="logo-linkedin" size={45} color="orange" onPress={() => this.handleLink(LINKEDIN)}/>
              <Icon name="logo-github" size={45} color="orange" onPress={() => this.handleLink(GITHUB)}/>
              <Icon name="logo-chrome" size={45} color="orange" onPress={() => this.handleLink(WEB)}/>
              <Icon name="md-mail" size={45} color="orange" onPress={() => this.handleLink(MAIL)}/>
            </View>
          </View>
          <View style={styles.more_apps}>
            <Text style={styles.message}>"Liked my work?! connect with me by clicking any of the above icons. 
              Send me your feedbacks/suggestion which i need to work on. Checkout my other works link down below."
            </Text>
            <Icon.Button name="logo-google" backgroundColor='#ea214d' size={20} onPress={() => this.handleLink(MOREAPPS)}>
              <Text style={{flex:0, width: 100,flexWrap: 'nowrap',color: 'white', fontSize:16, fontWeight: 'bold'}}>More apps...</Text>
            </Icon.Button>
            <Text style={{color: 'white'}}>App version 2.1</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}