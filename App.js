import React, {Component} from 'react';
import {ToastAndroid, View, StyleSheet} from 'react-native';
import Home from './src/components/Home';
import Icon from 'react-native-vector-icons/Ionicons';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu... right now',
// });

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'green',
    elevation: 4,
  },
  toolbarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 8,
      flex: 1,
  },
});

export default class App extends Component {

  onActionSelected = () => {
    ToastAndroid.showWithGravity("Menu pressed", ToastAndroid.LONG, ToastAndroid.BOTTOM); 
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbarContainer}>
          <Icon name="md-menu" size={28} color="white" onPress={this.onActionSelected}/>
          <Home title="World Cup'19" />
        </View>
      </View>
    );
  }
}
