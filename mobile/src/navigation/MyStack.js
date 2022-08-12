import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Wiki from "../screens/Wiki";
import Cote1 from "../screens/Youkoso/v1/Cote1";
import Cote2 from "../screens/Youkoso/v2/Cote2";
import Cote3 from "../screens/Youkoso/v3/Cote3";
import Cote4 from "../screens/Youkoso/v4/Cote4";
import Cote5 from "../screens/Youkoso/v5/Cote5";
import Cote6 from "../screens/Youkoso/v6/Cote6";
import Cote7 from "../screens/Youkoso/v7/Cote7";
import Cote7_5 from "../screens/Youkoso/v7_5/Cote7_5";
import Cote8 from "../screens/Youkoso/v8/Cote8";
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
                <HomeStack.Screen name='Cote1' component={Cote1} options={{ headerBackTitleVisible: false, headerTitle: " " }} />
                <HomeStack.Screen name='Cote2' component={Cote2} options={{ headerBackTitleVisible: false, headerTitle: " " }} />
                <HomeStack.Screen name='Cote3' component={Cote3} options={{ headerBackTitleVisible: false, headerTitle: " " }} />
                <HomeStack.Screen name='Cote4' component={Cote4} options={{ headerBackTitleVisible: false, headerTitle: " " }} />
                <HomeStack.Screen name='Cote5' component={Cote5} options={{ headerBackTitleVisible: false, headerTitle: " " }} />
                <HomeStack.Screen name='Cote6' component={Cote6} options={{ headerBackTitleVisible: false, headerTitle: " " }} />
                <HomeStack.Screen name='Cote7' component={Cote7} options={{ headerBackTitleVisible: false, headerTitle: " " }} />
                <HomeStack.Screen name='Cote7_5' component={Cote7_5} options={{ headerBackTitleVisible: false, headerTitle: " " }} />
                <HomeStack.Screen name='Cote8' component={Cote8} options={{ headerBackTitleVisible: false, headerTitle: " " }} />

            </HomeStack.Group>
        </HomeStack.Navigator>
         
    );
}