import React from 'react';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import Home from './src/components/Home/Home';
import About from './src/components/About';
import PastWinners from './src/components/PastWinners';
import PointsTable from './src/components/PointsTable';
import Team from './src/components/Squad/Team';
import AppDrawer from './src/components/AppDrawer';
import {POINTS, FIXTURES} from './src/utils/constants';
import ErrorScreen from './src/components/ErrorScreen';
import LoadingScreen from './src/components/LoadingScreen';

class App extends React.Component {

  state = {
    table: '',
    schedule: '',
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
        <LoadingScreen loading="loading..." name="Cricekt World Cup'19" bgColor="#232882" txtColor="white"/>
      )
    } else if (error){
      return <ErrorScreen />
    }else {
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