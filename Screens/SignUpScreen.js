import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.mainText}>Sign Up</Text>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Name</Text>
            <TextInput style={styles.inputTextField} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput style={styles.inputTextField} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Passwrod</Text>
            <TextInput style={styles.inputTextField} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Confirm Password</Text>
            <TextInput style={styles.inputTextField} />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Verify")}
          >
            <LinearGradient
              colors={["#87e49a", "#57be6c"]}
              start={{ x: 0.8, y: 1.0 }}
              end={{ x: 0.5, y: 1.0 }}
              locations={[0.3, 1.0]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text style={styles.footerText}>By signing up you agree to</Text>
          <Text style={styles.footerText}>
            our
            <Text style={{ fontWeight: "600" }}> Terms of Service </Text>
            and
            <Text style={{ fontWeight: "600" }}>Conditions</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    fontWeight: "400",
  },
});
