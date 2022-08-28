import * as React from 'react';
import { View, Text,FlatList,Scrollview,Button } from 'react-native';
import { globalStyles } from '../styles/global';
import {useFetch} from '../hooks/useFetch';
import { T } from '../constants/Texts';
let url = 'https://animechan.vercel.app/api/random';
let urlNaruto = "https://animechan.vercel.app/api/quotes/anime?title=naruto";
// import useSRW from 'srw'; me falta yarn add swr y ver la parte del add
//const { data, error } = useSRW(url, fetch(url).then(response => response.json()));
//mis sueños derrumbados, solo existen 10 por anime y siempre son los mismos 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function Settings() {
    let page = '&page=';
    let random = page.concat(getRandomInt(200)+1);
  
    



    const { isLoading, error, ResponseJSON } = useFetch(urlNaruto.concat(random));
    //console.log({ResponseJSON});
   let animechan = JSON.parse(JSON.stringify(ResponseJSON))
   //console.log( "anime : "+animechan.anime );
    //console.log("personaje : " +animechan.character);
    if (isLoading) return <T e='Loading...' />;
    if (error) return <T e='wait in other hours...' />;
        // crear un componente --> 
   return (
  
        <View style={globalStyles.container}>
           <Text style={globalStyles.title}> {ResponseJSON[1].quote} </Text>
        <Text/>
           <Button title={ResponseJSON[1].character}/> 
           <Button title={ResponseJSON[2].character} /> 
           <Button title={ResponseJSON[3].character} /> 
           <Button title={ResponseJSON[4].character} />  
        </View>
       
    );
}

/*  
    test your knolege in the serie of naruto
   10/10 you are an expert in naruto
   0/10 you definetly havent seen naruto
 
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