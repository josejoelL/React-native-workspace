import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton, animechan } from '../constants/Quiz';
import { T } from '../constants/Texts';



export default function Quiz2() {
    //const { isLoading, error, ResponseJSON } = React.useContext(animechan);
    const { quote, setQuote,
            quote1, setQuote1,
            quote2, setQuote2,
            quote3, setQuote3,  
           character2
        }  = React.useContext(animechan);
    //if (isLoading) return <T e='Loading...' />;
   // if (error) return <T e='wait in other hours...' />;
    return (
        
        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz2 </Text>
            <ScrollView>
                
                <Text style={globalStyles.title}> {quote2} </Text>
                <Text style={globalStyles.title}> {character2} </Text>
            </ScrollView>


            <ContinueButton id="Quiz3" />
        </View>
        
    );
}   // onPress={() => { checkCharacter1(character) }}  ></Button>