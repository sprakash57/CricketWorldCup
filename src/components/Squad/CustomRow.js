import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Flag from 'react-native-round-flags';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 18,
        fontStyle: 'italic',
    },
    photo: {
        height: 60,
        width: 60,
    },

    squad_btn: {
        borderRadius: 3, 
        backgroundColor: '#ea214d',
        paddingLeft: 5,
        width: 45,
        marginTop: 10,
        elevation: 3
    },

    star_parent: {
        flex: 1, 
        justifyContent: 'space-evenly'
    },

    star: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },

    ranking: {
        backgroundColor: '#ea214d',
        fontSize: 16,
        borderRadius: 5,
        alignItems: 'center',
        width: 25,
        height: 25,
        elevation: 2
    },

    ranking_text: {
        color: "white",
        fontSize: 16,
    },

    member_list: {
        backgroundColor: 'whitesmoke',
        paddingLeft: 5,
        paddingBottom: 5,
        marginTop: 0,
        marginLeft: 20,
        marginRight: 20,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },

    member_list_text: {
        margin: 3,
        fontSize: 15,
        fontWeight: '600',
        fontFamily: 'notoserif'
    }
});

const handleStars = (stats) => {

    let starArray = [];
    for (let i=0; i<5; i++) {
        starArray.push((i < parseInt(stats)) ? <Icon key={i} name='star' color='green' size={15}/> : <Icon key={i} name='star' color='#D3D3D3' size={15}/>);    
    }
    return starArray;  
}

const CustomRow = ({ country, code, members, rank, stats }) => {
    const [list, toggleList] = useState(false);

    const onPressButton = () => {
        list ? toggleList(false) : toggleList(true);
    }

    return (
        <View>
            <View style={styles.container}>
                { code !== 'WI' ? (<Flag code={code} style={styles.photo}/>) : <Image source={require('../../assets/WI.png')} style={styles.photo}/>}
                <View style={styles.container_text}>
                    <Text style={styles.title}>{country}</Text>
                    <TouchableOpacity onPress={onPressButton} style={styles.squad_btn}>
                        <Text style={{fontSize: 12, color: "white"}}>Squad</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.star_parent}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 16}}>ODI ranking: </Text>
                        <View style={styles.ranking}>
                            <Text style={styles.ranking_text}>{rank}</Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 13, fontStyle: 'italic'}}>Wins in last 5 ODIs</Text>
                    <View style={styles.star}>
                        {handleStars(stats)}
                    </View>    
                </View>    
            </View>
            {list && (
                <View style={{flex: 1, flexDirection: "column"}}>
                    <FlatList 
                        style={styles.member_list}
                        data={members}
                        keyExtractor={item => item}
                        renderItem={({item}) => <Text style={styles.member_list_text}>{item}</Text>}/>
                </View>)}
        </View>
    )
};

export default CustomRow;