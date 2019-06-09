import React from 'react';
import {Linking, Image, StyleSheet} from 'react-native';
import Flag from 'react-native-round-flags';

const s = StyleSheet.create({
  photo: {
    width: 70, 
    height: 70
  }
})

export const openLink = (url) => Linking.openURL(url).catch(err => console.log('An error occured', err));

export const flagExtract = (team) => {
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