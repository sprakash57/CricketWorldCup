import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 22,
    },
    text: {
        fontWeight: '500',
        fontSize: 20,
        color: 'white',
    }
});

export default class Home extends Component {
    render() {
        const { title } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        );
    }
}