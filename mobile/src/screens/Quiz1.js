import * as React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton, getQuotes, animechan } from '../constants/Quiz';
import { ScrollView } from 'react-native-gesture-handler';
import { T } from '../constants/Texts';


export default function Quiz1() {
  
    const { isLoading, error, ResponseJSON } = getQuotes();

    const { quote, setQuote,    
    } = React.useContext(animechan);
    

    if (isLoading) return <T e='Loading...' />;
    if (error) return <T e='Server saturated: play in other hour '/>;
    let quiz = JSON.parse(JSON.stringify(ResponseJSON))
    setQuote(quiz[1].quote);

    return (
        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz1 </Text>
            <ScrollView>
                <Text style={globalStyles.title}> {ResponseJSON[1].quote} </Text>
                <Text style={globalStyles.title}> {quote} </Text>
            </ScrollView>
            <ContinueButton id="Quiz2" />
        </View>
    );
}