import React from 'react';
import {Modal} from 'react-native';
import {WebView} from 'react-native-webview';
import AppBackBtn from './AppBackBtn';
import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';

const ScoreModal = ({id, display, closeModal}) => {
    let espn = `https://www.espncricinfo.com/series/8039/game/${id}`
    return (
        <Modal visible={display} animationType='fade' onRequestClose={closeModal}>
            <AppBackBtn closeModal={closeModal}/>
            <WebView 
                style={{flex: 1, position: 'relative', top: -56}}
                startInLoadingState={true}
                renderError={() => <ErrorScreen />}
                renderLoading={() => <LoadingScreen name="Loading score..." bgColor="white" txtColor="#232882"/>}
                originWhitelist={['*']}
                source={{uri:espn}}/>
        </Modal>   
    );
}

export default ScoreModal;