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
              
                <D n='ChabashiraSae' t='Siento interrumpir su diversión, pero cálmense.' />   
                
                    
                <Text style={globalStyles.title}>
                    <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate('ChabashiraSae')}>Chabashira-sensei </Text>
                     dijo eso a los estudiantes mientras sostenía un
                    micrófono en sus manos.</Text>
               

                <D n='ChabashiraSae' t='Pensé que les gustaría saber adónde va este autobús y qué haremos entonces.'/>
                <D n='IkeKanji' t='Por supuesto que tenemos curiosidad sobre eso. No me dirá que es la isla deshabitada otra vez, ¿verdad?'/>  
                <T e=' Recibiendo la queja de Ike, contestó Chabashira-sensei-sensei.' />   
                <D n='ChabashiraSae' t='Parece que lo que pasó en la isla deshabitada es difícil de olvidar para ustedes, ya que se quedó en su memoria. Pero cálmense. Un examen de esa escala no es algo que se pueda hacer con frecuencia. Significa que no somos tan crueles como para forzarlos a hacerlo ahora que el verano ha terminado para ustedes. Sin embargo, como ya habrán adivinado, se realizará un nuevo examen especial. Su nivel de vida será extremadamente alto comparado con el de una isla deshabitada.'/> 
                <T e='Ella dijo eso, pero no es algo particularmente digno de confianza. Dejando de lado la isla deshabitada, hasta ahora ha habido exámenes especiales que los estudiantes comunes habrían considerado difíciles. Lo más importante es que el estudiante se verá obligado a enfrentarse directamente a la amenaza conocida como expulsión que se esconde detrás de los exámenes especiales.'/> 
                <D n='ChabashiraSae' t='¡El examen especial que se les exigirá a los estudiantes de clase D a partir de ahora es…!'/> 
                <T e='Llegó tan lejos y sin embargo Chabashira-sensei-sensei dejó de hablar. En ese momento, mis compañeros de clase sonreían con orgullo.'/>
                <T e='Inmediatamente después, Chabashira-sensei-sensei inclinó la cabeza con respeto y se disculpó.'/>
                <D n='ChabashiraSae' t='Mis disculpas. Ya son estudiantes de la clase C. Ahora bien, ya que han sido ascendidos, les explicaré los detalles de los exámenes especiales.'/>
                <T e='Después de haber superado múltiples exámenes especiales, los estudiantes quefinalmente han llegado a la clase C en el tercer semestre parecen estar aceptando su situación actual con calma.'/>
                 <T e='El hecho de que la explicación tendrá lugar en el autobús significa que a partir de este momento, es posible preparar hasta cierto punto contramedidas o, al menos, tendré la oportunidad de hacerlo.'/>
                <T e='Como todavía estamos en movimiento, está prohibido levantarse descuidadamente de tu asiento, pero en el interior del autobús, la voz de una persona puede llegar fácilmente a todo el mundo. Si usas un teléfono, es posible hablar sólo con una persona específica.'/>
                <T e='Incluso Ike y los demás, que suelen ser muy ruidosos, se detuvieron inmediatamente para escuchar lo que Chabashira-sensei-sensei tiene que decir.'/>
                <T e='Aunque sea sólo esto, demuestra que han crecido un poco.'/>
                <D n='ChabashiraSae' t='A partir de este momento, serán llevados a una escuela al aire libre en lo profundo de cierta montaña. Con toda probabilidad, llegaremos a nuestro destino antes de que pase otra hora. Cuanto más corta sea la explicación, mayor será el “período de gracia” que tendrán disponible.'/>
                <T e='Esto significa que queda aproximadamente una hora para que comience el
                examen especial.'/>
                <T e='Aunque se necesiten 20 minutos para llevar a cabo la explicación, aún quedarían 40 minutos. Me quedaría mucho tiempo para formular una estrategia  con respecto al examen especial.'/>
                <T e='Eso es probablemente lo que quiso decir con “período de gracia”.'/>
                <D n='IkeKanji' t='¿No es la escuela al aire libre algo a lo que vas en verano?'/>
                <T e='Las montañas que podemos ver desde la carretera siguen cubiertas de blanca
                nieve.'/>
                <T e='Una pregunta surgió de Ike, que es un experto cuando se trata de montañas de
                su época como boy scout.'/>
                <D n='ChabashiraSae' t='No puedes callarte y escucharme? Creo que acabo de hablarles sobre el “período de gracia” '/>
                <T e='Dijo Chabashira-sensei-sensei más agradable que enojada.'/>
                <T e='Ike se disculpó y se rascó la cabeza.'/>
                <T e='Siguió una breve risa.'/>
                <T e='Escuela al aire libre.'/>
                <T e='Como no había oído hablar de esa palabra antes, la busqué en mi teléfono.'/>
                <D n='AyanokoujiKiyotaka' t='Se celebra principalmente en verano y suele tener lugar en un día con un clima agradable en lugares como montañas u otros donde abunda el verdor. La actividad colectiva se lleva a cabo con el objetivo de promover la salud de los estudiantes. También podría referirse a las instalaciones utilizadas con ese fin.'/>
                <T e='Ya veo. Como dijo Ike, suele ocurrir en verano. Pero aún así, no es como si definitivamente deba tener lugar en esa temporada o algo así.'/>
                <D n='ChabashiraSae' t='Las oportunidades de conocer a los estudiantes mayores, especialmente a aquellos que no participan en ninguna actividad del club, son limitadas. Pero en la escuela al aire libre, tomaremos medidas colectivas que van más allá de los años escolares durante 7 noches y 8 días. Es como algo que va más allá de lo que ofrece el festival deportivo. El nombre del examen especial que se llevará a cabo es “Campo de entrenamiento mixto”. Ya que estarán ansiosos si es sólo una explicación verbal, voy a distribuir los materiales ahora.'/>
                <T e='Chabashira-sensei-sensei comenzó a caminar y entregó un paquete de materiales al estudiante sentado en el asiento de la primera fila.'/>
                <T e='Cada uno de nosotros tomó uno y pasó el resto atrás.'/>
                <T e='El material en sí era bastante grueso y constaba de varias páginas.'/>
                <T e='Como no se nos ordenó que no miráramos, le di la vuelta y le eché un vistazo.'/>
                <T e='Había fotos de lo que parece ser el campo de entrenamiento debidamente integrado.'/>
                <T e='Se incluyen habitaciones donde los estudiantes pueden dormir, grandes baños, cafeterías y demás.'/>
                <T e='Ver todo esto hace que parezca divertido, o mejor dicho, es como leer una guía de viajes........'/>   
                <T e='Pero es inevitable que cada palabra importante con respecto al examen especial que vemos haga que nuestro estado de ánimo se vuelva sombrío.'/>
                <T e='Aunque se trate de un examen especial, está el relativamente grueso material que nos entregaron además de la explicación verbal.' />
                <T e='Aunque pienses que es lo mismo que la explicación para el Paper Shuffle que recibimos no hace mucho tiempo, este examen especial parece que se está convirtiendo en algo molesto.' />
                <T e='No mucho después, todo el mundo puso sus manos en el documento. Después de confirmarlo, Chabashira-sensei-sensei sigue hablando.' />
                <D n='ChabashiraSae' t=' Siéntanse libres de leer, pero voy a seguir adelante con la explicación delcampamento de entrenamiento mixto. Ya que voy a recoger los materiales antes de que se bajen del autobús, cerciórense de que entienden bien las reglas. Aceptaré preguntas al final, así que asegúrese de callarse y escuchar. ¿Comprenden?'/>

                <T e='Dijo Chabashira-sensei-sensei mientras volvía a mirar a Ike. Ike hizo dos o tres
movimientos bruscos con su boca.'/>
                <D n='ChabashiraSae' t='Esta vez, el examen especial será un campo de entrenamiento que se centrará principalmente en el desarrollo mental. Para lograrlo, empezaremos con el ABC de la integración en la sociedad y confirmaremos si pueden o no vivir en armonía con aquellos con los que no interactúan comúnmente. Y todos y cada uno de ustedes lo aprenderán.'/>
                <T e='Entonces, ¿esa es la razón por la que tendremos que tomar medidas conjuntas junto con los estudiantes mayores? Chabashira-sensei-sensei dijo lo mismo, pero los estudiantes que participan en las actividades del club habrán establecido relaciones entre los estudiantes mayores y los menores, pero aún así, la mayor parte de eso se limitará solamente a las actividades del club.'/>
                <T e='Los estudiantes fuera de esa categoría no habrán tenido absolutamente ningún contacto con los estudiantes mayores y esos estudiantes no son una minoría.'/>
                <T e='En esencia, habría sido estupendo que estos intercambios se hubieran llevado a cabo de forma voluntaria, sin necesidad de utilizar las actividades del club como intermediario, pero también es un hecho que la realidad no es tan simple.' />
                <T e='Sin embargo, ¿cómo van a involucrar exactamente a los estudiantes mayores en esto? A menos que el contacto entre nosotros no sea una necesidad absoluta, entonces, al igual que durante el festival deportivo, los estudiantes seguramente mantendrán su distancia.' />
                <T e='Bueno, es probable que estemos yendo a las montañas para el “campo de entrenamiento” para asegurarse de que eso no ocurra...' />
                <T e='De cualquier manera, mientras las reglas para el examen especial no estén establecidas correctamente, es fácil encontrar lagunas.' />
                <T e='Hay una enorme brecha entre el primer y el segundo año en términos de desarrollo físico y mental.' />
                <T e='Para los adolescentes, el período de un año es muy significativo.' />
                <T e='No será por mucho, pero seguramente no podremos luchar contra ellos en igualdad de condiciones.' />
                <D n='ChabashiraSae' t='En primer lugar, una vez que lleguen a su destino, haré que se separen por género. A continuación, mantendrán un debate con todos los años escolares y luego se dividirán en seis grupos.' />
                <D n='IkeKanji' t='Seis grupos, basados en el género...' />
                <T e='Como si quisiera memorizarlo, Ike murmuró a mi lado.' />
                <T e='La explicación acaba de empezar, pero Chabashira-sensei-sensei continuó sin parar.' />
                <D n='ChabashiraSae' t='Se han decidido los límites inferior y superior para el número de personas en un grupo. Miren la quinta página del material en sus manos y vean bien los patrones del número de personas escritas allí.' />
                <T e='De repente, los estudiantes voltearon los ojos para mirar la quinta página del material. Parece que las reglas relativas a los grupos en el campo de entrenamiento están escritas allí.' />
                <T e='Cuando se establece un grupo, hay un límite inferior y un límite superior en el número de personas que pueden estar en él.'/>
                <T e='Ese número se ha calculado a partir de la separación de chicos y chicas, así como de los años escolares. Por ejemplo:'/>
                <T e='- Si hay 60 chicos en el mismo año escolar, entonces 8-13.
- Si hay 70 chicos en el mismo año escolar entonces 9-14.
- Si hay 80 chicos en el mismo año escolar, entonces 10-15.' />
                <T e='Serán los límites inferior y superior para un grupo.Sin embargo, si el número es inferior a 60, por favor, remítase a la sección especial.' />
                <T e='Eso estaba escrito allí.' />
                <T e='Si no hay diferencia en la proporción de chicos y chicas en los años escolares, en teoría una clase debe tener 40 y si la proporción de chicos y chicas es de 5:5, entonces el número total de chicos para el primer año sería de 80.' />
                <T e='10-15 formarían un grupo y en total, se formarían seis grupos.' />
                <T e='El hecho de que se refirieran al número total de estudiantes significa que, dependiendo del número de expulsiones durante todo el año escolar, la cantidad de personas requeridas también cambia.' />
                <D n='ChabashiraSae' t='Creo que ya lo saben, pero el hecho de que la división en seis se base en el género significa que los estudiantes de otras clases se mezclarán cuando se formen los grupos. Además, en la duración de la escuela al aire libre, tendrán que hacer el examen especial con ese grupo. Significa que sus destinos están atados unos con otros.' />
                <D n='IkeKanji' t='No es razonable pedirnos que formemos un grupo con chicos de otras clases. ¿No son ellos el enemigo?'/>
                <T e='Quizás no soportaba seguir callado, mientras Ike murmuraba para que Chabashira-sensei-sensei pudiese oírlo.' />
                <T e='Pero tal vez tuvo una buena idea, ya que entonces habló como si una bombilla hubiera sido encendida por encima de su cabeza.' />
                <D n='IkeKanji' t='¿Es eso cierto? Entonces no tenemos que preocuparnos por eso, ¿verdad? Podemos simplemente dividirnos, la Clase C, en dos grupos y eso será el final de todo. Eso es lo que significa, ¿verdad? Ayanokouji?'/>
                <T e='Ike me preguntó eso en voz alta.' />
                <T e='Ciertamente, es posible ir con el límite inferior de 10 para formar dos grupos de la Clase C y este problema puede resolverse de esa manera. Sin embargo, esa idea de Ike, desafortunadamente, no funcionará.' />
                <D n='ChabashiraSae' t='Eso suena bien, pero las cosas no son tan sencillas. Las reglas no permiten que un grupo se forme con una sola clase. Mientras el número de personas de tu grupo cumpla la cuota, no importa con qué clase te asocies, pero al menos, tiene que haber dos clases o más mezcladas.'/>
                <T e='Esa aseveración de Chabashira-sensei también estaba debidamente escrita bajo el concepto de dividir a la gente.'/>
                <D n='ChabashiraSae' t='Cada grupo debe tener estudiantes de al menos dos o más clases como requisito previo.' />
                <T n='IkeKanji' t='Cada grupo de¿Quiere decir que nos veremos obligados a trabajar con el enemigo' />
                <T e='No es tanto una pregunta, sino más bien el sentido de las palabras que inesperadamente se filtraron de Ike.' />
                <T e='Chabashira-sensei, que parecía un poco exasperada, contestó.' />
                <D n='ChabashiraSae' t='Eso es lo que significa. Por supuesto, no es imposible intentar formar un grupo compuesto de estudiantes de tu clase tanto como sea posible. Mientras haya un solo estudiante de otra clase, lo habrás formado.'/>
                <T e='En resumen, hacer dos grupos e ir con el límite inferior de 10 personas. Y de ellos, 9 serían de la clase C. Si lo hacemos, podemos formar un grupo que sea 
“en su mayoría de la clase C”.' />
                <T e='Sin embargo, dudo que un grupo así sea reconocido en todos los años escolares cuando se produzca el debate.' />
                <T e='No hay muchos estudiantes que se unirían a un grupo que está formado en su mayoría por personas de otra clase. Además, ¿sería mejor tener más gente? ¿O tener menos gente sería mejor? ¿Y si cambiará o no?' />
                <T e='Si este es un examen donde las ventajas y desventajas pueden ocurrir en base a la diferencia entre el número de personas en cada grupo, entonces tener un grupo con pocas personas sería arriesgado.' />
                <T e='Pero como las condiciones del examen aún no están claras, es imposible juzgar las ventajas y desventajas del número de personas.' />
                <T e='Que sea suerte o desgracia dependerá de la esencia de este examen.' />
                <D n='ChabashiraSae' t='¿Es mejor para un grupo tener muchas personas? ¿O pocas personas? Esto tendrá un impacto significativo en el “resultado” que voy a explicar ahora.' />
                <T e='Diciendo eso, Chabashira-sensei se rió un poco.' />
                <T e='Es fácil de entender ya que los pensamientos de todos estaban dirigidos en la misma dirección.' />
                <D n='HirataYousuke' t='¿Podría continuar con la explicación de las reglas? Tengo curiosidad sobre el resultado, pero antes me gustaría saber qué tipo de cosas vamos a hacer como grupo.' />
                <T e='Hirata, que se sentía incómodo, lo dijo e instó a Chabashira-sensei-sensei a que continuara.' />
                <D n='IkeKanji' t='Así es. Si respondo a todas y cada una de las dudas de Ike no avanzaremos.'/>
                <T e='Ike se rascó la cabeza disculpándose.'/>
                <D n='ChabashiraSae' t='Los grupos serán algo parecido a clases temporales formadas sólo para la escuela al aire libre. Sin embargo, aunque sea sólo temporal, su contenido será intenso. Los miembros de un grupo tomarán clases juntos, cocinarán y lavarán juntos e incluso se bañarán y se irán a la cama juntos. Experimentarán juntos la vida diaria de todo tipo de personas.' />
                <T e='Si supieran que se van a bañar e ir a la cama juntos, tanto los chicos como las chicas gritarían.' />
                <D n='IkeKanji' t='No siento que pueda vivir con gente de otras clases...'/>
                <T e='Puedo entender por qué Ike se quejaría así.' />
                <T e='Colaboramos con otra clase durante el festival deportivo, pero eso fue algo temporal.' />
                <T e='Apenas se puede decir que pasamos por lo mejor y peor juntos.' />
                <T e='Por cierto, después de venir aquí, estuvimos a punto de participar en un examen que cruzaría los límites de la clase.' />
                <T e='Dependiendo de las circunstancias, podemos formar un grupo que tenga las cuatro clases mezcladas en él.' />
                <D n='ChabashiraSae' t='Cómo se decidirá el resultado del examen especial, que dependerá de un examen integral que tendrá lugar el último día de la escuela al aire libre. En la página 7 se ofrece una idea general del contenido del examen. Revísenlo.' />
                <T e='Nos dijeron que lo hiciéramos, e inevitablemente todos lo comprobaron simultáneamente.' />
                <T e='“Moral” “Disciplina mental” “Orden” “Individualidad”' />
                <T e='Temas que nunca tendríamos que aprender en una escuela ordinaria estaban agrupados allí.' />
                <T e='En otras palabras, debo ver esto como un examen separado de cosas como inglés y matemáticas, que caen dentro de la capacidad académica.' />
                <T e='Lo problemático es que no hay una “respuesta clara” en un examen como éste.' />
                <T e='Hay información sobre cada tema en los materiales que nos entregaron, pero todos son muy abstractos.' />
                <T e='No hay nada acerca de cómo exactamente, a detalle, se llevará a cabo el examen.' />
                <T e='Además, miré un horario de muestra. Después de despertarnos, trabajaremos en nuestras tareas matutinas. Luego nos reuniremos en el dojo para hacer Zazen y luego iremos a trabajar (cosas como la limpieza).' />
                <T e='Luego desayunamos.'/>
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
                <T e='' />
            
            
            </ScrollView>
        </View>
    );
}