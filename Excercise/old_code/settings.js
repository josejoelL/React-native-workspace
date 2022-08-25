import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

// create a drawer right or left where and the text of the quote and find the true the best you can 
// if its posible with image but i thinks its no t posible
// i prefer to use onfly text with css style and loke ring bot 10 pulls to score
//recomend of the creador is give them each time a lite bit of the tiitle

async function getAnimeQuote() {


        const res = await fetch('https://animechan.vercel.app/api/random')
        // .then(response => response.json())
        //  .then(quote => console.log(quote));
    if (!res.ok) {
        let vasio = 'Error: ' + res.status + ' ' + res.statusText;
        console.log(vasio);
        throw new Error(vasio);
    }
    const data = await res.json();
    //console.log(data); 
    // let quote = JSON.parse(JSON.stringify(data));

    // let anime = quote.anime + "";
    //  console.log(quote.anime);
    //  console.log(quote.character);
    // console.log(quote.quote);

    return data;
}
function mostrarNombre(n) {
    {
        console.log(document.getElementById("mensaje").innerHTML = n.Object[0].anime);
    }

}
/*

    quote.forEach(quote => {

     const quoteContainer = document.createElement('div');
     quoteContainer.classlist.add('quote-container');
    }

*/


export default function Settings() {
    getAnimeQuote().then(mostrarNombre);
    //   console.log(anime + "algo aqui");



    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}>  </Text>


        </View>
    );
}