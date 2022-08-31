import { NavigationContainer } from "@react-navigation/native";

import MyBottomTab from "./MyBottonTab";
import MyStack from "./MyStack";
import MyDrawer from "./MyDrawer";
import { QuoteProvider } from "../constants/Quiz";
export default function RootNavigator(){
    return (
    
          <QuoteProvider>
            <NavigationContainer>  
                
            <MyDrawer>
              
            </MyDrawer>

            </NavigationContainer>
        
        </QuoteProvider>
    );
} {/* <<MyBottomTab />  */}

             {/* <QuoteProvider>*/}
              {/*</QuoteProvider>*/ }
            {/*   <MyDrawer/>    */}