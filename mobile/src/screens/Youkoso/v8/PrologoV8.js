import { View, Text, ScrollView, TouchableOpacity, useState } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

export default function PrologoV8() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.ScreenContainer}>
            <ScrollView>
            <Text style={globalStyles.title}> PRÓLOGO </Text>
                <Text style={globalStyles.title}>
                   
                        <Text style={globalStyles.title}> EL MONÓLOGO DE</Text>
                  
                    
                    <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate('Wiki')}> HORIKITA MANABU</Text>
                    
                   
                </Text>
            <Text style={globalStyles.title}>Hay algunas cosas que la gente encontraría extrañas si se enterara de ello.</Text>
                <Text style={globalStyles.title}>La verdad es que no elegí esta escuela porque tuviera algo que quisiera llevar a
                    cabo o algo así. </Text>
                <Text style={globalStyles.title}>Había vivido con intención de convertirme en una persona talentosa, pero no
                    tenía en mente ningún destino en particular.
 </Text>   
                <Text style={globalStyles.title}>Político, médico, investigador, no pretendía nada de eso.
 </Text>
                <Text style={globalStyles.title}>Para bien o para mal, he vivido mi vida asegurándome de no perturbar nada.
                    Con indiferencia completo mis tareas y paso mis días de esa manera. </Text>
                <Text style={globalStyles.title}>Ser un “modelo a seguir”.Ser “ejemplar”. </Text>
                <Text style={globalStyles.title}>Creía que eso era lo correcto y nunca lo cuestioné.
 </Text>
    <Text style={globalStyles.title}>
                <Text style={globalStyles.title}>Sin embargo, </Text>
                    <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate('Wiki')}>Nagumo Miyabi</Text>
                    <Text style={globalStyles.title}> emprendió una acción tras otra para oponerse
                    directamente a mí.</Text>
 </Text>
                <Text style={globalStyles.title}>Una persona que se abre paso, así se puede describir a ese hombre. </Text>
                <Text style={globalStyles.title}>De hecho, hasta que me graduara, ya había renunciado a la acción. </Text>
                <Text style={globalStyles.title}>He fallado en hacer un amigo en el que pueda decir que confió desde el fondo
                    de mi corazón.
 </Text>
                <Text style={globalStyles.title}>Todavía tengo que comprenderlo. </Text>
                <Text style={globalStyles.title}>Después de 3 años, finalmente me he dado cuenta. Mi “error” y el
                    arrepentimiento que me produjo. Y que este es el “principio”.
 </Text>
            <Text style={globalStyles.title}> </Text>
            </ScrollView>
        </View>
    );
}