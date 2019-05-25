import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Flag from 'react-native-round-flags';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const CustomRow = ({ country, code, members }) => {
    const [list, toggleList] = useState(false);

    const onPressButton = () => {
        console.log('list', list);
        list ? toggleList(false) : toggleList(true);
    }

    return (
        <React.Fragment>
            <View style={styles.container}>
                { code !== 'WI' ? (<Flag code={code} style={styles.photo}/>) : <Image source={require('../../assets/WI.png')} style={styles.photo}/>}
                <View style={styles.container_text}>
                    <Text style={styles.title}>
                        {country}
                    </Text>
                </View>
                <TouchableOpacity onPress={onPressButton}>
                    <Icon name="ios-arrow-dropdown" size={20} />
                </TouchableOpacity>
            </View>
            {list && (<View style={{flex: 1, flexDirection: "column"}}>
                <FlatList 
                    data={members}
                    renderItem={({item}) => <Text>{item}</Text>}/>
            </View>)}
        </React.Fragment>
    )
};

export default CustomRow;