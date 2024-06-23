import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SliderCards = ({ data }) => {
  const renderCardItem = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <Text>{item.title}</Text>
        {/* Add any additional card content here */}
      </View>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderCardItem}
      sliderWidth={300}
      itemWidth={200}
      layout={'default'}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});

export default SliderCards;
