import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform } from 'react-native';
import global, { globalStyles } from '../screens/Youkoso/styles/global';
import { useNavigation } from '@react-navigation/native';



export const T = (props) => {
    const { e } = props;
    return (
        <Text style={globalStyles.title}>{e}</Text> 
    );
}

export const W = (props) => {
    const { i,k } = props;
    let nav = i;
    const navigation = useNavigation();
    return (
        <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate(nav)}>{k}</Text>
    );
}