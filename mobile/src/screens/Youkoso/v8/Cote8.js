import { globalStyles } from '../styles/global';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, Platform, Button, Dimensions, Animated, PanResponder } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';


const Card = (props) => {
    const navigation = useNavigation();
    const { name, desc, image, width, height, color, id } = props;

    return (
        <TouchableOpacity
            style={{
                width: '100%',
                height: 100,
                backgroundColor: 'white',
                padding: 20,
                //borderRadius: 10,
                marginBottom: 1,
                marginTop: 1
                
            }}
            onPress={() => navigation.navigate(id)}
            >

           
            <Text style={{ fontSize: 14, fontWeight: 'bold', }}>{name}</Text>
            <Text style={{ fontSize: 16, color: 'gray',  }}>{desc}</Text>




        </TouchableOpacity>
    )
}



export default function Cote8() {
    
    return (
        <View >
            <ScrollView 
            >
                <Card name={"Prologo"} desc={"EL MONÓLOGO DE HORIKITA MANABU"} image={""} id={'PrologoV8'} color={'red'} />
                <Card name={"cap 1"} desc={"UN NUEVO EXAMEN ESPECIAL - CAMPO DE ENTRENAMIENTO MIXTO"} image={""} id={'PrologoV8'} color={'red'} />
                <Card name={"cap 2"} desc={"UN NUEVO EXAMEN ESPECIAL - CAMPO DE ENTRENAMIENTO MIXTO"} image={""} id={'0'} color={'red'} />
                <Card name={"cap 3"} desc={"UN NUEVO EXAMEN ESPECIAL - CAMPO DE ENTRENAMIENTO MIXTO"} image={""} id={'0'} color={'red'} />
                <Card name={"cap 4"} desc={"UN NUEVO EXAMEN ESPECIAL - CAMPO DE ENTRENAMIENTO MIXTO"} image={""} id={'0'} color={'red'} />
                <Card name={"cap 5"} desc={"UN NUEVO EXAMEN ESPECIAL - CAMPO DE ENTRENAMIENTO MIXTO"} image={""} id={'0'} color={'red'} />
                <Card name={"cap 6"} desc={"UN NUEVO EXAMEN ESPECIAL - CAMPO DE ENTRENAMIENTO MIXTO"} image={""} id={'0'} color={'red'} />
                <Card name={"cap 7"} desc={"UN NUEVO EXAMEN ESPECIAL - CAMPO DE ENTRENAMIENTO MIXTO"} image={""} id={'0'} color={'red'} />
                <Card name={"cap 8"} desc={"UN NUEVO EXAMEN ESPECIAL - CAMPO DE ENTRENAMIENTO MIXTO"} image={""} id={'0'} color={'red'} />

            
            </ScrollView>
        </View>
    );
}