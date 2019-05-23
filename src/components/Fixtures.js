import React from 'react';
import { View, Text } from 'react-native';

const Fixtures = ({ navigation }) => (
  <View>
    <Text>Fixtures</Text>
  </View>
);

Fixtures.navigationOptions = {
  drawer: () => ({
    label: 'Fixtures',
  }),
  header: (navigation, defaultHeader) => ({
    ...defaultHeader,
    title: 'Items list',
  }),
};

export default Fixtures;