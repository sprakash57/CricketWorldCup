import React from 'react';
import {View, Text, Image} from 'react-native';

const LoadingScreen = ({loading, name, txtColor, bgColor}) => (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center',backgroundColor: bgColor}}>
        <Image source={require('../assets/spinner.gif')} style={{width: 110, height: 110}}/>
        <Text style={{flex:0,width: 400, fontFamily: 'san-serif',textAlign: 'center',fontSize: 24, fontWeight: 'bold', color: txtColor}}>{name}</Text>
        {loading && <Text style={{color: txtColor, position: 'relative', top: 220}}>{loading}</Text>}
    </View>
);

export default LoadingScreen;