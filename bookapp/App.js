import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Home from "./Home";
import Favorites from "./Favorites";
import Profile from "./Profile"

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Books" component={Home} />
          <Tab.Screen name="Favorites" component={Favorites}/>
          <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
      )}

      {Platform.OS === "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Favorites" component={Favorites} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

