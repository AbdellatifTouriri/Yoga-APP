import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const images = [
  require('../images/couple.jpg'),
  require('../images/fire.png'),
  require('../images/couple.jpg'),
  // Add more images as needed
];

const TimerCircle = ({ remainingTime, duration }) => {
  const progress = (remainingTime / duration) * 100;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.timerContainer}>
      <Svg height="120" width="120">
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#f00"
          strokeWidth="10"
          fill="none"
        />
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#0f0"
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={(circumference * (100 - progress)) / 100}
          strokeLinecap="round"
          transform="rotate(-90, 60, 60)"
        />
      </Svg>
      <Text style={styles.timerText}>{remainingTime}</Text>
    </View>
  );
};

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(30); // Initial time in seconds
  const [timerRunning, setTimerRunning] = useState(false);
  const [slideshowEnded, setSlideshowEnded] = useState(false);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime === 1) {
            setCurrentImageIndex(prevIndex => {
              const newIndex = (prevIndex + 1) % images.length;
              if (newIndex === 0) {
                // Stop the timer and set the slideshow ended flag when the last image is reached
                setTimerRunning(false);
                setSlideshowEnded(true);
                return prevIndex;
              }
              return newIndex;
            });
            return 30; // Reset time to 30 seconds
          } else {
            return prevTime - 1;
          }
        });
      }, 1000); // Update every second
    }

    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleReplay = () => {
    setCurrentImageIndex(0);
    setRemainingTime(30);
    setTimerRunning(true);
    setSlideshowEnded(false);
  };

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setRemainingTime(30);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setRemainingTime(30);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images[currentImageIndex]}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {!slideshowEnded && (
          <TimerCircle remainingTime={remainingTime} duration={30} />
        )}
        {slideshowEnded && (
          <View style={styles.messageContainer}>
            <Text style={styles.endText}>End of slideshow</Text>
            <TouchableOpacity style={styles.button} onPress={handleReplay}>
              <Text style={styles.buttonText}>Replay</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.controlContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePrev}>
            <Ionicons
            name="play-skip-back-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Ionicons
            name="play-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={handleReplay}>

            <Ionicons
            name="repeat-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleStop}>
             <Ionicons
            name="stop-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
             <Ionicons
            name="play-skip-forward-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
           </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 60,
    left: Dimensions.get('window').width / 2 - 60,
  },
  timerText: {
    color: 'white',
    fontSize: 30,
    position: 'absolute',
  },
  messageContainer: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 30,
    left: Dimensions.get('window').width / 2 - 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  endText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  controlContainer: {
    position: 'absolute',
    bottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default App;
