import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaView, View, Text, TextInput, Image, useEffect} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import * as firebase from '@react-native-firebase/app';

// var firebaseConfig = {
//   apiKey: "AIzaSyAJwlt4dwfSu6r3_oyEM6KbGb4wxxUaT5Y",
//   authDomain: "authfirebase-3d10b.firebaseapp.com",
//   projectId: "authfirebase-3d10b",
//   storageBucket: "authfirebase-3d10b.appspot.com",
//   messagingSenderId: "826649715268",
//   appId: "1:826649715268:web:cb466e870a8bed8e51d211",
//   measurementId: "G-R9FZMZSD4G"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();

export default class SignInScreen extends Component{
constructor(props){
  super(props)
  this.state = ({
    email: '',
    password: ''
  })
}

login = (email, password) => {
  try{
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
      console.log(user);
    })
  }
  catch(error) {
    console.log(error.toString());
  }
}

render() {
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{marginTop: 200}}>
          <View style={STYLES.inputContainer}>
            <TextInput placeholder="ID" style={STYLES.input}
              onChangeText={(email)=> this.setState(email)}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              onChangeText={(password)=> this.setState(password)}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')} style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign In
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
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
};
