import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import * as firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';

// var firebaseConfig = {
//   apiKey: "AIzaSyAJwlt4dwfSu6r3_oyEM6KbGb4wxxUaT5Y",
//   authDomain: "authfirebase-3d10b.firebaseapp.com",
//   projectId: "authfirebase-3d10b",
//   storageBucket: "authfirebase-3d10b.appspot.com",
//   messagingSenderId: "826649715268",
//   appId: "1:826649715268:web:cb466e870a8bed8e51d211",
//   measurementId: "G-R9FZMZSD4G"
// };
// if(!firebase.apps.length){
//   firebase.initializeApp(firebaseConfig);
// };

export default class SignUpScreen extends Component{
  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUp = (email, password) => {
    try {
      if(this.state.password.length<6) {
        alert('Enter At least Six Characters');
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    catch(error) {
      console.log(error.toString())
    }
  }

  render() {
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
       
        <View style={{marginTop: 50}}>
          <View style={STYLES.inputContainer}>
            <TextInput placeholder="Email" style={STYLES.input} 
              onChangeText={(email)=> this.setState(email)}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
              onChangeText={(password)=> this.setState(password)}
            />
          </View>
          <TouchableOpacity style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign Up
            </Text>
          </TouchableOpacity>
         
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
};

