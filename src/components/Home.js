import React from 'react';
import { View, Text } from 'react-native';

const Home = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

Home.navigationOptions = {
  drawer: () => ({
    label: 'Home',
  }),
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Items list',
  }),
};

export default Home;