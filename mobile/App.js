import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
    <View>
      <Text>{name}</Text>
    </View>
  )
}


export default function App() { //componente frame,layout main el container, se puee usar solo el componente
  return (
    <View style={styles.container}> 

      <Card name={"riquin"}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
