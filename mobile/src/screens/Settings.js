import * as React from 'react';
import { View, Text,FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import {useFetch} from '../hooks/useFetch';
import { T } from '../constants/Texts';
    let url ='https://animechan.vercel.app/api/random'
    let urlNaruto = "https://animechan.vercel.app/api/quotes/anime?title=naruto"
// import useSRW from 'srw'; me falta yarn add swr y ver la parte del add
//const { data, error } = useSRW(url, fetch(url).then(response => response.json()));
//
    
export default function Settings() {
    const { isLoading, error, ResponseJSON } = useFetch(url);
    //console.log({ResponseJSON});
   let animechan = JSON.parse(JSON.stringify(ResponseJSON))
   console.log( "anime : "+animechan.anime );
    console.log("personaje : " +animechan.character);
    if (isLoading) return <T e='Loading...' />;
    if (error) return <T e='wait in other hours...' />;

   return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.title}> {animechan.anime} </Text>
        <Text style={globalStyles.title}> {animechan.character} </Text>
       <Text style={globalStyles.title}> {animechan.quote } </Text>
       
        </View>
    );
}

/*  

 <FlatList
           data={responseJSON.anime}
           renderItem={({ item }) => <Text>{item} </Text>}
           keyExtractor={item => item.character }
        />



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