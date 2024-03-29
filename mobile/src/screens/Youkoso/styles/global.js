import {StyleSheet} from "react-native";
import { Colors } from "../constants/colorY";

export const globalStyles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        //fontWeight: "bold",
        color: Colors.dark,
        padding: 20,
       
    },
    dialog: {
        fontSize: 18,
       // fontWeight: "bold",
        color: 'white',
        textAlign: 'left',
       // padding: 20,
        //backgroundColor: Colors.blue,
        //borderRadius: 50,
    },
    titledialog: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
        //padding: 30,
        //backgroundColor: Colors.blue,
      //  borderRadius: 50,
    },
    titleWiki: {
        fontSize: 20,
        //fontWeight: "bold",
        color: Colors.darkBlue,
        //backgroundColor: "white",
       // activeOpacity: 0
        
    },
    titleHeader: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.light,
    },
    customHeader: {
        
        //  height: '9.1%',
        width: '100%',
        //  flex: 1,
        backgroundColor: Colors.dark,
        padding: '8.5%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    cardContainer: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
});