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
    const { isLoading, error, ResponseJSON } = useFetch(urlNaruto);
    //console.log({ResponseJSON});
   let animechan = JSON.parse(JSON.stringify(ResponseJSON))
   //console.log( "anime : "+animechan.anime );
    //console.log("personaje : " +animechan.character);
    if (isLoading) return <T e='Loading...' />;
    if (error) return <T e='wait in other hours...' />;

   return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.title}> {animechan[1].anime} </Text>
        <Text></Text>
           <Text style={globalStyles.title}> {animechan[1].character} </Text>
           <Text style={globalStyles.title}> {animechan[1].quote} </Text>
           <Text></Text>
           <Text style={globalStyles.title}> {animechan[2].character} </Text>
           <Text style={globalStyles.title}> {animechan[2].quote} </Text>
       
        </View>
    );
}

/*  
   
 
 <FlatList
               data={{ResponseJSON}}
               renderItem={( item ) => <Text style={globalStyles.title}>{item} </Text>}
            keyExtractor={item => item.anime }

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