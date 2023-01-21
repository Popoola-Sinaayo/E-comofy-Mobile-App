import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FirstOnBaordingScreen from "./Screens/FirstOnBaordingScreen";
import SecondOnBoardingScreen from "./Screens/SecondOnBoardingScreen";
import ThirdOnBoarding from "./Screens/ThirdOnBoarding";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import VerifyScreen from "./Screens/VerifyScreen";
import VerifiedScreen from "./Screens/VerifiedScreenHome";
import LoginScreen from "./Screens/LoginScreen";
import ForgotPassword from "./Screens/ForgotPasswordScreen";
import OtpScreen from "./Screens/OtpScreen";
import ResetPasswordScreen from "./Screens/ResetPasswordScreen";
import ResetSuccessScreen from "./Screens/ResetSuccessScreen";
// import MainScreen1 from "./Screens/MainScreen1";
import SalesNavigator from "./SalesNavigator";
import DrawerNavigation from "./DrawerNavigation";
import CartScreen from "./Screens/CartScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoard1"
          component={FirstOnBaordingScreen}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="OnBoard2"
          component={SecondOnBoardingScreen}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="OnBoard3"
          component={ThirdOnBoarding}
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verified"
          component={VerifiedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetSuccessScreen"
          component={ResetSuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sales"
          component={SalesNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
