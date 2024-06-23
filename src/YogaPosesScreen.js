import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YogaPosesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Yoga Poses</Text>
      {/* Add list/grid of yoga poses here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default YogaPosesScreen;
