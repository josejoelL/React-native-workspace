import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Reels from "../screens/Reels";
import Settings from "../screens/Settings";
import { Octicons } from '@expo/vector-icons';
const MyTab = createBottomTabNavigator();

export default function MyBottomTab () {
    return (

        <MyTab.Navigator initialRouteName="Home">
                <MyTab.Screen
                    name   = "Home"
                    component={Home}
                    
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon:({color})=> <Octicons name="home" size={24} color="black" />
                    }}
                    
                />
                <MyTab.Screen
                    name="Search"
                    component={Search}
                />
                <MyTab.Screen
                    name="Reels"
                    component={Reels}
                />
                <MyTab.Screen
                    name="Settings"
                    component={Settings}
                />
                <MyTab.Screen
                    name="Profile"
                    component={Profile}
                />
            </MyTab.Navigator>

    );

}