import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const home = require('../images/Home.png');
const yogapose = require('../images/yoga-pose.png');
const smartphone = require('../images/smartphone.png');
const lotus = require('../images/lotus.png');
const profile = require('../images/User.png');
const news = require('../images/news.png');

const BottomTab = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = (name) => {
          switch (name) {
            case 'Home':
              return home;
            case 'Poses':
              return yogapose;
            case 'Meditation':
              return lotus;
            case 'Profile':
              return profile;
            case 'News':
              return news;
            default:
              return home;
          }
        };

         

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabButton]}
          >
            <Image source={getIcon(route.name)} style={styles.icon} />
            {isFocused && <View style={styles.focusIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 10,
    left: 25,
    right: 25,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  focusIndicator: {
    position: 'absolute',
    width: '100%',
    height: 4,
    backgroundColor: '#8860a2',
    bottom: -8,
  },
});

export default BottomTab;
