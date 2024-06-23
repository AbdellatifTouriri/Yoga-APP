import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";

// Colors
const white = "#fff";
const black = "#000";
const dark = "#626262";
const blue = "#1F41BB";
const gray = "#ECECEC";
const lightBlue = "#f1f4ff";

const Colors = {
  darkText: dark,
  text: black,
  background: white,
  primary: blue,
  onPrimary: white,
  active: blue,
  borderWithOpacity: "#1f41bb",
  lightPrimary: lightBlue,
  gray: gray,
};

// Font Sizes
const small = 14;
const medium = 16;
const large = 25;
const xLarge = 2;
const xxLarge = 35;

const FontSize = {
  small,
  medium,
  large,
  xLarge,
  xxLarge,
};

const { height } = Dimensions.get("window");

const DetailScreen = ({ route }) => {
  const { itemData } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image
            source={{ uri: itemData.url_png }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{itemData.english_name}</Text>
          <Text style={styles.title}>{itemData.sanskrit_name}</Text>
          <Text style={styles.title}>Translation name</Text>
          <Text style={styles.subtitle}>
            {itemData.translation_name}
          </Text>
          <Text style={styles.title}>Pose Description</Text>
          <Text style={styles.subtitle}>
            {itemData.pose_description}
          </Text>
          <Text style={styles.title}>Pose benefits</Text>
          <Text style={styles.subtitle}>
            {itemData.pose_benefits}
          </Text>
          <View style={{ height: 100 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: Colors.primary,
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: FontSize.medium,
    fontFamily: "Poppins-Regular",
    color: Colors.darkText,
    margin: 30,
  },
  image: {
    width: "100%",
    aspectRatio: 1, // Make the image responsive
    height: height * 0.3, // 30% of the screen height
    margin: 80,
    resizeMode: 'contain', // Make sure the image doesn't get distorted
  },
});

export default DetailScreen;
