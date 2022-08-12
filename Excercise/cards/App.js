import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView ,ScrollView,Platform } from 'react-native';
import {dogs} from './data';
//si no instalas la package cagas

/*
function Card3(props){ // esta forma seria la normal 
  return (
    <View>// solo se puede regresar 1 cosa
      <View>
        <Text>{name}</Text>
      </View>
            
      <View>
      </View>
    </View>
  )
}*/
/*
const Card2 = ({text}) => <Text> {text} </Text> ; //arrow function directo
*/

  //name, desc, image, width, height, color
  //arrow function
const Card = (props) => { 

  const {name, desc, image, width, height} = props;

  return (
    <View style={{ width: 350, height: 526, backgroundColor: 'white',padding:10,borderRadius:30,marginBottom:30  }}>
      <Image 
        style={{ width: '100%', height: 420, borderRadius: 20, backgroundColor: 'orange' }}
        source ={{uri: image}}
       />
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 20,color:'gray' }}>{desc}</Text>
    </View>
  )
}

//tuve varios errores con imprimir un texto solucion:
// tiene que meterse en un array
// no meter comentarios dentro del codigo
// cerrar bien los espacios 
//puedo usar el nombre de la propiedad sin usar el name del array 
export default function App() { //componente frame,layout main el container, se puee usar solo el componente
  return (
    <SafeAreaView style={styles.container}> 
      <ScrollView contentContainerStyle={{marginHorizontal:18}} Style ={{ marginTop:Platform.OS === 'android' && '30' }}>
      {dogs.map( (dog,index)=> {
        
        return(
          <Card key={index}{...dog} />
        )
      })}
      <Card name={"Pinguino que tomo las fotos"}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: (200, 200, 200),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*
{dogs.map( ({name, desc, image})=> {index, dog array
*/