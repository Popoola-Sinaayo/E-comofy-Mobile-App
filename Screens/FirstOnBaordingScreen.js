import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import bag from "../assets/bag.png";
import { useNavigation } from "@react-navigation/native";
import ellipse1 from "../assets/Ellipse1.png";
import ellipse2 from "../assets/Ellipse2.png";
import ellipse3 from "../assets/Ellipse3.png";
const FirstOnBaordingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <View style={styles.mainImage}>
          <Image source={bag} style={{ width: 300, height: 300 }} />
        </View>
        <View style={styles.text}>
          <Text style={styles.mainText}>Online Shopping</Text>
          <Text style={styles.subText}> An online store that seeks to</Text>
          <Text style={styles.subText}>provide comfort for her users </Text>
        </View>
        <View style={styles.frameView}>
          <Image source={ellipse1} />
          <Image source={ellipse2} className="mr-1 ml-1" />
          <Image source={ellipse3} />
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("OnBoard2")}
        >
          <LinearGradient
            colors={["#87e49a", "#57be6c"]}
            start={{ x: 0.8, y: 1.0 }}
            end={{ x: 0.1, y: 1.0 }}
            locations={[0.6, 1.0]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default FirstOnBaordingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: "#FAFCFE",
    display: "flex",
    alignItems: "center",
  },
  containerChild: {
    width: "80%",
    alignItems: "center",
  },
  mainImage: {
    marginBottom: 30,
  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  mainText: {
    color: "#57be6c",
    fontSize: 40,
    fontWeight: "600",
    paddingBottom: 20,
    textAlign: "center",
    alignItems: "stretch",
  },
  subText: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  imageView: {
    width: "20%",
  },
  button: {
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  frame1: {
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 8,
    backgroundColor: "#57be6c",
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  frame2: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#87e49a",
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  frame3: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#c2fece",
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  frameView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    justifyContent: "center",
    marginBottom: 80,
    marginTop: 40,
  },
});
