import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here, such as validating credentials, authentication, etc.
    // For now, I'm just navigating to a hypothetical Home screen.
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../images/yogaProfile.png')}
            style={{ height: 350, width: 350, opacity: .8, transform: [{ rotate: '15deg' }] }}
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
        <TouchableOpacity
          onPress={handleLogin}
          style={{ backgroundColor: '#AD40AF', padding: 15, borderRadius: 10, width: '80%' }}
        >
          <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '700' }}>Login</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={{ color: '#AD40AF', marginLeft: 5 }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
