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
import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const OtpScreen = () => {
  const navigation = useNavigation();
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.mainText}>Enter OTP</Text>
        <View style={styles.textContainer}>
          <Text style={styles.subText}>Please enter the OTP code</Text>
          <Text style={styles.subText}>sent to your phone number</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            marginBottom: 40,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <TextInput
              style={styles.inputTextField}
              autoFocus={true}
              onChangeText={() => ref2.current.focus()}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputTextField}
              ref={ref2}
              onChangeText={() => ref3.current.focus()}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputTextField}
              ref={ref3}
              onChangeText={() => ref4.current.focus()}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputTextField}
              ref={ref4}
              onChangeText={() => navigation.navigate("ResetPasswordScreen")}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={{ alignItems: "center", marginTop: 40, marginBottom: 40 }}>
          <Text>Didn't get a link ?</Text>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>
            Click here to resend
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ResetPasswordScreen")}
          >
            <LinearGradient
              colors={["#87e49a", "#57be6c"]}
              start={{ x: 0.8, y: 1.0 }}
              end={{ x: 0.5, y: 1.0 }}
              locations={[0.3, 1.0]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;

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
    borderBottomWidth: 2,
    textAlign: "center",
    width: 60,
    fontSize: 30,
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
