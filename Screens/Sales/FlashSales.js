import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import main from "../../assets/sneaker.png";
import fan from "../../assets/phone2.png";
import phone from "../../assets/mouse.png";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const FlashSales = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 items-center"
      style={{ backgroundColor: "#FAFCFE" }}
    >
      <ScrollView style={{ width: "95%" }} showsVerticalScrollIndicator={false}>
        <View className="mt-5 flex-row justify-between items-center">
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("AllSales")}
          >
            <View>
              <Icon
                name="chevron-back"
                type="ionicon"
                color="#101010"
                size={40}
              />
            </View>
          </TouchableNativeFeedback>
          <View>
            <Text className="text-2xl font-bold">e-comfy</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableNativeFeedback>
              <View className="mr-3">
                <Icon
                  name="notifications-outline"
                  type="ionicon"
                  color="#101010"
                  size={30}
                />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View>
                <Icon
                  name="cart-outline"
                  type="ionicon"
                  color="#101010"
                  size={30}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View className="mt-5">
          <Text className="font-bold text-3xl">Flash Sales</Text>
          <Text className="font-normal text-lg">
            Top products, incredible prices.
          </Text>
        </View>
        <View className="w-full flex-row items-center relative">
          <View className="absolute z-50 pt-5 pl-5">
            <View className="flex-row items-center">
              <Icon
                name="search-outline"
                type="ionicon"
                color="#101010"
                size={30}
              />
              <Text className="text-lg ml-5 mb-1">Search Items/Products</Text>
            </View>
          </View>

          <TextInput className="p-4 mt-5 rounded-lg flex-1 bg-gray-200"></TextInput>
          <View className="absolute right-0 z-50 pt-5 pr-5">
            <Icon
              name="close-circle"
              type="ionicon"
              color="#101010"
              size={30}
            />
          </View>
        </View>
        <View className="flex-row items-center justify-between mt-8">
          <TouchableOpacity onPress={() => navigation.navigate("AllSales")}>
            <View
              className="p-3 rounded-full"
              style={{ borderColor: "#57be6c", borderWidth: 1 }}
            >
              <Text>All Sales</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("TopDeals")}>
            <View
              className="p-3 rounded-full"
              style={{ borderColor: "#57be6c", borderWidth: 1 }}
            >
              <Text>Top deals</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("NewTrends")}>
            <View
              className="p-3 rounded-full"
              style={{ borderColor: "#57be6c", borderWidth: 1 }}
            >
              <Text>New Trends</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className="p-3 rounded-full"
              style={{ backgroundColor: "#57be6c" }}
            >
              <Text className="text-white">Flash Sales</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View
            className="mt-10 rounded-b-3xl rounded-t-3xl shadow-md shadow-black"
            style={{ backgroundColor: "#Fdfdfd" }}
          >
            <Image source={main} className="w-full h-60 rounded-t-3xl" />
            <View style={{ width: "100%" }}>
              <View className="pl-10 pb-5">
                <Text className="text-xl font-semibold">
                  Air Jordan Sneakers
                </Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                <Text>
                  elit. Dolor blandit nibh vitae euismod egestas tincidunt
                </Text>
                <Text>tellus sed </Text>
              </View>
              <View className="flex-row items-center justify-between ml-10 mr-10">
                <Text
                  className="text-lg font-bold"
                  style={{ color: "#57be6c" }}
                >
                  $150
                </Text>
                <TouchableOpacity>
                  <LinearGradient
                    colors={["#87e49a", "#57be6c"]}
                    start={{ x: 0.8, y: 1.0 }}
                    end={{ x: 0.5, y: 1.0 }}
                    locations={[0.3, 1.0]}
                    className="pt-3 pb-3 pr-5 pl-5 mb-3 rounded-full"
                  >
                    <Text className="text-white text-sm"> Add to Cart</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView>
            <View className="flex-row items-center justify-between mt-3"></View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-3">
                <Image source={phone} className="w-200 h-200" />
              </View>
              <View>
                <Image source={fan} />
              </View>
            </View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-3">
                <Image source={phone} className="w-200 h-200" />
              </View>
              <View>
                <Image source={fan} />
              </View>
            </View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-3">
                <Image source={phone} className="w-200 h-200" />
              </View>
              <View>
                <Image source={fan} />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </View>
  );
};

export default FlashSales;
