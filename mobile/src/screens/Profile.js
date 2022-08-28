import * as React from 'react';
import { View, Text, FlatList, Scrollview, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { useFetch } from '../hooks/useFetch';
import { T } from '../constants/Texts';

let urlNaruto = "https://animechan.vercel.app/api/quotes/anime?title=naruto";
let page = '&page=';
let GET_API_NARUTO = "https://animechan.vercel.app/api/quote/anime?title=naruto";
let GET_API_NARUTOS = page.concat(getRandomInt(200) + 1)
let GET_API_RANDOM = 'https://animechan.vercel.app/api/random';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function Profile() {
   
    const [getResponse, setGetResponse] = React.useState();

    const getRequest = async () => {
        try{
    const res = await fetch(GET_API_RANDOM);
    const resData = await res.json();
    setGetResponse(resData);
        }catch(e){console.log(e);}
    }
        
       

    return (

        <View style={globalStyles.container}>
            <Text style={globalStyles.title}> Request quote </Text>
            <Text> getResponse: {JSON.stringify(getResponse)}</Text>
            <Button title='GET_API_NARUTOS' onPress={getRequest}></Button>
            
        </View>

    );
}