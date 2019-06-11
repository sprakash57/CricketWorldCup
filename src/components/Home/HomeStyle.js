import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    day_container: {
      flex:1, 
      width: 370, 
      marginTop: 5,
      marginLeft: 10,
      marginRight: 5,
      marginBottom: 5,
      backgroundColor: 'white'
    },
  
    day_container_text: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      padding: 5,
    },
  
    day_match: {
      backgroundColor: '#ea214d',
      fontSize: 16,
      borderRadius: 15,
      alignItems: 'center',
      width: 25,
      height: 25,
      elevation: 6
    },
  
    day_flag: {
      flex: 3, 
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      alignItems: 'center',
    },
  
    day_team: {
      flex: 1,
      alignItems: 'center'
    },
  
    day_country: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-around'
    },
  
    schedule_text: {
      fontSize: 18, 
      fontWeight: 'bold', 
      flexWrap: 'nowrap',
      width: 200,
      color: 'white',
      paddingLeft: 10
    },
    modal_container: {
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start'
    },
    modal_btn:{
      position: 'relative',
      top: 12,
      left: 10,
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 30,
  
    },
    modal_btn_text: {
      fontSize: 20, 
      width: 70,
      color:'#232882', 
      fontWeight: 'bold'
    },
    modal_btn_icon: {
      position: 'relative', 
      top: 3, 
      marginRight: 10,
    },
    modal_headers: {
      backgroundColor: '#ea214d', 
      display: 'flex',
      flex: 0,
      flexDirection: 'row',
      width: 220, 
      marginBottom: 15, 
      borderBottomRightRadius:20, 
      borderTopRightRadius: 20, 
      elevation: 4
    },
    modal_headers_text: {
      fontSize: 22, 
      color: 'white', 
      fontWeight: 'bold',
      flex: 0,
      width: 200,
      flexWrap: 'nowrap',
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20
    },
    modal_headers_image: {
      width: 20, 
      height: 20, 
      position: 'relative', 
      top: 17,
      left: 5
    },
    modal_stats: {
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'center',
      backgroundColor: '#232882', 
      padding: 5, 
      marginBottom: 15,
    }
  });