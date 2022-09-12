import * as React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton, getQuotes, animechan } from '../constants/Quiz';
import { ScrollView } from 'react-native-gesture-handler';
import { T } from '../constants/Texts';


export default function Quiz1() {
  
    const { isLoading, error, ResponseJSON } = getQuotes();

    const { quote1, setQuote1,
        quote2, setQuote2,
        quote3, setQuote3,
        quote4, setQuote4,
        quote5, setQuote5,
        quote6, setQuote6,
        quote7, setQuote7,
        quote8, setQuote8,
        quote9, setQuote9,
        quote10, setQuote10,
        character1, setCharacter1,
        character2, setCharacter2,
        character3, setCharacter3,

       

        character4, setCharacter4,
        character5, setCharacter5,
        character6, setCharacter6,
        character7, setCharacter7,
        character8, setCharacter8,
        character9, setCharacter9,
        character10, setCharacter10,
    } = React.useContext(animechan);
    

    if (isLoading) return <T e='Loading...' />;
    if (error) return <T e='Server saturated: play in other hour '/>;
    let quiz = JSON.parse(JSON.stringify(ResponseJSON))

    setQuote1( quiz[0].quote);
    setQuote2( quiz[1].quote);
    setQuote3( quiz[2].quote);
    setQuote4( quiz[3].quote);
    setQuote5( quiz[4].quote);
    setQuote6( quiz[5].quote);
    setQuote7( quiz[6].quote);
    setQuote8( quiz[7].quote);
    setQuote9( quiz[8].quote);
    setQuote10( quiz[9].quote);

    setCharacter1(quiz[0].character);
    setCharacter2( quiz[1].character);
    setCharacter3( quiz[2].character);

    setCharacter4(quiz[3].character);





    setCharacter5( quiz[4].character);
    setCharacter6( quiz[5].character);
    setCharacter7( quiz[6].character);
    setCharacter8( quiz[7].character);
    setCharacter9( quiz[8].character);
    setCharacter10( quiz[9].character);

    return (
        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz1 </Text>
            <ScrollView>
                <Text style={globalStyles.title}> {ResponseJSON[1].quote} </Text>
                <Text style={globalStyles.title}> {quote1} </Text>
                <Text style={globalStyles.title}> {character1} </Text>
            </ScrollView>
            <ContinueButton id="Quiz2" />
        </View>
    );
}