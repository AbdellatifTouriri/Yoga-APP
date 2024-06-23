import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Linking } from 'react-native';
import { Audio } from 'expo-av';
import { Snackbar } from 'react-native-paper';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
 
const NewsScreen = () => {
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [sound, setSound] = useState();

const fetchQuote = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('https://zenquotes.io/api/quotes/yoga');
    const data = await response.json();
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex].q);
      setAuthor(data[randomIndex].a);
    } else {
      // If no yoga-related quotes were found, display a default message
      setQuote('No yoga-related quotes found.');
      setAuthor('Unknown');
    }
  } catch (error) {
    console.error('Error fetching yoga quote:', error);
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    fetchQuote();
  }, []);
 
  const copyToClipboard = () => {
    Clipboard.setString(quote);
    Snackbar.show({
      text: 'Quote copied!',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  const tweetNow = () => {
    const url = 'https://twitter.com/intent/tweet?text=' + quote;
    Linking.openURL(url);
  };

const shareOnWhatsApp = () => {
  const message = `"${quote}" - ${author}`;
  const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
  Linking.openURL(url)
    .then(() => console.log('WhatsApp opened successfully'))
    .catch((error) => console.error('Error opening WhatsApp:', error));
};


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5372F0' }}>
      <StatusBar barStyle="light-content" />
      <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '600', color: '#333', marginBottom: 20 }}>
          Quote of the Day
        </Text>
        <FontAwesome5 name="quote-left" style={{ fontSize: 20, marginBottom: -12 }} color="#000" />
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}>
          {quote}
        </Text>
        <FontAwesome5 name="quote-right" style={{ fontSize: 20, textAlign: 'right', marginTop: -20, marginBottom: 20 }} color="#000" />
        <Text style={{ textAlign: 'right', fontWeight: '300', fontStyle: 'italic', fontSize: 16, color: '#000' }}>
          —— {author}
        </Text>
        <TouchableOpacity
          onPress={fetchQuote}
          style={{
            backgroundColor: isLoading ? 'rgba(83, 114, 240, 0.7)' : 'rgba(83, 114, 240, 1)',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{isLoading ? 'Loading...' : 'New Quote'}</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
       
          <TouchableOpacity
            onPress={shareOnWhatsApp}
            style={{
              borderWidth: 2,
              borderColor: '#5372F0',
              borderRadius: 50,
              padding: 15,
            }}>
            <FontAwesome name="whatsapp" size={22} color="#5372F0" />
          </TouchableOpacity>
             <TouchableOpacity
            onPress={tweetNow}
            style={{
              borderWidth: 2,
              borderColor: '#5372F0',
              borderRadius: 50,
              padding: 15,
            }}>
            <FontAwesome name="twitter" size={22} color="#5372F0" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewsScreen;
