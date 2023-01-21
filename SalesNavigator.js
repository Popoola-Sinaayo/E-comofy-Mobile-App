import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllSales from "./Screens/Sales/AllSales";
import FlashSales from "./Screens/Sales/FlashSales";
import NewTrends from "./Screens/Sales/NewTrends";
import TopDeals from "./Screens/Sales/TopDeals";
const SalesNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllSales"
        component={AllSales}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="FlashSales"
        component={FlashSales}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="NewTrends"
        component={NewTrends}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="TopDeals"
        component={TopDeals}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default SalesNavigator;
