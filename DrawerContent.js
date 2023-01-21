import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "@rneui/themed";
import { Text, View, Image, TouchableOpacity } from "react-native";
import cart from "./assets/cart.png";

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ width: "80%", alignItems: "center" }}>
        <View
          style={{
            marginLeft: 5,
            marginRight: 20,
            marginBottom: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <View>
              <Icon
                name="close-outline"
                type="ionicon"
                color="#101010"
                size={30}
                style={{ marginLeft: 20 }}
              />
            </View>
          </TouchableOpacity>
          <Image source={cart} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginLeft: -20,
            }}
          >
            e-comofy
          </Text>
        </View>
      </View>
      <DrawerItem
        label={() => <Text style={{ fontSize: 16 }}>My Profile</Text>}
        onPress={() => props.navigation.navigate("Home")}
        icon={() => {
          return (
            <Icon
              name="person-outline"
              type="ionicon"
              color="#101010"
              size={25}
            />
          );
        }}
        style={{ borderBottomColor: "#57be6c", borderBottomWidth: 1 }}
      />
      <DrawerItem
        label={() => <Text style={{ fontSize: 16 }}>Special Offers</Text>}
        onPress={() => props.navigation.navigate("Home")}
        icon={() => {
          return (
            <Icon
              name="briefcase-outline"
              type="ionicon"
              color="#101010"
              size={20}
            />
          );
        }}
        style={{ borderBottomColor: "#57be6c", borderBottomWidth: 1 }}
      />
      <DrawerItem
        label={() => <Text style={{ fontSize: 16 }}>Categories</Text>}
        onPress={() => props.navigation.navigate("Home")}
        icon={() => {
          return (
            <Icon
              name="apps-outline"
              type="ionicon"
              color="#101010"
              size={25}
            />
          );
        }}
        style={{ borderBottomColor: "#57be6c", borderBottomWidth: 1 }}
      />
      <DrawerItem
        label={() => <Text style={{ fontSize: 16 }}>Settings</Text>}
        onPress={() => props.navigation.navigate("Home")}
        icon={() => {
          return (
            <Icon
              name="settings-outline"
              type="ionicon"
              color="#101010"
              size={25}
            />
          );
        }}
        style={{ borderBottomColor: "#57be6c", borderBottomWidth: 1 }}
      />
      <DrawerItem
        label={() => <Text style={{ fontSize: 16 }}>About Us</Text>}
        onPress={() => props.navigation.navigate("Home")}
        icon={() => {
          return (
            <Icon
              name="people-outline"
              type="ionicon"
              color="#101010"
              size={25}
            />
          );
        }}
        style={{ borderBottomColor: "#57be6c", borderBottomWidth: 1 }}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
