import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton, animechan } from '../constants/Quiz';
import { T } from '../constants/Texts';

import { getRandomCharacters } from '../constants/CharacterRandom';
import { RadioButton } from '../constants/Card';
export default function Quiz3() {
    
    const { quote, setQuote,
        quote1, setQuote1,
        quote2, setQuote2,
        quote3, setQuote3,
        character2, character3,
    
    } = React.useContext(animechan);
    
    
    let v1 = getRandomCharacters();
    let v2 = getRandomCharacters();
    let v3 = character3;
    let v4 = getRandomCharacters();
   
    const [option, setOption] = useState(null);
 const data = [
        { id:0, value: v1 },
        { id: 1, value: v2 },
        { id: 2, value: v3 },
        { id: 3, value: v4 },
    ];
    return (

        <View style={globalStyles.ScreenContainer} >
            <View style={{ flex: 2 }}  > 
                <Text style={globalStyles.title}> Quiz3 </Text>
                <ScrollView>

                    <Text style={globalStyles.title}> {quote3} </Text>
                 
            
                </ScrollView>
            </View>
        
            <View style={{ flex: 2 , flexDirection: 'row' }}  > 
              
                <RadioButton data={data}  />
               
            </View>
           
           <ContinueButton id="Quiz4" />
           <Text/>
        </View>

    );
}   