import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

const s = StyleSheet.create({
    drawer_txt: {
        color: 'white', 
        fontSize: 20, 
        marginLeft: 20, 
        lineHeight: 24
    }
});

export default class DrawerLayout extends React.Component {

    navigateToScreen = (route) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });

            this.props.navigation.dispatch(navigateAction);
        }
    )
    
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 3}}>
                    <Image source={require('../assets/cup.jpg')} style={{flex: 1, width: undefined, height: undefined}} />
                </View>
                <View style={{flex: 4, backgroundColor: "#272a89",}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 20}}>
                        <Icon name='calendar' size={20} color='#ea214d'/>
                        <Text onPress={this.navigateToScreen('Home')} style={s.drawer_txt}>Fixtures</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 20, position: 'relative', top: -33}}>
                        <Icon name='team' size={20} color='#ea214d'/>
                        <Text onPress={this.navigateToScreen('Team')} style={s.drawer_txt}>Teams</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 20, position: 'relative', top: -66}}>
                        <Icon name='profile' size={20} color='#ea214d'/>
                        <Text onPress={this.navigateToScreen('PointsTable')} style={s.drawer_txt}>Points table</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 20, position: 'relative', top: -99}}>
                        <Icon name='Trophy' size={20} color='#ea214d'/>
                        <Text onPress={this.navigateToScreen('PastWinners')} style={s.drawer_txt}>Past winners</Text>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor:'#272a89', flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 20, alignItems: 'center'}}>
                    <Icon name='infocirlceo' size={20} color='#ea214d'/>
                    <Text onPress={this.navigateToScreen('About')} style={s.drawer_txt}>About</Text>
                </View>
            </View>
        );
    }
}