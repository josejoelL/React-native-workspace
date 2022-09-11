import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton, animechan } from '../constants/Quiz';
import { T } from '../constants/Texts';


export default function Quiz3() {
    
    const { quote, setQuote,
        quote1, setQuote1,
        quote2, setQuote2,
        quote3, setQuote3,
        character2, character3
    } = React.useContext(animechan);
    
    return (

        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz3 </Text>
            <ScrollView>

                <Text style={globalStyles.title}> {quote3} </Text>
                <Text style={globalStyles.title}> {character3} </Text>
            </ScrollView>


            <ContinueButton id="Quiz4" />
        </View>

    );
}   