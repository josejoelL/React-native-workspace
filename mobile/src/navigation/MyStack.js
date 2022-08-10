import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Wiki from "../screens/Wiki";
import { View, Text} from "react-native";
import { globalStyles } from "../styles/global";

const HomeStack = createStackNavigator(); 


const myConfig = {
  
   // title: 'Feed',
    headerShown: true,
   // headerTitleAlign: "center",
    presentation: "modal",
   // gestureEnabled: true,
 //   animationEnabled: true,
   // animationTypeForReplace: 'push',
  //  keyboardHandlerEnabled: false,

    header: ({ navigation, route, options, back }) => (
        <CustomHeader title={route.name} />
    ),
  //  cardStyle: { backgroundColor: 'red' },
}

function CustomHeader({ title }) {
    return (
        <View
            style={globalStyles.customHeader}>
            <Text
                style={globalStyles.titleHeader}>
               {title}  
            </Text>
        </View>
    );
}

export default function MyStack() {
    return (
       
        <HomeStack.Navigator
            initialRouteName="Home"
           screenOptions={myConfig}
        >

            <HomeStack.Screen name='Home' component={Home} />
            <HomeStack.Screen name='Settings' component={Settings} options={{ title: "Config", headerShown: true, }} />
            <HomeStack.Screen name='Wiki' component={Wiki} options={{ title: "Wiki", headerShown: true, }} />

        </HomeStack.Navigator>
         
    );
}