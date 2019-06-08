import React from 'react';
import { View, StatusBar, StyleSheet, ToolbarAndroid, ToastAndroid, Share, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#232882',
    height: 56
  }
});

const handleShare = () => {
  Share.share({
    message: 'Track all the games this world cup and many more, Download this app: \n '+'https://play.google.com/store/apps/details?id=com.insu.sunny.cricketworldcup',
    title: "Cricekt World Cup'19"
  },
  {
    dialogTitle: 'Share'
  }
  );
}

const handleClicks = (position) => {
  if (position === 0) {
    handleShare();
  } else if (position === 1) {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.insu.sunny.cricketworldcup')
           .catch(err => ToastAndroid.showWithGravity('Check your internet', ToastAndroid.SHORT, ToastAndroid.BOTTOM));
  } else {
    Linking.openURL('https://play.google.com/store/apps/developer?id=Sunny+Prakash')
           .catch(err => ToastAndroid.showWithGravity('Check your internet', ToastAndroid.SHORT, ToastAndroid.BOTTOM));
  }
}

const AppToolbar = (props) => (
  <View>
    <StatusBar backgroundColor="#232882" barStyle="light-content"/>
    <Icon.ToolbarAndroid style={styles.toolbar} title="Cricket World Cup'19" titleColor="white"
      navIconName="md-menu"
      actions={[
        { title: 'Share', iconName: 'md-help', iconSize:20, show: 'never' },
        { title: 'Rate', iconName: 'md-help', iconSize:20, show: 'never' },
        { title: 'More apps', iconName: 'md-help', iconSize:20, show: 'never' },
      ]}
      overflowIconName="md-more" 
      onIconClicked={props.toggleDrawer}
      onActionSelected={handleClicks}/>
  </View>
);

export default AppToolbar;