import { NavigationContainer } from "@react-navigation/native";

import MyBottomTab from "./MyBottonTab";
import MyStack from "./MyStack";
export default function RootNavigator(){
    return (
     
        <NavigationContainer>  
            {/* <<MyBottomTab />  */}
              
            <MyStack />
             
        </NavigationContainer>
      
    );
}