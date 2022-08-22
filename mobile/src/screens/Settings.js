import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Settings() {
    let uri ='https://animechan.vercel.app/api/random'
    fetch(uri).then(response => response.json()).then(quote => {
            
            //console.log(quote)
            console.log(quote.anime);
            console.log(quote.character);
            console.log(quote.quote);
        });

   return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> a </Text>


        </View>
    );
}