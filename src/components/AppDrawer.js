import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

const s = StyleSheet.create({
    drawer_txt: {
        color: 'white', 
        fontSize: 17,
        marginLeft: 20,
        position: 'relative',
        top: -2
    }
});

const DrawerItem = ({icon, top, nav, content}) => (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 20, top:top}}>
        <Icon name={icon} size={20} color='#ea214d'/>
        <Text onPress={nav} style={s.drawer_txt}>{content}</Text>
    </View>
);

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
                <View style={{flex: 4, backgroundColor: "#272a89"}}>
                    <DrawerItem icon='calendar' nav={this.navigateToScreen('Home')} content='Fixtures' top={0}/>
                    <DrawerItem icon='team' nav={this.navigateToScreen('Team')} content='Teams' top={-40}/>
                    <DrawerItem icon='profile' nav={this.navigateToScreen('PointsTable')} content='Points Table' top={-80}/>
                    <DrawerItem icon='Trophy' nav={this.navigateToScreen('PastWinners')} content='Past winners' top={-120}/>
                    <DrawerItem icon='infocirlceo' nav={this.navigateToScreen('About')} content='About' top={-160}/>
                </View> 
            </View>
        );
    }
}