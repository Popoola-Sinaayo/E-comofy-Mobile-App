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

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.mainText}>Reset Password</Text>
        <View style={styles.textContainer}>
          <Text style={styles.subText}>Set new password for your account.</Text>
          <Text style={styles.subText}> Password must be a minimum of</Text>
          <Text style={styles.subText}> 8 characters</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={{ marginBottom: 40 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput style={styles.inputTextField} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.inputText}>Confirm Password</Text>
            <TextInput style={styles.inputTextField} />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ResetSuccessScreen")}
          >
            <LinearGradient
              colors={["#87e49a", "#57be6c"]}
              start={{ x: 0.8, y: 1.0 }}
              end={{ x: 0.5, y: 1.0 }}
              locations={[0.3, 1.0]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Reset Password</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

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
  textContainer: {
    marginBottom: 60,
  },
  mainText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 36,
    marginBottom: 40,
  },
  subText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
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
    marginTop: "60%",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: "100%",
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
