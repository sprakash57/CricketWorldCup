import React from 'react';
import {View, Text, Image} from 'react-native';

const ErrorScreen = () => (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../assets/all.png')}/>
        <Text style={{flex:0,width: 400, fontFamily: 'san-serif',textAlign: 'center',fontSize: 20, fontWeight: 'bold'}}>No internet access</Text>
        <Text style={{fontSize: 16,position: 'relative', top: 200}}>Re-open the app or connect to any network</Text>
    </View>
);

export default ErrorScreen;