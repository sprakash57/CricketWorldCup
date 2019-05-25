import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppToolbar from './AppToolbar';
import Icon from 'react-native-vector-icons/Ionicons';
import RadioGroup from 'react-native-radio-buttons-group';

const paytm = require('../assets/paytm.png');
const upi = require('../assets/upi.jpg');
const paypal = require('../assets/paypal.png');

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
  },

  about: {
    color: 'white',
    paddingTop: 30,
    fontSize: 35,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 2, height: 4},
    textShadowRadius: 10
  },

  photo: {
    marginTop: 30,
    height: 100,
    width:  100,
    borderRadius: 50,
  },

  name: {
    color: 'white',
    fontSize: 25,
    marginTop: 5,
    fontWeight: '800',
    fontFamily: 'monospace',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 10
  },

  bio: {
    color: 'white',
    fontSize: 15,
    fontWeight: "200",
  },

  social: {
    flex: 1,
    flexDirection: 'row',
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  more_apps: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    top: -30,
  },

  more_btn: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 5, height: 10},
    shadowRadius: 10,
  },

  message: {
    color: 'white',
    fontStyle: 'italic',
    paddingLeft: 20,
    paddingRight: 10
  },

  pay: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'black'
  },

  pay_method: {
    marginTop: 10,
    marginLeft: 6,
    display: 'flex',
    flexDirection: 'row',
    textAlignVertical: 'center'
  },

  pay_method_text: {
    textAlignVertical: 'auto', 
    fontSize: 18, 
    marginLeft: 10,
    marginBottom: 10
  }
})

const PaymentSection = ({icon, value}) => (
  <View style={styles.pay_method}>
    <Image source={icon} />
    <Text style={styles.pay_method_text} selectable={true} selectionColor='yellow'>{value}</Text>
  </View>
);

export default class About extends React.Component {

  state = {
    payMethod: '',
    payment: [
      {
        label: 'Paypal',
        size: 16,
      },
      {
        label: 'Paytm',
        size: 16,
      },
      {
        label: 'UPI',
        size: 16,
      },
    ]
  }

  handlePayment = () => {
    if (this.state.payMethod === 'Paytm') {
      return <PaymentSection icon={paytm} value='7044080165'/>
    } else if (this.state.payMethod === 'UPI') {
      return <PaymentSection icon={upi} value='sunnyprakash@icici'/>
    } else {
      return <PaymentSection icon={paypal} value='paypal.me/sprakash57'/>
    }
  }

  handleDrawer = () => {
    this.props.navigation.toggleDrawer();
  }

  handleRadioBtn = payment => {
    payment.forEach(item => {
      item.selected && this.setState({payMethod: item.label, payment})
    });
  }

  render() {
    return (
      <React.Fragment>
        <AppToolbar toggleDrawer={this.handleDrawer}/>
        <View style={{flex: 1, backgroundColor: '#232882'}}>
          <View style={styles.container}>
            <Text style={styles.about}>About me</Text>
            <Image source={require('../assets/me.jpg')} style={styles.photo}/>
            <Text style={styles.name}>Sunny Prakash</Text>
            <Text style={styles.bio}>Web Developer | Android | BIT Mesra</Text>
            <View style={styles.social}>
              <Icon name="logo-linkedin" size={35} color="orange" />
              <Icon name="logo-github" size={35} color="orange" />
              <Icon name="logo-chrome" size={35} color="orange" />
              <Icon name="md-mail" size={35} color="orange" />
            </View>
          </View>
          <View style={styles.more_apps}>
            <Text style={styles.message}>"Liked my work?! connect with me by clicking any of the above icons. 
              Send me your feedbacks/suggestion which i need to work on. Checkout my other works link down below."
            </Text>
            <Icon.Button name="logo-google" backgroundColor='#ea214d'>Click for More apps</Icon.Button>
            <View style={styles.pay}>
              <Icon.Button name="logo-android" backgroundColor='#ea214d'>Buy me a Coffee</Icon.Button>
              <RadioGroup
                flexDirection='row'
                radioButtons={this.state.payment} 
                onPress={this.handleRadioBtn} />
                {this.handlePayment()}
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}