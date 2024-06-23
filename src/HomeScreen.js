import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SliderCards from './componenets/SliderCards'
 const HomeScreen = ({ navigation }) => {
  const data = [
    { title: 'Pose 1' },
    { title: 'Pose 2' },
    { title: 'Pose 3' },
    // Add more pose data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Yoga Max</Text>
      <SliderCards data={data} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('YogaPoses')}>
        <Text style={styles.buttonText}>Explore Yoga Poses</Text>
      </TouchableOpacity>
    </View>
  );
};


export default HomeScreen;
