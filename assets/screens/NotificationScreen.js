import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';

const NotificationScreen = () => {
  // Dummy notification data
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'cheack our New Updates' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Notifications</Text>
          {notifications.map(notification => (
            <TouchableOpacity
              key={notification.id}
              style={{
                backgroundColor: '#f0f0f0',
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}
              onPress={() => {
                // Handle notification press event here
              }}
            >
              <Text>{notification.message}</Text>
            </TouchableOpacity>
          ))}
          {notifications.length === 0 && (
            <Text style={{ marginTop: 20 }}>No notifications available.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
