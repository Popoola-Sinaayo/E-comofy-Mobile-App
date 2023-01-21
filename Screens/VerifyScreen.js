import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import verifyImage from "../assets/verify.png";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const VerifyScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.mainText}>Verify Your Account</Text>
        <View style={styles.textContainer}>
          <Text style={styles.subText}>
            A verification link has been sent to your{" "}
          </Text>
          <Text style={styles.subText}>
            email account el.ch****@gmail.com, click the{" "}
          </Text>
          <Text style={styles.subText}>link to verify your account</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image source={verifyImage} style={{ width: 150, height: 200 }} />
        </View>
        <View style={{ alignItems: "center", marginTop: 40, marginBottom: 40 }}>
          <Text>Didn't get a link ?</Text>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>
            Click here to resend
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Verified")}
        >
          <LinearGradient
            colors={["#87e49a", "#57be6c"]}
            start={{ x: 0.8, y: 1.0 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0.3, 1.0]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Verify account</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default VerifyScreen;

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
