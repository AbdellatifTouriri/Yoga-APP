// HomeScreen.js
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,TouchableOpacity
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import BottomTab from '../components/BottomTab.js';
import Header from '../components/Header.js';
import * as Progress from 'react-native-progress'; 
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const headerImage = require('../images/lotus.png');
const notification = require('../images/Notification.png');
const banner = require('../images/BG.png');
const fire = require('../images/fire.png');
const model = require('../images/model.png');
const couple = require('../images/couple.jpg');
const cycle = require('../images/cycle.png');
const yoga = require('../images/yoga.png');
const walk = require('../images/walk.png');
const next = require('../images/next.png');
const play = require('../images/play.png');
const star = require('../images/Star.png');
const book = require('../images/Book.png');
const home = require('../images/Home.png');
const heart = require('../images/H.png');
const calendar = require('../images/Calender.png');
const profile = require('../images/User.png');
const plus = require('../images/Plus.png');
const smartphone= require('../images/smartphone.png')
const yogapose= require('../images/yoga-pose.png')
const lotus= require('../images/lotus.png')

 
const Sessions= () => {

  const navigation = useNavigation(); // Get navigation object
 
  return (
          <SafeAreaView style={styles.containerSafe}>
      <ScrollView    showscrollIndicator={false}  >
      
        <View style={{margin: '-2%',}}>
          
 
           <ScrollView      >
          <View style={{marginHorizontal:15,marginVertical:30}}>
            {data.map((item, index) => (
              <TouchableOpacity onPress={() => navigation.navigate('Session')}>
                <VideoPlay key={index} data ={item} style={{marginHorizontal:15,marginVertical:30}} />
              </TouchableOpacity>
            ))}
             {data.map((item, index) => (
              <VideoPlay key={index} data ={item} style={{marginHorizontal:15,marginVertical:30}}/>
            ))}
          </View>
          </ScrollView>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const VideoPlay = ({ data }) => (
  <TouchableOpacity>
    <View
      style={{
        borderRadius: 15,
        marginHorizontal: 12,
        marginVertical: 20,
        shadowOffset: { width: -5, height: 3 },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        backgroundColor: '#fff',
      }}>
      <View style={{ borderRadius: 10, overflow: 'hidden' }}>
        <ImageBackground
          source={data.image}
          style={{
            height: 300,
            width: 400,
              resizeMode: 'contain',
          }}>
          <LinearGradient
            colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60)']}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}></LinearGradient>
        </ImageBackground>
        <Text
          style={{
            position: 'absolute',
            bottom: 5,
            left: 10,
            fontFamily: 'Poppins-Regular',
            color: '#fff',
          }}>
          {data.title}
        </Text>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            padding: 5,
            right: 10,
            top: 10,
            borderRadius: 5,
          }}>
          <Image source={star} style={{ height: 10, width: 10 }} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 15,
        }}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#8860a2',
            padding: 10,
            right: 25,
            top: -15,
            borderRadius: 15,
            zIndex: 3,
          }}>
          <Image source={play} style={{ height: 10, width: 10 }} />
        </View>
        <Text style={{ fontFamily: 'Poppins-Regular' }}>
          {data.subtitle.split('\n')[0]}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12 }}>
            <Image source={book} style={{ height: 15, width: 15 }} />
            {'   ' + data.subtitle.split('\n')[0]}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: '#8860a2',
            }}>
            {data.time}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);


 const styles = StyleSheet.create({
  container: {flex: 1},
  containerSafe: { 
    flex: 1,

  },
  header: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {paddingHorizontal: 10, flex: 1, justifyContent: 'center'},
  bigTitle: {fontSize: 16, fontFamily: 'Poppins-Medium'},
  smallTitle: {fontSize: 10, fontFamily: 'Poppins-Regular', opacity: 0.6},
  image: {height: '100%', width: '100%'},
  fireImage: {height: 15, width: 15, alignSelf: 'center', margin: 5},
  banner: {
    marginTop: 20,
    padding: 30,
    resizeMode: 'contain',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bannerContainer: {flex: 1},
  label: {fontFamily: 'Poppins-Medium', fontSize: 20, marginVertical: 10},
  model: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10,
    height: '75%',
    width: '50%',
    transform: [{rotateY: '180deg'}],
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {margin: '3%'},
  offer: {color: 'white', fontFamily: 'Poppins-Regular', fontSize: 10},
  offerText: {color: 'white', fontSize: 16, fontFamily: 'Poppins-Regular'},

  rowLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fireContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const data = [
    { image: require('../data/categories/1.jpg'), title: 'Morning Stretch', subtitle: 'vinyasa Yoga\n    19 min', time: '19 min' },
    { image: require('../data/categories/2.jpg'), title: 'Twist And Balance It Out', subtitle: 'vinyasa Yoga\n    60 min', time: '60 min' },
    { image: require('../data/categories/3.jpg'), title: 'Hip Opening Yin', subtitle: 'yin Yoga\n    60 min', time: '60 min' },
    { image: require('../data/categories/4.jpg'), title: 'Bend Me Bind Me', subtitle: 'vinyasa Yoga\n    60 min', time: '60 min' },
    { image: require('../data/categories/5.jpg'), title: 'Night Practice', subtitle: 'hatha Yoga\n    40 min', time: '40 min' },
    { image: require('../data/categories/3.jpg'), title: 'Daily Morning', subtitle: 'vinyasa Yoga\n    46 min', time: '46 min' },
];
export default Sessions