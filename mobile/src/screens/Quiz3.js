import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton, animechan } from '../constants/Quiz';
import { T } from '../constants/Texts';
//the creathor of the api suggest to do an app where you need to adivinate the character
//just with letters and the past of time give tips, 
// i want to do something like duolingo the radio button
// the soup of letters 

export default function Quiz3() {
    //const { isLoading, error, ResponseJSON } = React.useContext(animechan);
    const { quote, setQuote,
        quote1, setQuote1,
        quote2, setQuote2,
        quote3, setQuote3,
        character2, character3
    } = React.useContext(animechan);
    //if (isLoading) return <T e='Loading...' />;
    // if (error) return <T e='wait in other hours...' />;
    return (

        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz3 </Text>
            <ScrollView>

                <Text style={globalStyles.title}> {quote3} </Text>
                <Text style={globalStyles.title}> {character3} </Text>
            </ScrollView>


            <ContinueButton id="Quiz3" />
        </View>

    );
}   // onPress={() => { checkCharacter1(character) }}  ></Button>