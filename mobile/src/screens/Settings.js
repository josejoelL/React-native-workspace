import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

// create a drawer right or left where and the text of the quote and find the true the best you can 
// if its posible with image but i thinks its no t posible
// i prefer to use onfly text with css style and loke ring bot 10 pulls to score
//recomend of the creador is give them each time a lite bit of the tiitle

    
   


export default function Settings() {

    let requestSent = fetch('https://animechan.vercel.app/api/random');
    


    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> {requestSent} </Text>


        </View>
    );
}