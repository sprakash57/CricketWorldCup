import React from 'react';
//import { Image, Button, StyleSheet, View, StatusBar, ToolbarAndroid } from 'react-native';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import Home from './src/components/Home';
import About from './src/components/About';
import PastWinners from './src/components/PastWinners';
import PointsTable from './src/components/PointsTable';
import Ranking from './src/components/Ranking';
import Team from './src/components/Team';
import Venue from './src/components/Venue';
import AppDrawer from './src/components/AppDrawer';
//import Icon from 'react-native-vector-icons/Ionicons';
// import AppToolbar from './src/components/App-toolbar';

// const styles = StyleSheet.create({
//   toolbar: {
//     backgroundColor: '#232882',
//     height: 56
//   }
// });

// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./src/assets/burger.png')}
//         style={[styles.icon, {tintColor: tintColor}]} 
//       />
//     ),
//   };

//   handleDrawer = () => {
//     this.props.navigation.toggleDrawer();
//   }

//   render() {
//     return (
//       <View>
//         <StatusBar backgroundColor="#232882" barStyle="light-content"/>
//         <Icon.ToolbarAndroid style={styles.toolbar} title="ICC WC'19" titleColor="white"
//           navIconName="md-menu"
//           actions={[
//             { title: 'About', iconName: 'md-help', iconSize:30, show: 'never' },
//             { title: 'Share', iconName: 'md-help', iconSize:30, show: 'never' },
//             { title: 'Rate', iconName: 'md-help', iconSize:30, show: 'never' },
//           ]}
//           overflowIconName="md-more" 
//           onIconClicked={this.handleDrawer}/>
//       </View>
//     );
//   }
// }

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./src/assets/burger.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: Home},
    Venue: {screen: Venue},
    PointsTable: {screen: PointsTable},
    PastWinners: {screen: PastWinners},
    Team: {screen: Team},
    Ranking: {screen: Ranking},
    About: {screen: About}
  },
  {
    contentComponent: AppDrawer,
    drawerType: "slide"
  }
);

const MyApp = createAppContainer(AppDrawerNavigator);

class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}

export default App;