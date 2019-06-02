import React from 'react';
import { View, StatusBar, StyleSheet, ToolbarAndroid, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#232882',
    height: 56
  }
});

const handleClicks = (position) => {
  Linking.openURL('https://play.google.com/store/apps/developer?id=Sunny+Prakash').catch(err => console.log('An error occured', err));
}

const AppToolbar = (props) => (
  <View>
    <StatusBar backgroundColor="#232882" barStyle="light-content"/>
    <Icon.ToolbarAndroid style={styles.toolbar} title="Cricket World Cup'19" titleColor="white"
      navIconName="md-menu"
      actions={[
        { title: 'Rate', iconName: 'md-help', iconSize:20, show: 'never' },
        { title: 'More apps', iconName: 'md-help', iconSize:20, show: 'never' },
      ]}
      overflowIconName="md-more" 
      onIconClicked={props.toggleDrawer}
      onActionSelected={handleClicks}/>
  </View>
);

export default AppToolbar;