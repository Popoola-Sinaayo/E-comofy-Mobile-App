import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import facebook from "../assets/facebook.jpg";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.mainText}>Login</Text>
        <KeyboardAvoidingView behavior="padding" style={{ marginBottom: 40 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Name</Text>
            <TextInput style={styles.inputTextField} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput style={styles.inputTextField} />
          </View>

          <View style={styles.extraInput}>
            <TouchableOpacity onPress={() => navigation.navigate("Verify")}>
              <View>
                <Text style={{ fontWeight: "600" }}>Remember Me</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <View>
                <Text style={{ fontWeight: "600" }}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Drawer")}
          >
            <LinearGradient
              colors={["#87e49a", "#57be6c"]}
              start={{ x: 0.8, y: 1.0 }}
              end={{ x: 0.5, y: 1.0 }}
              locations={[0.3, 1.0]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text style={styles.footerText}>Or continue with</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <View
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <TouchableNativeFeedback>
              <View
                style={{
                  backgroundColor: "white",
                  shadowOpacity: 1,
                  shadowColor: "#171717",
                  shadowOffset: { width: 10, height: 10 },
                  borderRadius: 10,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 40,
                  paddingRight: 40,
                }}
              >
                <Image source={facebook} style={{ width: 30, height: 50 }} />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  backgroundColor: "white",
                  shadowOpacity: 1,
                  shadowColor: "#171717",
                  shadowOffset: { width: 10, height: 10 },
                  borderRadius: 10,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 40,
                  paddingRight: 40,
                }}
              >
                <Image source={google} style={{ width: 36, height: 40 }} />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View
                style={{
                  backgroundColor: "white",
                  shadowOpacity: 1,
                  shadowColor: "#171717",
                  shadowOffset: { width: 10, height: 10 },
                  borderRadius: 10,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 40,
                  paddingRight: 40,
                }}
              >
                <Image source={apple} style={{ width: 35, height: 46 }} />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    marginBottom: 40,
  },
  extraInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputText: {
    marginBottom: 3,
  },
  inputTextField: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 30,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 60,
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
  footerText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
});
