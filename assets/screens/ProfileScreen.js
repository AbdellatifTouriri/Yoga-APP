import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const loadRegistrationData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('registrationData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setFullName(parsedData.fullName);
          setEmail(parsedData.email);
          setPassword(parsedData.password);
          setConfirmPassword(parsedData.confirmPassword);
        }
      } catch (error) {
        console.error('Error loading registration data:', error);
      }
    };
    loadRegistrationData();
  }, []);

  const handleRegistration = async () => {
    if (!fullName.trim()) {
      alert('Please enter your full name.');
      return;
    }

    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!password) {
      alert('Please enter your password.');
      return;
    }

    if (!confirmPassword) {
      alert('Please confirm your password.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const registrationData = {
        fullName,
        email,
        password,
        confirmPassword
      };
      await AsyncStorage.setItem('registrationData', JSON.stringify(registrationData));

      Alert.alert(
        'Success',
        'Registration successful!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );

      // Additional logic to handle registration
      // For example: sending data to server, navigation, etc.
    } catch (error) {
      console.error('Error saving registration data:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', marginTop: 30 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../images/yogaProfile.png')}
            style={{ height: 400, width: 400, opacity: .8, transform: [{ rotate: '15deg' }] }}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}
        >
          Register
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Image source={require('../images/google.png')} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Image source={require('../images/facebook.png')} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Image source={require('../images/twitter.png')} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>
        </View>

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or, register with email ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 20,
          }}
        >
          <Ionicons
            name="person-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Full Name"
            style={{ flex: 1, paddingVertical: 0 }}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 20,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email ID"
            keyboardType="email-address"
            style={{ flex: 1, paddingVertical: 0 }}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 20,
          }}
        >
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={{ flex: 1, paddingVertical: 0 }}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 20,
          }}
        >
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={{ flex: 1, paddingVertical: 0 }}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity
          onPress={handleRegistration}
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              color: '#fff',
            }}
          >
            Register
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 150 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
