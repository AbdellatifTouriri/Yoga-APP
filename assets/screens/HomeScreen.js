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
  View,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import BottomTab from '../components/BottomTab.js';
import Header from '../components/Header.js';
import * as Progress from 'react-native-progress'; 
const headerImage = require('../images/header.jpg');
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

const HomeScreen= () => {
  return ( 
      <SafeAreaView style={styles.containerSafe}>
      <ScrollView    showsHorizontalScrollIndicator={false}  >
     
        <View style={styles.screen}>
          <Header />
          <Banner />
        </View>
        <View style={{marginHorizontal: '3%'}}>
          <Label>Your Activities</Label>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <Card data={item} index={index} />
            ))}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label>Fitness Video</Label>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                opacity: 0.5,
                fontSize: 12,
              }}>
              View All
            </Text>
               

          </View>
           <ScrollView horizontal  showsHorizontalScrollIndicator={false}  >
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <VideoPlay key={index} />
            ))}
          </View>
          </ScrollView>
        </View>
        </ScrollView>
      </SafeAreaView>
  
  );
};
export default HomeScreen;

const VideoPlay = () => (
  <View
    style={{
      borderRadius: 15,
      marginHorizontal: 12,
      shadowOffset: {width: -5, height: 3},
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      shadowRadius: 3,
      backgroundColor: '#fff',
    }}>
    <View style={{borderRadius: 10, overflow: 'hidden'}}>
      <ImageBackground
        source={couple}
        style={{
          height: 150,
          width: 300,
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
        Transformation
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
        <Image source={star} style={{height: 10, width: 10}} />
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
        <Image source={play} style={{height: 10, width: 10}} />
      </View>
      <Text style={{fontFamily: 'Poppins-Regular'}}>
        2 Hour Bulking Trainer
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
          <Image source={book} style={{height: 15, width: 15}} />
          {'   Beginner'}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: '#8860a2',
          }}>
          45 Min
        </Text>
      </View>
    </View>
  </View>
);

const Card = ({data, index}) => {
  return (
    <View
      style={{
        flex: 1,
        height: index === 1 ? 180 : 150,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: data.color,
        justifyContent: 'space-between',
        marginHorizontal: 8,
        borderRadius: 10,
        shadowColor: 'lightgrey',
        shadowOffset: {width: -5, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <Image source={data.image} style={{height: 25, width: 25}} />
      <View style={{alignSelf: 'center', margin: 5}}>
        <Progress.Circle
          size={50}
          progress={data.status / 100}
          showsText
          unfilledColor="#ededed"
          borderColor="#ededed"
          color={data.darkColor}
          direction="counter-clockwise"
          fill="white"
          strokeCap="round"
          thickness={5}
          style={{
            shadowColor: 'grey',
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 1,
          }}
          textStyle={{
            fontSize: 16,
            fontFamily: 'Poppins-Bold',
            fontWeight: 'bold',
          }}
        />
      </View>
      <View>
        <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>
          {'Day     1'}
        </Text>
        <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>
          {'Time   20 min'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>{data.name}</Text>
        <View
          style={{
            backgroundColor: data.lightColor,
            padding: 2,
            borderRadius: 10,
          }}>
          <Image
            source={next}
            style={{
              height: 12,
              width: 12,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>

    </View>

  );
};

const Banner = () => (
  <>
    <ImageBackground style={styles.banner} source={banner}>
      <View style={styles.bannerContainer}>
        <View style={styles.rowLabel}>
          <View style={styles.fireContainer}>
            <Image
              source={fire}
              resizeMode="contain"
              style={styles.fireImage}
            />
          </View>
          <Text style={styles.offer}>limited offer</Text>
        </View>
        <OfferText>30% Discount</OfferText>
        <OfferText>Flash Sales</OfferText>
      </View>
    </ImageBackground>
    <Image source={model} style={styles.model} resizeMode="contain" />
  </>
);

const OfferText = ({children}) => (
  <Text style={styles.offerText}>{children}</Text>
);


const Label = ({children}) => <Text style={styles.label}>{children}</Text>;
const styles = StyleSheet.create({
  container: {flex: 1},
  containerSafe: {
    paddingTop:30,
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

