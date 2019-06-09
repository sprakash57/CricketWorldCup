import React from 'react';
import {View, Modal, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {s} from './HomeStyle';

const ModalHTHSection = ({team, best}) => (
    <View style={{flex:1, alignItems: 'center', backgroundColor: '#232882', elevation: 4}}>
        <View style={{paddingTop: 10}}>
            <Text style={{color: 'white', textAlign: 'center', flex: 0, width: 150, flexWrap: 'nowrap', fontSize: 22, fontWeight: 'bold'}}>{team}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex:1, paddingLeft: 10}}>
                <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>Role</Text>
                <Image source={require('../../assets/bat.png')} style={{width: 20, height: 20, marginBottom: 12}}/>
                <Image source={require('../../assets/ball.png')} style={{width: 20, height: 20, marginBottom: 12}}/>
                <Image source={require('../../assets/all.png')} style={{width: 20, height: 20, marginBottom: 12}}/>
            </View>
            <View style={{flex:2, alignItems: 'flex-start'}}>
                <Text style={{color: 'white', flex: 0, width: 200, fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>Player</Text>
                <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best ODI Batsman'].split(',')[0]}</Text>
                <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best ODI Bowler'].split(',')[0]}</Text>
                <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best Allrounder'].split(',')[0]}</Text>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
                <Text style={{color: 'white', flex: 0, textAlign: 'center',width: 200, fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>ODI Ranking</Text>
                <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best ODI Batsman'].split(',')[1]}</Text>
                <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best ODI Bowler'].split(',')[1]}</Text>
                <Text style={{color: 'white', fontSize: 16, marginBottom: 10}}>{best['Best Allrounder'].split(',')[1]}</Text>
            </View>
        </View>
    </View>
);

const HeadToHead = ({stats, display, closeModal}) => (
    <Modal visible={display} onRequestClose={closeModal} animationType='fade'>
        {display && (
        <View style={s.modal_container}>
            <View style={s.modal_btn}>
                <TouchableOpacity onPress={closeModal}>
                    <Icon name='ios-arrow-back' size={22} color='#232882' style={s.modal_btn_icon}/>
                </TouchableOpacity>
                <Text style={s.modal_btn_text} onPress={closeModal}>Back</Text>
            </View>
            <View style={s.modal_headers}>
                <Image source={require('../../assets/hth.png')} style={s.modal_headers_image}/>
                <Text style={s.modal_headers_text}>Head to Head</Text>
            </View>
            <View style={s.modal_stats}>
                <View style={{flex:1,}}>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', position: 'relative', top: -20}}>Stats</Text>
                    <Text style={{color: 'white', fontSize: 16}}>Last 5 ODIs</Text>
                    <Text style={{color: 'white', fontSize: 16}}>Last 5 encounters</Text>
                    <Text style={{color: 'white', fontSize: 16}}>Win against in WC</Text>
                    <Text style={{color: 'white', fontSize: 16}}>Finals played</Text>
                    <Text style={{color: 'white', fontSize: 16}}>World Cup title</Text>
                </View>
                <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 18, flex:0, width: 150, textAlign: 'center', flexWrap:'nowrap', fontWeight: 'bold',position: 'relative', top: -20}}>{stats.team1}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['Last 5 ODIs']}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['Last 5 encounters']}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['Win against in WC']}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['Finals played']}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t1['World Cup title']}</Text>
                </View>
                <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 18, flex:0, width: 150, textAlign: 'center', flexWrap: 'nowrap', fontWeight: 'bold',position: 'relative', top: -20}}>{stats.team2}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['Last 5 ODIs']}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['Last 5 encounters']}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['Win against in WC']}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['Finals played']}</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{stats.headToHead.t2['World Cup title']}</Text>
                </View>
            </View>
            <View style={s.modal_headers}>
                <Image source={require('../../assets/mvp.png')} style={s.modal_headers_image}/>
                <Text style={s.modal_headers_text}>Star players</Text>
            </View>
            <ModalHTHSection 
                team={stats.team1} 
                best={stats.headToHead.t1}
                />
            <ModalHTHSection 
                team={stats.team2} 
                best={stats.headToHead.t2}
                />
        </View>)}
    </Modal>
);

export default HeadToHead;
  