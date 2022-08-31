
import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform,TouchableOpacity } from 'react-native';
import global, { globalStyles } from '../screens/Youkoso/styles/global';
import { useNavigation } from '@react-navigation/native';
import { pfps } from '../screens/Youkoso/character/data';
import { Colors } from '../screens/Youkoso/constants/colorY';

//primero check aqui puedo contar lo correctos 
export const ContinueButton = (props) => {
    const navigation = useNavigation();
    const { id } = props;
    const onPress = () =>{
        navigation.navigate(id);
         console.log('Se puede');


        }; 
    
   

    return (

        <TouchableOpacity style = {{
            backgroundColor: 'green',
            padding:10,
            marginTop: '20%',
            width: '50%',
            alignSelf: 'center',
            borderRadius: '5px',

        }}
        
            onPress={
                onPress
               
            }
            
            >
        <Text style={{
            color: 'white',
            fontWeight: "bold",
            fontSize: 20,
            textAlign: 'center',

        }}>Continue</Text>
       
        </TouchableOpacity>
    );
}


 
//const { Provider } = animechan;
/*
function QuoteProvider({ childen }){
    const [quotes, dispatch] = React.useReducer(
        quoteReducer,
        getQuotes()
    );
    
function handlequote(character){
    dispatch({type: 'ADD', character});
}

    return (
        <Provider value={{
            quotes,
            handlequote,  

        }}>
            {childen}
        </Provider>
    )
}
export { QuoteProvider, animechan };

export function quoteReducer(quotes, action ) {
    switch(action.type) {
        case 'ADD': {
            return [...quotes, { anime: quotes.anime, character: quotes.character, quote: quotes.quote}];
        }
        
        default: {
        throw new Error('Unknown');
        }    
    }
}*/


/*
    const { anime, quote, character } = props;

    

    return (
        <ScrollView>
            <Text style={globalStyles.title}>{quote}</Text>

        </ScrollView>


    )



}*/

let urlAnime = "https://animechan.vercel.app/api/quotes/anime?title=naruto";
let page = '&page=';
let GET_API_NARUTO = "https://animechan.vercel.app/api/quote/anime?title=naruto";
let pages = 200;
let GET_API_RANDOM = 'https://animechan.vercel.app/api/random';
import { useFetch } from '../hooks/useFetch';
function getRandomInt(max) {
    return (Math.floor(Math.random() * max) ) + 1 ;
}
//export const animechan = animechan = JSON.parse(JSON.stringify(ResponseJSON));

export const getQuotes = () => {

    let GET_API_QUOTES = urlAnime + page.concat(getRandomInt(pages));
    const { isLoading, error, ResponseJSON } = useFetch(GET_API_QUOTES);
   
        return {
            isLoading, error, ResponseJSON
        }
    }    
  
/*   
    }
    if (Request) getRequest();

    return {
        ResponseJSON,
        error,
        isLoading,
    }
*/
 const quotes = [
    {
        anime: "Naruto",
        character: "Naruto Uzumaki",
        quote: "si sirvo"
    },
    {
        anime: "Naruto",
        character: "saske",
        quote: "No sirvo"
    },
 ];
const animechan = React.createContext();

const QuoteProvider = ({children}) => {

    const [quote, setQuote] = React.useState("quote not found");
    const [quote1, setQuote1] = React.useState("quote not found");
    const [quote2, setQuote2] = React.useState("quote not found");
    const [quote3, setQuote3] = React.useState("quote not found");
        
    return(
        <animechan.Provider value={{
            quote, setQuote,
            quote1, setQuote1,
            quote2, setQuote2,
            quote3, setQuote3,
        }}>
            {children}
        </animechan.Provider>
    )

}
export { QuoteProvider, animechan };