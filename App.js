import React from 'react';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import Home from './src/components/Home/Home';
import About from './src/components/About';
import PastWinners from './src/components/PastWinners';
import PointsTable from './src/components/PointsTable';
import Team from './src/components/Squad/Team';
import AppDrawer from './src/components/AppDrawer';
import {schedule} from './src/app-data/schedule';
import table from './src/app-data/squad';
import {POINTS, FIXTURES} from './src/utils/constants';

class App extends React.Component {

  state = {
    table,
    schedule
  }

  componentDidMount() {
    console.disableYellowBox = true; //Disable all the warnings in the app
    let pointsReq = fetch(POINTS).then(resp => resp.json());
    let fixturesReq = fetch(FIXTURES).then(resp => resp.json());
    Promise.all([pointsReq, fixturesReq]).then(value => {
      this.setState({table: value[0], schedule: value[1]});
    }).catch(err => {
      console.log("An error occured", err);
    })
  }

  render() {
    return (
      <MyApp screenProps={{table: this.state.table, schedule: this.state.schedule}}/>
    );
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