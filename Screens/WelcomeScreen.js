import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import home from "../assets/home.png";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Image
          source={home}
          style={{ width: 200, height: 250, marginBottom: 50 }}
        />
        <View>
          <Text style={styles.mainText}>Welcome</Text>
          <Text style={styles.subText}>
            Log in or Sign up. By signing in, you agree to our
          </Text>
          <Text style={styles.subText}>
            <Text style={{ fontWeight: "600" }}>Terms of Service </Text>
            and
            <Text style={{ fontWeight: "600" }}> Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Login")}
          >
            <LinearGradient
              colors={["#87e49a", "#57be6c"]}
              start={{ x: 0.8, y: 1.0 }}
              end={{ x: 0.1, y: 1.0 }}
              locations={[0.6, 1.0]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SignUp")}
          >
            <View style={styles.buttonWhite}>
              <Text style={styles.buttonWhiteText}>Sign Up</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFCFE",
    flex: 1,
    alignItems: "center",
  },
  containerChild: {
    marginTop: 150,
    width: "100%",
    alignItems: "center",
  },
  mainText: {
    fontWeight: "600",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 22,
  },
  subText: {
    textAlign: "center",
    fontWeight: "400",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 60,
  },
  buttonWhite: {
    padding: 15,
    borderRadius: 10,
    width: "100%",
    borderColor: "#57be6c",
    borderWidth: 2,
  },
  buttonWhiteText: {
    textAlign: "center",
    color: "#57be6c",
    fontSize: 20,
    fontWeight: "500",
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
