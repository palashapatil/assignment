import 'react-native-gesture-handler';
import React from 'react';
import SignInScreen from './app/src/views/screens/SignInScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './app/src/views/screens/SignUpScreen';
import WelcomeScreen from './app/src/views/screens/WelcomeScreen';
import Headerbar from './app/src/views/Components/Headerbar';
import HomeScreen from './app/src/views/screens/HomeScreen';
import BookingScreen from './app/src/views/screens/BookingScreen';
import MessageScreen from './app/src/views/screens/MessageScreen';
import NewsScreen from './app/src/views/screens/NewsScreen';
import AccountScreen from './app/src/views/screens/AccountScreen';
import Hotel from './app/src/views/screens/AccountScreen';
import Tour from './app/src/views/screens/AccountScreen';
import Car from './app/src/views/screens/AccountScreen';
import Flight from './app/src/views/screens/AccountScreen';
import Cruise from './app/src/views/screens/AccountScreen';
import Bus from './app/src/views/screens/AccountScreen';
import Event from './app/src/views/screens/AccountScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'bookmark' : 'bookmark';
          } else if (route.name === 'Message') {
            iconName = focused ? 'mail' : 'mail';
          } else if (route.name === 'News') {
            iconName = focused ? 'document' : 'document';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Booking' component={BookingScreen} />
      <Tab.Screen name='Message' component={MessageScreen} />
      <Tab.Screen name='News' component={NewsScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />

    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: true}}
          // options={({navigation, route}) => ({
          //   headerTransparent: true,
          //   title: 'SignIn',
          //   headerLeft: () => {
          //     return (
          //       <Headerbar icon={'arrow-left'} onPress={navigation.goBack} />
          //     );
          //   },
          // })}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: true}} />
        <Stack.Screen name="Hotel" component={Hotel} options={{headerShown: false}} />
        <Stack.Screen name="Tour" component={Tour} options={{headerShown: false}} />
        <Stack.Screen name="Car" component={Car} options={{headerShown: false}} />
        <Stack.Screen name="Flight" component={Flight} options={{headerShown: false}} />
        <Stack.Screen name="Cruise" component={Cruise} options={{headerShown: false}} />
        <Stack.Screen name="Bus" component={Bus} options={{headerShown: false}} />
        <Stack.Screen name="Event" component={Event} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={tabNav} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
