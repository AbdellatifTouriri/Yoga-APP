import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, SafeAreaView, ScrollView, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from '../components/BottomTab.js';
import Header from '../components/Header.js';
import Sessions from '../components/Sessions.js';
import { SearchBar } from 'react-native-elements';
import jsonData from '../data/data.json';
import { useNavigation } from '@react-navigation/native';

const CustomFirstRoute = ({ data, searchQuery, saveToFavorite, removeFromFavorite }) => {
  const [savedStatus, setSavedStatus] = useState({});
  const navigation = useNavigation(); // Access the navigation object
const navigateToDetailsScreen = (item) => {
    navigation.navigate('Detail', { itemData: item });
  };
  useEffect(() => {
    const fetchSavedStatus = async () => {
      const allKeys = await AsyncStorage.getAllKeys();
      const status = {};
      for (const key of allKeys) {
        status[key] = true;
      }
      setSavedStatus(status);
    };
    fetchSavedStatus();
  }, []);

  const isItemSaved = (itemId) => {
    return savedStatus[itemId] || false;
  };

  const filteredData = data.filter(item =>
    item.english_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.scene}>
      <View style={styles.container}>
        {filteredData.map((item, index) => (
          <View key={item.id} style={[styles.item, index === filteredData.length - 1 && styles.lastItem]}>
            <TouchableOpacity   style={styles.itemContent} onPress={() => navigateToDetailsScreen(item)}>
              <Image source={{ uri: item.url_png }} style={styles.image} />
              <Text style={styles.title}>{item.english_name}</Text>
            </TouchableOpacity>

            {isItemSaved(item.id.toString()) ? (
              <TouchableOpacity onPress={() => removeFromFavorite(item.id.toString())}>
                <Image source={require('../images/unsaved.png')} style={styles.icon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => saveToFavorite(item.id.toString(), item)}>
                <Image source={require('../images/saved.png')} style={styles.icon} />
              </TouchableOpacity>
            )}
          </View>

        ))}

      </View>
    </View>
  );
};

const SecondRoute = () => (
  <View style={[styles.scene]}>
    <Sessions />
  </View>
);

const ThirdRoute = ({ searchQuery, favoritePoses, removeFromFavorite }) => {
  const filteredFavorites = favoritePoses.filter(([key, value]) =>
    JSON.stringify(value).toLowerCase().includes(searchQuery.toLowerCase())
  );
 const navigation = useNavigation(); // Access the navigation object
const navigateToDetailsScreen = (item) => {
    navigation.navigate('Detail', { itemData: item });
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      {filteredFavorites.length === 0 ? (
        <Text style={styles.noDataText}>No favorites found</Text>
      ) : (
        filteredFavorites.map(([key, value], index) => (
          <View key={key} style={[styles.item, index === filteredFavorites.length - 1 && styles.lastItem]}>
            <TouchableOpacity   style={styles.itemContent} onPress={() => navigateToDetailsScreen(value)}>
             
              <Image source={{ uri: value.url_png }} style={styles.image} />
              <Text style={styles.title}>{value.english_name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeFromFavorite(key)}>
              <Image source={require('../images/unsaved.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const initialLayout = { width: Dimensions.get('window').width };

const PosesScreen = ( ) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Poses', title: 'Poses' },
    { key: 'Sesions', title: 'Sesions' },
    { key: 'Favorits', title: 'Favorits' },
  ]);

  const [data, setData] = useState(null);
  const [favoritePoses, setFavoritePoses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = require('../data/data.json');
        setData(response);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  const removeFromFavorite = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      loadAllData();
    } catch (error) {
      console.error(error);
    }
  };

  const saveToFavorite = async (key, item) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(item));
      loadAllData();
    } catch (error) {
      console.error(error);
    }
  };

  const loadAllData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      const parsedResult = result.map(([key, value]) => [key, JSON.parse(value)]);
      setFavoritePoses(parsedResult);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const renderScene = SceneMap({
    Poses: () => <CustomFirstRoute data={data} searchQuery={searchQuery} saveToFavorite={saveToFavorite} removeFromFavorite={removeFromFavorite} />,
    Sesions: SecondRoute,
    Favorits: () => <ThirdRoute favoritePoses={favoritePoses} searchQuery={searchQuery} removeFromFavorite={removeFromFavorite} />,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#fff' }}
      style={{ backgroundColor: '#e7e3ff' }}
      renderLabel={({ route, focused }) => (
        <Text style={{ color: focused ? '#8860a2' : 'black', margin: 8 }}>{route.title}</Text>
      )}
    />
  );

  const updateSearch = query => {
    setSearchQuery(query);
  };

  if (data === null) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.screen}>
        <Header />
      </View>
      <View style={styles.container}>
        <SearchBar
          placeholder="Search..."
          onChangeText={updateSearch}
          value={searchQuery}
          containerStyle={{ backgroundColor: '#FFF', marginVertical: 5, marginHorizontal: 15, borderRadius: 20, borderColor: '#e7e3ff' }}
          inputContainerStyle={{ backgroundColor: '#FFF' }}
        />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

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
    padding: 2,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  lastItem: {
    justifyContent: 'flex-start',
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
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default PosesScreen;
