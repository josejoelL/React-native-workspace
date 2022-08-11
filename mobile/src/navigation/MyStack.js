import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Wiki from "../screens/Wiki";
import { View, Text} from "react-native";
import { globalStyles } from "../styles/global";
import MyBottomTab, {MyBottonTab} from "./MyBottonTab";
const HomeStack = createStackNavigator(); 


const myConfig = {
  
   // title: 'Feed',
    headerShown: false,
   // headerTitleAlign: "center",
    presentation: "modal",
    gestureEnabled: true,
    animationEnabled: true,
   // animationTypeForReplace: 'push',
  //  keyboardHandlerEnabled: false,

   // header: ({ navigation, route, options, back }) => ( <CustomHeader title={route.name} />   ),


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
            initialRouteName="MyBottomTab"
           screenOptions={myConfig}
        >
            <HomeStack.Screen name='Root' component={MyBottomTab} />
            <HomeStack.Group screenOptions={{headerShown: true}}>
                <HomeStack.Screen name='Home' component={Home}  />
                <HomeStack.Screen name='Settings' component={Settings} options={{ title: "Config"}} />
                <HomeStack.Screen name='Wiki' component={Wiki} options={{ headerBackTitleVisible:false, headerTitle:" " }} />
            </HomeStack.Group>
        </HomeStack.Navigator>
         
    );
}