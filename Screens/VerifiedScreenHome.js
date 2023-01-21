import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import verifyImage from "../assets/success.png";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const VerifiedScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.mainText}>Account verification successful</Text>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image source={verifyImage} style={{ width: 160, height: 200 }} />
        </View>
        <View style={{ alignItems: "center", marginTop: 60, marginBottom: 90 }}>
          <Text>Your account verification has been successful</Text>
          <Text>click below to continue to Log in</Text>
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <LinearGradient
            colors={["#87e49a", "#57be6c"]}
            start={{ x: 0.8, y: 1.0 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0.3, 1.0]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Continue to Login</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default VerifiedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFCFE",
    alignItems: "center",
  },
  containerChild: {
    marginTop: 150,
    width: "90%",
  },
  mainText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 36,
    marginBottom: 30,
  },
  subText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  textContainer: {
    marginBottom: 30,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
