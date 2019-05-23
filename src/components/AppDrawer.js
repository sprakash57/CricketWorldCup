import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';

// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//     },
//     headerContainer: {
//         height: 150,
//     },
//     screenContainer: { 
//         paddingTop: 20,
//         width: '100%',
//     },
//     screenStyle: {
//         height: 30,
//         marginTop: 2,
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: '100%'
//     },
//     screenTextStyle:{
//         fontSize: 20,
//         marginLeft: 20, 
//         textAlign: 'center'
//     },
//     selectedTextStyle: {
//         fontWeight: 'bold',
//         color: '#00adff'
//     },
//     activeBackgroundColor: {
//         backgroundColor: 'grey'
//     }
// });

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
                    <Image source={require('../assets/cup.png')} style={{flex: 1, width: undefined, height: undefined}} />
                </View>
                <View style={{flex: 4, backgroundColor: "yellow"}}>
                    <View>
                        <Text onPress={this.navigateToScreen('Home')}>Fixtures</Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('Team')}>Teams</Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('Venue')}>Venue</Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('PointsTable')}>Table</Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('Ranking')}>ODI Ranking</Text>
                    </View>
                    <View>
                        <Text onPress={this.navigateToScreen('PastWinners')}>Past winners</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                <Text onPress={this.navigateToScreen('About')}>About</Text>
                </View>
            </View>
        );
    }
}