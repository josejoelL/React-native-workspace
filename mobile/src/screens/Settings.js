import * as React from 'react';
import { View, Text,FlatList,Scrollview } from 'react-native';
import { globalStyles } from '../styles/global';
import {useFetch} from '../hooks/useFetch';
import { T } from '../constants/Texts';
let url = 'https://animechan.vercel.app/api/random';
let urlNaruto = "https://animechan.vercel.app/api/quotes/anime?title=naruto&page=2";
let page = '&page=1';
let random = '1';
// import useSRW from 'srw'; me falta yarn add swr y ver la parte del add
//const { data, error } = useSRW(url, fetch(url).then(response => response.json()));
//mis sueños derrumbados, solo existen 10 por anime y siempre son los mismos 
    
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
           <Text style={globalStyles.title}> {ResponseJSON[1].anime} </Text>
        <Text></Text>
           <Text style={globalStyles.title}> {ResponseJSON[1].character} </Text>
           <Text > {animechan[1].quote} </Text>
           <Text></Text>
           <Text style={globalStyles.title}> {animechan[2].character} </Text>
           <Text > {animechan[2].quote} </Text>
               <Text></Text>
               <Text style={globalStyles.title}> {ResponseJSON[3].character} </Text>
               <Text > {animechan[3].quote} </Text>
               <Text></Text>
               <Text style={globalStyles.title}> {animechan[4].character} </Text>
               <Text > {animechan[4].quote} </Text>
               <Text></Text>
               <Text style={globalStyles.title}> {ResponseJSON[5].character} </Text>
               <Text > {animechan[5].quote} </Text>
               <Text></Text>
               <Text style={globalStyles.title}> {animechan[6].character} </Text>
               <Text > {animechan[6].quote} </Text>
               <Text></Text>
               <Text style={globalStyles.title}> {ResponseJSON[7].character} </Text>
               <Text > {animechan[7].quote} </Text>
               <Text></Text>
               <Text style={globalStyles.title}> {animechan[8].character} </Text>
               <Text > {animechan[8].quote} </Text>

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