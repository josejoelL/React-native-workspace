import * as React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import {useFetch} from '../hooks/useFetch';
    let url ='https://animechan.vercel.app/api/random'
    let urlNaruto = "https://animechan.vercel.app/api/quotes/anime?title=naruto"


    
export default function Settings() {
  const {isLoading, error, responseJSON} = useFetch(url);
   return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> {JSON.stringify(responseJSON)}</Text> 


        </View>
    );
}

/*
  React.useEffect(() => {
        fetch(uri)
        .then(res => res.json())
        .then(res => {  return res.json(); })
    },[])
    const res = fetch(uri).then(response => response.json()).then(quote => {
           console.log(quote.anime);
            console.log(quote.character);
            console.log(quote.quote);

        });
*/