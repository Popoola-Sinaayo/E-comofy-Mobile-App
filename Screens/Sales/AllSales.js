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
import main from "../../assets/main.png";
import ellipse from "../../assets/dot1.png";
import ellipse2 from "../../assets/dot2.png";
import fan from "../../assets/fan.png";
import phone from "../../assets/phone.png";
import { useNavigation } from "@react-navigation/native";

const AllSales = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 items-center"
      style={{ backgroundColor: "#FAFCFE" }}
    >
      <ScrollView style={{ width: "95%" }} showsVerticalScrollIndicator={false}>
        <View className="mt-5 flex-row justify-between items-center">
          <TouchableNativeFeedback onPress={() => navigation.toggleDrawer()}>
            <View>
              <Icon
                name="reorder-three-outline"
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
          <Text className="font-bold text-3xl">Welcome Sinaayo</Text>
          <Text className="font-normal text-lg">
            What will you like to shop today?
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
          <TouchableOpacity>
            <View
              className="p-3 rounded-full"
              style={{ backgroundColor: "#57be6c" }}
            >
              <Text className="text-white">All Sales</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate("FlashSales")}>
            <View
              className="p-3 rounded-full"
              style={{ borderColor: "#57be6c", borderWidth: 1 }}
            >
              <Text>Flash Sales</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View className="mt-10">
            <Image source={main} className="w-full h-60" />
            <View style={{ width: "100%", alignItems: "center" }}>
              <View className="flex-row items-center">
                <Image source={ellipse2} />
                <Image source={ellipse} className="ml-1 mr-1" />
                <Image source={ellipse2} className="mr-1" />
                <Image source={ellipse2} />
              </View>
            </View>
          </View>
          <ScrollView>
            <View className="flex-row items-center justify-between mt-3">
              <Text className="font-medium text-lg">Hot Deals</Text>
              <View className="flex-row items-center">
                <Text className="text-lg">See all</Text>
                <Icon
                  name="chevron-forward"
                  type="ionicon"
                  color="#101010"
                  //   size={30}
                />
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

export default AllSales;
