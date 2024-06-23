import React, { useState, useEffect } from 'react';
 
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
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

 
const Header = () => {
  const [fullName, setFullName] = useState("Jane");
  const navigation = useNavigation(); // Get navigation object

  useEffect(() => {
    const loadFullName = async () => {
      try {
        const storedData = await AsyncStorage.getItem('registrationData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setFullName(parsedData?.fullName);
        }
      } catch (error) {
        console.error('Error loading registration data:', error);
      }
    };
    loadFullName();
  }, []);

  return (
    <View style={styles.header}>
      <ImageContainer image={headerImage} />
      <HeaderTitle fullName={fullName} onPress={() => navigation.navigate('Login')}/>
      <TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
<Ionicons
            name="notifications-outline"
            size={30}
            color="red"
            fontSize="bold"
            style={{ marginRight: 5 }}
          />
                    </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const ImageContainer = ({ image, height = '100%', width = '100%' }) => (
 <TouchableOpacity><View style={styles.imageContainer}>
    <Image source={image} style={[styles.image, { height, width }]} />
  </View>
  </TouchableOpacity> 
);

const HeaderTitle = ({ fullName }) => (
  <View style={styles.title}>
    <Text style={styles.bigTitle}>Hi, {fullName}</Text>
    <Text style={styles.smallTitle}>stay soon to our new update</Text>
  </View>
);

 
 
const style = {
  TouchableOpacityHeader : {
     flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {flex: 1},
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
  {
    name: 'Cycling',
    status: 85,
    image: cycle,
    lightColor: '#f8e4d9',
    color: '#fcf1ea',
    darkColor: '#fac5a4',
  },
  {
    name: 'Walking',
    status: 25,
    image: walk,
    lightColor: '#d7f0f7',
    color: '#e8f7fc',
    darkColor: '#aceafc',
  },
  {
    name: 'Yoga',
    status: 85,
    image: yoga,
    lightColor: '#dad5fe',
    color: '#e7e3ff',
    darkColor: '#8860a2',
  },
];

