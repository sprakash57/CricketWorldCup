import React from 'react';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import {Image, View, Text} from 'react-native';
import Home from './src/components/Home/Home';
import About from './src/components/About';
import PastWinners from './src/components/PastWinners';
import PointsTable from './src/components/PointsTable';
import Team from './src/components/Squad/Team';
import AppDrawer from './src/components/AppDrawer';
import {schedule} from './src/app-data/schedule';
import table from './src/app-data/table';
import {POINTS, FIXTURES} from './src/utils/constants';

class App extends React.Component {

  state = {
    table,
    schedule,
    isLoading: true,
    error: null
  }

  componentDidMount() {
    console.disableYellowBox = true; //Disable all the warnings in the app
    let pointsReq = fetch(POINTS).then(resp => resp.json());
    let fixturesReq = fetch(FIXTURES).then(resp => resp.json());
    Promise.all([pointsReq, fixturesReq]).then(value => {
      this.setState({table: value[0], schedule: value[1], isLoading: false});
    },
    (error) => {
      this.setState({isLoading: false, error});
    }
    )
  }

  render() {
    const {isLoading, error, table, schedule} = this.state;
    if (isLoading) {
      return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#232882'}}>
          <Image source={require('./src/assets/spinner.gif')} style={{width: 120, height: 120}}/>
          <Text style={{flex:0,width: 400, fontFamily: 'san-serif',textAlign: 'center',fontSize: 30, fontWeight: 'bold', color: 'white'}}>Cricket World Cup'19</Text>
          <Text style={{fontSize: 16,color: 'white', position: 'relative', top: 290}}>Loading...</Text>
        </View>
      )
    } else {
      return (
        <MyApp screenProps={{table, schedule}}/>
      );
    }
    
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: Home},
    PointsTable: {screen: PointsTable},
    PastWinners: {screen: PastWinners},
    Team: {screen: Team},
    About: {screen: About}
  },
  {
    contentComponent: AppDrawer,
    drawerType: "slide"
  }
);

const MyApp = createAppContainer(AppDrawerNavigator);

export default App;