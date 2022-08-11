import {StyleSheet} from "react-native";
import { Colors } from "../constants/color";

export const globalStyles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: Colors.gray,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.light,
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
        backgroundColor: (200, 200, 200),
        alignItems: 'center',
        justifyContent: 'center',
    },
});