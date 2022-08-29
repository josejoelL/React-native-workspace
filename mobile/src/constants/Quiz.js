import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform,TouchableOpacity } from 'react-native';
import global, { globalStyles } from '../screens/Youkoso/styles/global';
import { useNavigation } from '@react-navigation/native';
import { pfps } from '../screens/Youkoso/character/data';
import { Colors } from '../screens/Youkoso/constants/colorY';

//primero check 
export const ContinueButton = (props) => {
    const navigation = useNavigation();
    const {id } = props;

    return (

        <TouchableOpacity style = {{
            backgroundColor: 'green',
            padding:10,
            marginTop: '20%',
            width: '50%',
            alignSelf: 'center',
            borderRadius: '5px',

        }}
        
            onPress={() => navigation.navigate(id)}
            
            >
        <Text style={{
            color: 'white',
            fontWeight: "bold",
            fontSize: 20,
            textAlign: 'center',

        }}>Continue</Text>
       
        </TouchableOpacity>
    );
}