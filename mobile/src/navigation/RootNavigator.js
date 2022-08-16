import { NavigationContainer } from "@react-navigation/native";

import MyBottomTab from "./MyBottonTab";
import MyStack from "./MyStack";
import MyDrawer from "./MyDrawer";
export default function RootNavigator(){
    return (
     
        <NavigationContainer>  
           
           <MyDrawer > </MyDrawer>

        </NavigationContainer>
      
    );
} {/* <<MyBottomTab />  */}
             
            {/*   <MyDrawer/>    */}