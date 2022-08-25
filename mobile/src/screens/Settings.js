import * as React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import {useFetch} from '../hooks/useFetch';
    let url ='https://animechan.vercel.app/api/random'
    let urlNaruto = "https://animechan.vercel.app/api/quotes/anime?title=naruto"
// import useSRW from 'srw'; me falta yarn add swr y ver la parte del add
//const { data, error } = useSRW(url, fetch(url).then(response => response.json()));
    
export default function Settings() {
  const {isLoading, error, ResponseJSON} = useFetch(url);
    console.log({ResponseJSON});
    
   return (
        <View style={globalStyles.ScreenContainer}>
            <Text > {JSON.stringify(ResponseJSON)} </Text> 


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