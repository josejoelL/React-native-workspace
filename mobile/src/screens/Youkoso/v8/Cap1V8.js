import { View, Text, ScrollView, TouchableOpacity, useState,Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/colorY';
import { T,W,D } from '../../../constants/Texts';
export default function Cap1V8() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.ScreenContainer}>
            <ScrollView>
               
                <T e='CAPÍTULO 1'/>
                <T e='UN NUEVO EXAMEN ESPECIAL - CAMPO DE ENTRENAMIENTO MIXTO' />
                <T e='Un jueves por la mañana, no mucho después de que comenzara el tercer semestre, varios autobuses circulaban por una autopista.'/>
                <T e='La verdad es que no elegí esta escuela porque tuviera algo que quisiera llevar a cabo o algo así. '/>
                <T e='Los de primer año no eran los únicos en los autobuses. El segundo y tercer año también están a bordo. En otras palabras, es una verdadera migración para todo el alumnado de la escuela.'/>
                <T e='El autobús en el que íbamos nosotros, los de primer año de la clase C, entró en un túnel y poco después, nuestros oídos fueron asaltados por la sensación de estar tapados.'/>
                <T e='Esta es mi segunda vez en un autobús desde que me inscribí en esta escuela. ' />
                <T e='A dónde vamos y qué vamos a hacer, hay cosas sobre las que no hemos recibido la más mínima explicación.'/>
                <T e='En esta etapa, todo lo que puedo decir es que a todos se nos ordenó usar nuestras camisetas y que es muy recomendable que preparemos varias camisetas y ropa interior de repuesto.'/>
                <T e='Sin embargo, al menos es probable que no sea una excursión.' />
                <T e='El tiempo de viaje es de unas 3 horas, un tiempo de viaje bastante largo, por lo que dentro de los límites de lo permitido los estudiantes trajeron consigo sus cosas favoritas.'/>
                <T e='Cosas como teléfonos, libros y tarjetas o bocadillos y jugo.' />
                <T e='También hay entre ellos, estudiantes que traen consigo aparatos de videojuegos.'/>
                <Text style={globalStyles.title}>
                <T e='Como los asientos del autobús están ordenados según nuestros nombres, es' />
                <W i='IkeKanji' k=' Ike Kanji ' />
                <T e='quien se sienta a mi lado.'/>
                </Text>
                <T e='la intención de llevarme bien con él después de inscribirme, pero cuando me di cuenta, nos habíamos convertido en “sólo compañeros de clase” y nuestras oportunidades de pasar el rato disminuyeron drásticamente.'/>
                <Text style={globalStyles.title}>
                <T e='Incluso ahora no soy yo, el que está sentado a su lado, con quien habla. Se puso de rodillas en el asiento, se volteó y habló con'/>
                <W i='SudouKen' k=' Sudou'/>
                <T e=','/>
                <W i='YamauchiHaruki' k=' Yamauchi ' /> 
                <T e='y los demás en voz alta, ya que estaban sentados lejos de él.'/>
                </Text>
                <Text style={globalStyles.title}>De vez en cuando, podía escuchar a las chicas advirtiéndoles que sus voces
                    eran molestas, pero no parecen estar prestando atención a eso.</Text>
                <Text style={globalStyles.title}>El interior del autobús es bastante estridente. No es de extrañar que no estén
                    siendo considerados.</Text>
                <Text style={globalStyles.title}>Me siento un poco solo, pero no puedo evitarlo.</Text>
                <Text style={globalStyles.title}>Afortunadamente, a través de los exámenes pude hacerme amigo de
                    estudiantes como 
                    <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate('YukimuraTeruhiko')}> Keisei </Text>
                     y 
                    <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate('MiyakeAkito')}> Akito</Text>
                     .</Text>   
                <Text style={globalStyles.title}>Nos encontramos dentro de un autobús con un ambiente armonioso, pero me di
                    cuenta de que no será un simple paseo.</Text> 
                <Text style={globalStyles.title}>Tal vez hubiera podido considerarlo mero ocio si hubiera sido en las vacaciones
                    de invierno, pero el tercer semestre ya está en marcha.</Text>
                <Text style={globalStyles.title}>En ese caso, asumir que este va a ser un examen especial como lo fue en la isla
                    deshabitada, es lo mejor para estar tranquilo.</Text>
                <Text style={globalStyles.title}>Sin embargo, no es como si 
                    <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate('IkeKanji')}> Ike </Text>
                 y los otros tampoco hayan madurado.
                    <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate('ChabashiraSae')}> Chabashira-sensei </Text>
                     observó a los estudiantes ocupándose de sus propios
                    asuntos con curiosidad.
</Text>
                <Text style={globalStyles.title}>Cerca de mi asiento y cerca del asiento del conductor, ella está allí observando a
                    los estudiantes.</Text>
                <Text style={globalStyles.title}>Como sería problemático que nuestros ojos se encontraran por casualidad,
                    decidí mirar por la ventana.
</Text>
                <Text style={globalStyles.title}>Este es un túnel largo.</Text>
                <Text style={globalStyles.title}>Han pasado entre 2 y 3 minutos desde que entramos en el túnel. Justo cuando
                    pensaba eso, lentamente pude sentir que mi campo de visión se iluminaba.
</Text>
                <Text style={globalStyles.title}>Habíamos salido del túnel.
</Text>
                <Text style={globalStyles.title}>Como si hubiera estado esperando eso, 
                    <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate('ChabashiraSae')}> Chabashira-sensei </Text>
                 se movió.</Text>
                <Text style={globalStyles.title}>Al mismo tiempo, el dolor en mi oído aumentó.
</Text>

           
                <View style={{flex:0.001, padding: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.gray, borderRadius: 10 }}>
                <Image 
                        style={{ width: 50, height: 50, borderRadius: 100, padding: 20, }}
                source={{uri: 'https://i.imgur.com/txi8RZY.png' }}></Image>
                    <View style={{ padding: 20, flexDirection: 'rowflex-start', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Text style={globalStyles.titledialog}>Chabashira-sensei </Text>
                        <Text style={globalStyles.dialog}>Siento interrumpir su diversión, pero cálmense.</Text>

                    </View>
                    </View>

                    
                <Text style={globalStyles.title}>
                    <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate('ChabashiraSae')}>Chabashira-sensei </Text>
                     dijo eso a los estudiantes mientras sostenía un
                    micrófono en sus manos.</Text>
                <D n='ChabashiraSae' t='Siento interrumpir su diversión, pero cálmense.' />    
            </ScrollView>
        </View>
    );
}