import { Audio } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, SafeAreaView, ScrollView, Image,  Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import BottomTab from '../components/BottomTab.js';
import Header from '../components/Header.js';
import { SearchBar } from 'react-native-elements';
import jsonData from '../data/datalistmusic.json';

const musicData = [
  { id: 1, title: 'Track 1', source: require('../data/music/five.mp3') },
  { id: 2, title: 'Track 2', source: require('../data/music/saad.mp3') },
  { id: 3, title: 'Track 3', source: require('../data/music/saad.mp3') },
  // Add more tracks as needed
];

export default function App() {
  const [sound, setSound] = useState(null);

  async function playSound(source) {
    try {
      stopSound()
      if (sound) {
        // Stop currently playing sound if any
        await sound.stopAsync();
      }
      // Load the selected audio file
      const { sound } = await Audio.Sound.createAsync(source);
      // Play the audio
      await sound.playAsync();
      setSound(sound);
    } catch (error) {
      console.log('Error playing sound: ', error);
    }
  }

  async function stopSound() {
    try {
      if (sound) {
        await sound.stopAsync();
      }
    } catch (error) {
      console.log('Error stopping sound: ', error);
    }
  }

 

  return (
     <SafeAreaView style={styles.containerSafe}>
      <View style={styles.screen}>
          <Header /> 
        </View>
     <View style={{ flex: 1,  alignItems: 'center' }}>
      {musicData.map((item) => (
        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
          <Text style={{ flex: 1 }}>{item.title}</Text>
          <Button title="Play" onPress={() => playSound(item.source)} />
          <Button title="Stop" onPress={stopSound} />
        </View>
      ))}
    </View> 
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  containerSafe: {
    paddingTop: 30,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scene: {
    width: '100%',
    padding: 2
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusted to space between
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  lastItem: {
    justifyContent: 'flex-start', // Reset justifyContent for the last item
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});