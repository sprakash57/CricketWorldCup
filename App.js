import React from 'react';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import Home from './src/components/Home';
import About from './src/components/About';
import PastWinners from './src/components/PastWinners';
import PointsTable from './src/components/PointsTable';
import Team from './src/components/Squad/Team';
import AppDrawer from './src/components/AppDrawer';

class App extends React.Component {

  state = {
    temp: ""
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
      <MyApp screenProps={{value: this.state.temp}}/>
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