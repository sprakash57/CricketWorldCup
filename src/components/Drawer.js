import React from 'react';
import {DrawerLayoutAndroid, View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// const styles = StyleSheet.create({
//     container: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       height: 60,
//       backgroundColor: 'green',
//       elevation: 4,
//     },
//     toolbarContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginHorizontal: 8,
//         flex: 1,
//     },
// });

export default class Drawer extends React.Component {

    navigationView = (
        <View style={{flex:  1}}>
          <View style={{flex: 2}}>
              <Image source={require('../assets/cup.png')} style={{flex: 1, width: undefined, height: undefined}}/>
          </View>
          <View style={{flex: 4, backgroundColor: '#232882'}} />
          <View style={{flex: 1, backgroundColor: 'yellow'}} />
        </View>
    );
    
    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={250}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => this.navigationView}>
                {/* <View style={styles.container}>
                    <View style={styles.toolbarContainer}>
                        <Icon name="md-menu" size={28} color="white" onPress={this.onActionSelected}/>
                        <Text>World Cup'19</Text>
                    </View>
                </View> */}
            </DrawerLayoutAndroid>
        );
    }
}