import {createDrawerNavigator} from "@react-navigation/drawer"
import MyStack from "./MyStack";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {

    return(
        <Drawer.Navigator>

            <Drawer.Screen name='Estudiantes' component={MyStack} options={{ headerShown:false,drawerPosition:0,}} />
        </Drawer.Navigator>

    );

}