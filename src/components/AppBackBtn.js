import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {s} from './Home/HomeStyle';

const AppBackBtn = ({closeModal}) => (
    <View style={s.modal_btn}>
        <TouchableWithoutFeedback onPress={closeModal}>
        <Icon name='ios-arrow-back' size={20} color='#232882' style={s.modal_btn_icon}/>
        </TouchableWithoutFeedback>
        <Text style={s.modal_btn_text} onPress={closeModal}>Back</Text>
    </View>
);

export default AppBackBtn;