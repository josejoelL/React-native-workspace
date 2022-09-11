

import { characters } from "./NarutoCharData";


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const getRandomCharacters = () => {
    let random = getRandomInt(56);

    let p = characters.find(x => random == x.id );
   // console.log(p);
    return p.name;
} // characters.map(getRandomInt(characters.length)); 