

import { characters } from "./NarutoCharData";


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const getRandomCharacters = () => {

    

    return characters.map(getRandom()); 
} 