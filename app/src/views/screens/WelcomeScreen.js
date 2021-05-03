import React, { Component } from "react";
import { SafeAreaView, View, Text, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import auth from "@react-native-firebase/auth";
import COLORS from "../../consts/color";
import STYLES from "../../styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import SwiperComponent from "../Components/Swiper";

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signIn = () => {
    this.props.navigation.navigate('SignIn')
  }

 
  render() {
    return (
      <SafeAreaView
        style={{
          paddingHorizontal: 20,
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 150 }}>
            <View style={{ height: 200, width: 200, alignSelf: "center" }}>
              <SwiperComponent />
            </View>
            <TouchableOpacity onPress={this.signIn} style={STYLES.btnPrimary}>
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Login with Google
              </Text>
            </TouchableOpacity>
           
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignIn")}
              style={STYLES.btnPrimary1}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: COLORS.light, fontWeight: "bold" }}>
              Haven't registered yet?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
                Join Now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
