import React from 'react';
import { View, StatusBar, StyleSheet, ToolbarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#232882',
    height: 56
  }
});

const AppToolbar = (props) => (
  <View>
    <StatusBar backgroundColor="#232882" barStyle="light-content"/>
    <Icon.ToolbarAndroid style={styles.toolbar} title="ICC WC'19" titleColor="white"
      navIconName="md-menu"
      actions={[
        { title: 'About', iconName: 'md-help', iconSize:20, show: 'never' },
        { title: 'Share', iconName: 'md-help', iconSize:20, show: 'never' },
        { title: 'Rate', iconName: 'md-help', iconSize:20, show: 'never' },
        { title: 'More apps', iconName: 'md-help', iconSize:20, show: 'never' },
      ]}
      overflowIconName="md-more" 
      onIconClicked={props.toggleDrawer}/>
  </View>
);

export default AppToolbar;