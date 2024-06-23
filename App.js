import 'react-native-gesture-handler';
import React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { SearchBar } from 'react-native-elements';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text, Dimensions, SafeAreaView, ScrollView, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';

import BottomTab from './assets/components/BottomTab';
import Session from './assets/components/Session';
import Sessions from './assets/components/Sessions';
import HomeScreen from './assets/screens/HomeScreen';
import PosesScreen from './assets/screens/PosesScreen';
import NewsScreen from './assets/screens/NewsScreen';
import ProfileScreen from './assets/screens/ProfileScreen';
import MeditationScreen from './assets/screens/MeditationScreen';
import LoginScreen from './assets/screens/LoginScreen';
import NotificationScreen from './assets/screens/NotificationScreen'; // Import the NotificationScreen
import DetailScreen from './assets/screens/DetailScreen'; // Import the NotificationScreen


const Tab = createBottomTabNavigator();
 

const Stack = createStackNavigator(); // Create a stack navigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Session" component={Session} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainTabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <BottomTab {...props} />}
    screenOptions={{ headerShown: false }}
  > 
     <Tab.Screen name="Sessions" component={Sessions} />
     <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Poses" component={PosesScreen} />
    <Tab.Screen name="Meditation" component={MeditationScreen} /> 
    <Tab.Screen name="News" component={NewsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

 
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
















