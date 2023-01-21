import { createDrawerNavigator } from "@react-navigation/drawer";
import Cart from "./Screens/DrawerScreens/Cart";
import Category from "./Screens/DrawerScreens/Category";
import MyProfile from "./Screens/DrawerScreens/MyProfile";
import Settings from "./Screens/DrawerScreens/Settings";
import SpecialOffers from "./Screens/DrawerScreens/SpecialOffers";
import SalesNavigator from "./SalesNavigator";
import { Icon } from "@rneui/themed";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        drawerItemStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#57be6c",
          marginBottom: 20,
        },
        drawerActiveBackgroundColor: "white",
        drawerContentContainerStyle: { marginTop: 90 },
        drawerStyle: {
          width: "65%",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={SalesNavigator}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
          title: "Home",
          drawerIcon: () => (
            <Icon name="home" type="ionicon" color="#101010" size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
          drawerIcon: () => (
            <Icon
              name="cart-outline"
              type="ionicon"
              color="#101010"
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={MyProfile}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
          drawerIcon: () => (
            <Icon
              name="person-outline"
              type="ionicon"
              color="#101010"
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
          drawerIcon: () => (
            <Icon
              name="briefcase-outline"
              type="ionicon"
              color="#101010"
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Settings}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
          drawerIcon: () => (
            <Icon
              name="settings-outline"
              type="ionicon"
              color="#101010"
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Special Offers"
        component={SpecialOffers}
        options={{
          headerShown: false,
          animationTypeForReplace: "push",
          presentation: "modal",
          drawerIcon: () => (
            <Icon
              name="people-outline"
              type="ionicon"
              color="#101010"
              size={20}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
