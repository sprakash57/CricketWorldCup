import React from 'react';
import { View, StyleSheet, Share } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {openLink} from '../utils/index';
import {RATE, MOREAPPS} from '../utils/constants';

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
    openLink(RATE);
  } else {
    openLink(MOREAPPS);
  }
}

const AppToolbar = (props) => (
  <View>
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