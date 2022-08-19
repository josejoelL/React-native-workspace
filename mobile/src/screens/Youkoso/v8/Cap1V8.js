import { View, Text, ScrollView, TouchableOpacity, useState,Image, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/colorY';
import { T,W,D } from '../../../constants/Texts';
export default function Cap1V8() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.ScreenContainer}>
            <FlatList>
               
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
                <T e='Después, estudiaremos varias cosas en un aula. Después de eso, almorzamos.' />
                <T e='Luego recibimos asignaciones para la tarde y una vez más practicamos Zazen.' />
                <T e='Luego cenaremos, nos daremos un baño y volveremos a la cama. Es un estilo de vida completamente diferente al que hemos vivido hasta ahora.' />
                <T e='Por cierto, a diferencia de nuestras vacaciones habituales, las clases se impartirán durante toda la mañana el sábado.' />
                <T e='Parece que sólo podremos descansar el domingo.' />
                <D n='ChabashiraSae' t='Más detalles sobre su horario serán anunciados a su llegada a la escuela al aire libre. Qué tipo de examen especial se llevará a cabo y en qué ordenen el último día, es algo que tampoco puedo decirles en este momento.'/>
                <T e='Significa que tendremos que ver lo que pasa mientras dure el examen especial.' />
                <T e='Puede ser que la asignatura que enumeraron como "Zazen" también forme parte del examen.' />
                <T e='Sería mejor si asumiera que pequeñas cosas como la postura y la actitud también influirán en el examen.' />
                <T e='Aparte de eso, palabras como “discurso” y “fabricación” también son signos perturbadores.' />
                <D n='ChabashiraSae' t='Decidir sus grupos es de suma importancia. Los seis grupos deben ser unidos y deben ser capaces de superar una semana de campamento. No importa cuál sea la razón, no se les permite retirarse de su grupo a la mitad o cambiar de miembros. Si un estudiante es forzado a retirarse por enfermedad o lesión, entonces el grupo debe lidiar con esa situación por sí mismo asumiendo que “ese estudiante existe”.'/>
                <T e='En otras palabras, si hay discordia entre nosotros o si nos enemistamos, entonces no seremos capaces de proceder. Cada vez más parece que además de formar nuestros grupos, tendremos que eliminar las otras clases.' />
                <T e='Las lecciones a gran escala comenzarán el viernes por la mañana, eso es mañana, y hasta el miércoles de la semana que viene habrá clases en la escuela al aire libre.' />
                <T e='Y también, en el octavo día, que será un jueves, todos los años escolares tomarán un examen simultáneamente y nos evaluarán.' />
                <D n='ChabashiraSae' t='Después de que el primer año haya establecido sus grupos, se reunirán con el segundo y tercer año que habrán establecido sus grupos al mismo tiempo. En resumen, significa que se habrán formado seis grupos de entre 30 y 45 personas, compuestos del primer año hasta tercer año.'/>
                <T e='La situación ya es caótica, teniendo que formar grupos entre compañeros de primer año, pero otros años escolares también se añadirán a la mezcla.' />
                <T e='Tan pronto como ese hecho fue comunicado, una extraña atmósfera se apoderó del interior del autobús.' />
                <D n='ChabashiraSae' t='En pocas palabras, los grupos que se formarán en el año escolar son los grupos pequeños y los grupos que se formarán a partir de todos los años escolares serán los grupos grandes.' />
                <T e='Todos y cada uno de los grupos que formemos en nuestro curso escolar serán “grupos pequeños”. Los grupos pequeños se reunirán con grupos pequeños de segundo y tercer año y finalmente terminaremos como seis “grupos grandes”.' />
                <D n='ChabashiraSae' t='Ahora pasamos al tema importante: el resultado. Eso dependerá del “promedio de puntos” de los resultados de los exámenes de cada miembro de los seis grupos grandes. Significa que los talentos de los otros años escolares también jugarán un papel importante.' />
                <T e='Básicamente, se calculará un punto medio de las 40 personas que componen un grupo grande.' />
                <T e='Lo que me preocupa es la diferencia en el número de personas.' />
                <T e='Si se trata de un promedio, aunque debería ser difícil que haya desigualdad, dependiendo de cómo se organicen los grupos pequeños, podría haber una diferencia considerable en el número de personas una vez que formemos un grupo grande.' />
                <T e='Lo crucial aquí es “cómo formar un grupo grande”.' />
                <T e='Si este es un examen en el que simplemente tenemos que competir entre nosotros en términos de capacidad académica, entonces es obvio que ganará el grupo grande en el que se reúnan todos los estudiantes talentosos.' />
                <T e='Por el contrario, los estudiantes juzgados sin talento serán inevitablemente expulsados de los mejores grupos y tendrán que formar grupos de bajo rango.' />
                <T e='Sin embargo, no es como si tuvieras la garantía de ganar en este examen especial simplemente reuniendo estudiantes talentosos.' />
                <D n='ChabashiraSae' t='Han captado lo esencial hasta cierto punto, ¿no es así? Y ahora, para terminar, les explicaré lo más importante. Es decir, el resultado de este examen especial.'/>
                <T e='Así que básicamente lo que vamos a ganar y lo que vamos a perder, ¿eh?' />
                <T e='Una vez más, la razón por la que estamos divididos en grupos y no en clases debería estar oculta aquí.' />
                <D n='ChabashiraSae' t='Para los grupos grandes cuyos puntos promedio los coloquen en el primer lugar hasta el tercer lugar, todos sus estudiantes recibirán puntos privados así como puntos de clase. Para los grupos grandes que ocupen el cuarto lugar hasta el último lugar, digamos que recibirán un demérito.' />
                <T e='Los detalles sobre el resultado también están escritos, por supuesto, en los materiales que se nos proporcionaron.' />
                <T e='“Recompensas básicas”.' />
                <T e='Primer lugar: 10.000 puntos privados. 3 puntos de clase.
Segundo Lugar: 5000 puntos privados. 1 punto de clase.
Tercer lugar: 3000 puntos privados.' />
                <T e='Las recompensas mencionadas anteriormente serán distribuidas a todos y cada uno de los estudiantes.' />
                <T e='Si en un grupo pequeño de 10, 9 resultaron ser de la misma clase, podrán ganar 27 puntos de la clase al quedar en el primer lugar.' />
                <T e='Por supuesto, se trata sólo de describir un escenario ideal, pero lo mejor sería que pudiéramos reunir a estudiantes de la misma clase hasta el máximo de nuestras posibilidades y ocupar el primer lugar.' />
                <T e='Sin embargo, cuanta más gente tengamos, mayor será el daño que sufriremos si perdemos. Además, si el número de personas aumenta, será más difícil controlar al grupo.' />
                <T e='Por cierto, los factores negativos que me preocupan tienen mucho más peso que los pocos factores positivos que existen.' />
                <T e='Cuarto Lugar: 5000 puntos privados.
Quinto puesto: 10.000 puntos privados. 3 puntos de clase.
Sexto lugar: 20.000 puntos privados. 5 puntos de clase.' />
                <T e='Los puntos mencionados anteriormente serán descontados de todos y cada uno de los estudiantes.' />
                <T e='Los puntos privados y los puntos de clase no caerán por debajo de cero, sino que se quedarán como déficit acumulado y se calcularán cada vez que recibamos recompensas en futuros exámenes.' />
                <T e='Se puede decir que este es un elemento que no había estado presente hasta ahora.' />
                <T e='La razón por la que uno siente que las recompensas por el primer puesto hasta el tercer puesto son algo escasas es porque hay un gran truco detrás de ello.' />
                <T e='Sobre el tema de las recompensas, esta frase estaba escrita. Chabashira-sensei siguió adelante y lo leyó en voz alta.' />
                <D n='ChabashiraSae' t='Está configurado de tal manera que dependiendo de cuántos de una clase en particular estén presentes en un grupo pequeño, la recompensa puede ser el doble. Además, mientras más gente forme un grupo pequeño, se ampliará aún más. Estas son las reglas que se aplican desde el primer lugar hasta el tercer lugar y esto no se aplicará para el descuento para el cuarto lugar y por debajo, así que relájense.'/>
                <T e='Si dos clases forman un grupo pequeño, del primer lugar hasta el tercer lugar serán recompensados como se ha mencionado anteriormente, pero si se compone de tres clases, ambos puntos se duplicarán. Si se compone de cuatro clases, se triplicará.' />
                <T e='Además, dado que la amplificación parece cambiar dependiendo del número total de personas, 10 personas harían que se multiplicara por 1, 15 personas harían que se multiplicara por 1,5 como máximo.' />
                <T e='Esto es una excepción, pero si se forma un grupo con 9 personas en él, se multiplicará por 0,9 en ese caso.' />
                <T e='Según los cálculos, la mayor recompensa por obtener el primer lugar sería el triple si están presentes estudiantes de las cuatro clases y, además, para un grupo con el número máximo de 15, se multiplicaría por 1,5 (redondeado al entero más cercano) y cada persona recibiría 45.000 puntos privados, así como 14 puntos de clase.' />
                <T e='Hasta ahora, esto cubre las partes buenas del examen especial y también existe una parte problemática pero interesante.' />
                <T e='Sin embargo, se podría decir que lo verdaderamente importante es lo que viene después de esto.' />
                <D n='ChabashiraSae' t='Además, el grupo grande que ocupe el último lugar será sancionado con una penalización enorme.'/>
                <D n='IkeKanji' t='Penalización.... no puede ser.'/>
                <D n='ChabashiraSae' t=' Así es. Es la “expulsión”.' />
                <T e='Ese castigo, que en sí mismo ya no es una sorpresa, fue revelado.' />
                <D n='ChabashiraSae' t='Aun así, no es como si fuéramos a expulsar a todos en el grupo grande que ocupe el último lugar. Porque si lo hiciéramos, tendríamos aproximadamente 40 estudiantes expulsados en nuestras manos. El criterio por el cual se producirá la expulsión se limita sólo a los grupos pequeños cuyo promedio esté por debajo del promedio límite establecido por la escuela.' />
                <T e='Esta es una disposición bastante problemática. La clasificación general se calculará a partir de los promedios de los grupos grandes, pero cuando se trata de la expulsión, lo que importa es el promedio del grupo pequeño.' />
                <D n='ChabashiraSae' t='Si un grupo pequeño cae por debajo de esa frontera, su “líder” será expulsado.'/>
                <D n='HirataYousuke' t='¿Cómo será elegido ese líder exactamente?'/>
                <D n='ChabashiraSae' t='Lo discutirán en su grupo pequeño con anticipación y elegirán uno. Eso es todo.' />
                <D n='IkeKanji' t='Qué demonios? Quién diablos querría ser el líder cuando la expulsión está sobre la mesa.' />
                <T e='En el futuro, me pregunto cuántos estudiantes se ofrecerán como voluntarios.' />
                <D n='ChabashiraSae' t='También tiene sus ventajas. Los estudiantes que son compañeros de clase del líder recibirán el doble de la recompensa.' />
                <D n='HorikitaSuzune' t=' ¿... El doble, dice?' />
                <T e='Horikita, que había estado en silencio hasta ahora, murmuró sorprendida.' />
                <D n='ChabashiraSae' t='Así es. La mayor recompensa por este examen especial sería obtenida por 12 estudiantes de la clase C dentro del grupo. Y los 3 restantes serían extraídos de las clases A, B y D. Encima de eso, si el líder es alguien de la clase C y consigue el primer lugar, entonces...' />
                <D n='YamauchiHaruki' t='¿Qué pasará entonces?' />
                <D n='ChabashiraSae' t='1.08 millones de puntos privados. 336 puntos de clase. Es lo que se puede ganar.' />
                <D n='YamauchiHaruki' t='¡Trescientos treinta y seis!' />
                <T e='Si lo conseguimos de golpe, nuestra clase cambiará significativamente.' />
                <T e='Depende de la puntuación que obtengan los otros grupos, pero no es imposible llegar a la clase A en este examen.' />
                <T e='Cuantos más riesgos corras, mayores serán las recompensas.' />
                <T e='Además, las posibilidades de recibir la mayor recompensa no son bajas en absoluto.'/>
                <D n='ChabashiraSae' t='Después de que el grupo pequeño haya sido establecido, tendrán que discutir entre ustedes y decidir un líder antes del amanecer del día siguiente. Si, por casualidad, no pueden decidir un líder para su grupo,entonces su grupo será descalificado inmediatamente. En otras palabras, todos ustedes serán expulsados forzosamente. Por supuesto, no ha habido un solo grupo en el pasado tan tonto como para no poder decidir un líder y ser expulsado'/>
                <T e='Así que la escuela no será la que decida. Es algo que los estudiantes deben decidir por sí mismos.' />
                <T e='Naturalmente, terminaremos peleando mientras intentamos decidir un líder. Sin embargo, si al final todavía no hay candidatos, entonces no tendríamos otra opción que decidirlo con una lotería o un juego de piedra, papel y tijera.' />
                <T e='Es inevitable teniendo en cuenta que todos saben que pueden ser expulsados.' />
                <T e='En una situación en la que ya va a ser difícil unirnos, también hay una alta posibilidad de que la unidad del grupo sea dudosa.' />
                <D n='ChabashiraSae' t='Además, si el líder va a ser expulsado, pueden elegir a otra persona de su grupo para que asuma la responsabilidad conjunta y sea expulsado junto con él. Se podría decir que es algo como hundirlo contigo.' />
                <D n='IkeKanji' t='¿Huh? ¿Qué pasa con eso? ¡Eso está muy jodido! Al nombrar a un tipo al azar como líder, ¿significa que podremos aplastar a los líderes de las otras clases de esa manera?'/>
                <T e='Dudo que algo así se pueda lograr tan fácilmente.' />
                <T e='Si vamos a elegir a un líder, entonces naturalmente debemos seleccionarlo y examinarlo hasta cierto punto.' />
                <T e='Un estudiante que es claramente un peón desechable no se convertirá simplemente en el líder. Si se permitiera un acto tan irreflexivo, eso es cosa del grupo.' />
                <T e='En primer lugar, no hay estudiantes que estén dispuestos a autodestruirse por el bien de sus camaradas y arrastrar a un estudiante de otra clase con ellos.' />
                <T e='Sería una historia diferente si ese estudiante estuviera atrapado en la clase D y ya tuviera pensamientos de abandonar la escuela de todos modos, pero la información sobre estudiantes como ese probablemente se esparciría por todas partes.' />
                <D n='ChabashiraSae' t='Tranquilos, no es como si cualquiera pueda asumir la responsabilidad conjunta. Sólo los estudiantes que son un factor que contribuye a que el grupo caiga por debajo de la frontera, según lo juzgado por la escuela, serán responsables de ello. Como fallar o boicotear deliberadamente el examen, a menos que hagas esas cosas no habrá problema.'/>
                <T e='Por supuesto, si ese es el caso, se podría decir que tanto el líder como los miembros de su grupo están bien protegidos. Sin embargo, para este examen, uno no puede evitar dudar de la forma en que el líder debe ser.' />
                <T e='Las cosas son diferentes esta vez en comparación con los exámenes especiales anteriores.' />
                <T e='En lo que debo centrarme es en el hecho de que las tareas para este examen especial se compartirán con todos los años escolares.' />
                <T e='Y que la misma explicación seguramente también se está dando ahora mismo en los otros autobuses.' />
                <T e='Tengo que suponer que ahora mismo, en este mismo momento, se están elaborando todo tipo de estrategias.' />
                <T e='No sólo el primer año sino también el segundo año luchando su propia batalla de segundo año y el tercer año luchando su propia batalla de tercer año.' />
                <T e='Para aclarar mis dudas, envié un mensaje a cierto hombre.' />
                <T e='Porque quería saber si el “consejo estudiantil” tiene algo que ver con este examen especial.' />
                <D n='ChabashiraSae' t='Una cosa importante más, la clase del expulsado también recibirá una sanción proporcional. Los detalles de la sanción varían en función del examen, pero para este examen especial, en caso de expulsión, se descontarán 100 puntos por persona. En el caso de que los puntos de la clase sean insuficientes, se calcularán a lo largo del tiempo. Hasta entonces, naturalmente seguirán siendo cero.' />
                <T e='La magnitud de las consecuencias sigue siendo la misma que antes, pero el resultado negativo es una importante deducción.' />
                <T e='Otra esencia de este examen.' />
                <T e='El atractivo de ser líder es que los puntos a ganar se duplicarán, pero por otro lado, tendrán que aceptar el riesgo de ser expulsados.' />
                <T e='A menos que sean asignados a un grupo que estén seguros de que le irá bien, no habría una sola persona dispuesta a levantar la mano.' />
                <T e='Sin embargo, tampoco podrán entregar una oportunidad tan perfecta a las otras clases.' />
                <T e='Además de eso, también hay que considerar la responsabilidad conjunta.' />
                <T e='Se han establecido reglas que son como callejones sin salida.' />
                <D n='ChabashiraSae' t='Y con eso, la explicación termina. Aceptaré preguntas.' />
                <T e='Hirata inmediatamente levantó la mano.' />
                <D n='HirataYousuke' t='Si ocurre una expulsión.... ¿hay alguna forma de extender una cuerda de salvamento?' />
                <D n='SudouKen' t='Si te expulsan, te expulsan. No hay nada que hacer al respecto, ¿verdad?' />
                <D n='HirataYousuke' t='Eso no es verdad. De hecho, Sudou-kun casi fue expulsado una vez por Chabashira-sensei-sensei. Pero gracias a la rapidez de Horikita-san, te salvaste. De esta manera, sería extraño si no hay algo que podamos hacer.'/>
                <T e='Hirata tiene razón.' />
                <T e='Chabashira-sensei contestó con una sonrisa.' />
                <D n='ChabashiraSae' t='Así es. Como último recurso, puedes comprar una “cancelación de la expulsión” con puntos privados, pero por supuesto, el precio será alto, ¿sabes? Cancelación de la expulsión........en otras palabras, como regla general, una “cuerda de salvamento” tendrá la misma demanda en todos los años escolares. Para extender un salvavidas a una persona, hay que pagar 20 millones de puntos privados y otros 300 puntos de clase. Esto es, a lo sumo, sólo un salvavidas y no se eximirá la pena que se impondrá en caso de expulsión. Por supuesto, si alguno de los puntos requeridos resulta ser insuficiente, entonces no se puede usar una cuerda de salvamento.'/>
                <T e='Una línea de vida que requiere una gran cantidad de puntos privados no es algo por lo que se pueda pagar.' />
                <T e='Para el examen en curso, un mínimo de “400” puntos de clase son el prerrequisito para una línea de vida.' />
                <T e='Los estudiantes que son eliminados a través de la expulsión seguramente no serán rescatados.' />
                <T e='Porque para salvar a uno, toda la clase perdería una gran fortuna.' />
                <D n='HirataYousuke' t='Esos 20 millones de puntos de los que habló, no importa que toda la clase contribuya, ¿verdad?' />
                <T e='Sin embargo, Hirata ha considerado un futuro en el que podría tener que usar esa cuerda de salvamento y no ha descuidado comprobar.' />
                <D n='ChabashiraSae' t='Eso es cierto. Pero esto no tiene nada que ver con ustedes ya que de ninguna manera no tienen tanto.' />
                <T e='Chabashira-sensei-sensei concluye el informe.' />
                <D n='ChabashiraSae' t='No queda mucho tiempo hasta que lleguemos a nuestro destino. La forma en que decidan utilizar este tiempo depende de ustedes. Una vez que lleguemos, recogeré los materiales que he repartido. Además, el uso de teléfonos estará prohibido durante una semana. Pronto los confiscaré. Aparte de eso, son libres de llevar consigo lo necesario para la vida diaria y juegos, pero no se les permitirá llevar comida. Las cosas que no se pueden almacenar a largo plazo, como la carne, tendrán que ser consumidas antes de llegar o tiradas en la bolsa de basura cuando se bajen. Eso es todo.' />
                <T e='Los estudiantes que no reaccionaron mucho a la explicación del examen especial levantaron la voz.' />
                <T e='Aunque ya han experimentado lo mismo en la isla deshabitada, debe ser difícil que les confisquen el teléfono durante una semana' />
                <D n='IkeKanji' t='¡Tengo una pregunta!'/>
                <T e='Ike levantó la mano con entusiasmo. Chabashira-sensei-sensei muestra una sonrisa amarga.' />
                <D n='IkeKanji' t='Dijo que los chicos y las chicas estarán separados, pero ¿exactamente a qué distancia estaremos?' />
                <D n='ChabashiraSae' t='Hay dos edificios en la escuela al aire libre. El edificio principal será utilizado por los chicos y el otro por las chicas. Los edificios están juntos, pero en teoría, vivirán separados durante una semana. No se permitirá que salgan sin permiso durante el receso y después de la escuela.' />
                <D n='IkeKanji' t='¿Eso significa que no podremos hablar entre nosotros?' />
                <D n='ChabashiraSae' t='No, cada día durante una hora en la cafetería del edificio principal, tanto los chicos como las chicas comerán juntos. Es sólo dentro de ese período que la escuela no dará ninguna instrucción. En otras palabras, son libres de hacer lo que quieran. ¿Entiendes?' />
                <D n='IkeKanji' t='¡Sí!' />
                <T e='Quizás es tan feliz de poder hablar con las chicas, Ike se regocijaba.' />
                <T e='Me levanté un poco y me di vuelta para mirar a Shinohara, que está sentada cerca. Al hacerlo, me di cuenta de que, a pesar de que parecía exasperada, se mostraba un tanto feliz al escuchar las palabras de Ike.' />
                <T e='Tal vez esa cena de Navidad funcionó.' />
                <D n='ChabashiraSae' t='Si no hay más preguntas, entonces terminaré con esto.' />
                <T e='Tal vez decidió que sólo se harían preguntas tontas porque Chabashira-sensei terminó inmediatamente.' />
                <D n='HirataYousuke' t='Sensei. ¿Me presta su micrófono?' />
                <T e='Cuando Chabashira-sensei trató de terminar, fue Hirata quien la interrumpió.' />
                <D n='ChabashiraSae' t='Por supuesto, haz lo que quieras.' />
                <T e='Dijo Chabashira-sensei mientras soltaba el micrófono y se sentaba.' />
                <T e='Hirata lentamente se adelantó para reemplazarla y tomó el micrófono en sus manos.' />
                <D n='HirataYousuke' t='Por lo que dijo sensei, no parece que tengamos mucho tiempo, pero antes que nada, me gustaría escuchar la opinión de todos. Sobre cómo superar este examen. Qué tipo de división debemos buscar en los grupos.' />
                <D n='SudouKen' t='Para algo así, ¿no sería mejor si pudiéramos tener la mayor cantidad posible de nuestros compañeros de clase? Seleccionamos a los mejores y formamos un grupo pequeño de 12 y el resto lo podemos traer de cada una de las otras clases. ¿No es perfecto?'/>
                <T e='Sudou le dijo a Hirata.' />
                <D n='HirataYousuke' t='Eso es lo ideal, pero me pregunto si esos tres estudiantes de otras clases estarán dispuestos a unirse a nuestro grupo pequeño de 12. Naturalmente, estarán en guardia.' />
                <T e='Sería un grupo con el objetivo desvergonzado de ganar.' />
                <T e='No creo que los estudiantes de otras clases se unan uno tras otro a nuestro gusto.' />
                <T e='Y además, si ese grupo no consigue el primer puesto, el daño que recibiríamos también sería considerable.' />
                <D n='YamauchiHaruki' t='Pero... Si los inteligentes terminan formando un grupo, perderemos todas las oportunidades de ganar.' />
                <T e='Yamauchi murmuró eso.' />
                <T e='Parece que aún no se ha dado cuenta de que no es nuestra capacidad académica lo que se está poniendo a prueba esta vez.' />
                <D n='YamauchiHaruki' t='También nos gustaría tener la oportunidad de obtener puntos privados para nosotros.' />
                <T e='Es comprensible que Yamauchi se queje. Este fue un problema que también surgió hace un tiempo durante el examen en el crucero.' />
                <T e='El grupo grande en la parte superior ganará puntos privados, pero para los estudiantes en la parte inferior, no habrá beneficios.' />
                <T e='Al contrario, perderían sus puntos privados. Si es así, es comprensible que muchos estudiantes quieran ser asignados al grupo ganador.' />
                <D n='HirataYousuke' t='En cuanto a eso, si todo el mundo está de acuerdo, me gustaría ir por un camino que permita una distribución equitativa. No sabemos qué grupo grande se impondrá. Una vez que el examen esté en marcha, y podamos confirmar que los puntos privados aumentarán para toda la clase, entonces podremos dividirlos entre nosotros. Dado que la transferencia de puntos está permitida, no debería haber ningún problema.' />
                <T e='Incluso si se nos descuentan puntos, si todo el mundo comparte la carga, el riesgo también disminuirá.' />
                <D n='YamauchiHaruki' t='Ohh, ya veo. Está eso.' />
                <T e='Por supuesto que eso hace que sea fácil para los estudiantes talentosos quejarse, pero también es fácil llegar a un consenso en este examen especial.' />
                <T e='El factor decisivo seguirá siendo un misterio.' />
                <D n='ChabashiraSae' t='Fufu..........' />
                <T e='Después de escuchar a Hirata proponer su plan, Chabashira-sensei-sensei se dio la vuelta y se rió.' />
                <D n='ChabashiraSae' t='No he podido responder antes porque no me hicieron ninguna pregunta, pero como recompensa por su ascenso a la clase C, les daré un solo consejo.'/>
                <D n ='HirataYousuke' t=' ¿Consejo?' />
                <T e='En vez de aceptar obedientemente la recompensa, Hirata mostró cautela.' />
                <D n='ChabashiraSae' t='Siempre que no esté sujeto a las reglas, son libres de transferir puntos privados. Ya sea a mitad del examen o durante su vida diaria, siempre y cuando sea dentro de los límites legales, se pueden transferir de la manera que quieran. Sólo una cosa, los puntos privados no son lo mismo que dinero en el bolsillo. Ténganlo en cuenta.' />
                <D n='HirataYousuke' t='Con eso, ¿quiere decir que mientras se ahorren 20 millones de puntos, es posible transferirlos a cualquier clase de tu elección? ¿O se trata de la línea de vida?' />
                <D n='ChabashiraSae' t='Eso no es lo que quise decir. Hay varias maneras de usar los puntos privados. Incluso un solo punto extra ahorrado podría hacer toda la diferencia cuando se trata de la línea de vida, eso es lo que quiero decir. No siempre significa que llevarse bien, compartir puntos y apoyarse mutuamente sea lo correcto, ¿saben? Por ejemplo, digamos que Ike cometió un error y será expulsado a menos que se pague un millón de puntos de inmediato. Asumamos que has caído en este aprieto. Y si una transferencia no está permitida en ese momento y en ese lugar y él será expulsado a menos que tenga un millón de puntos privados a su disposición, ¿qué harías entonces? Si adoptan la estrategia de compartir equitativamente entre ustedes, tal vez estén haciendo algo de lo que no puedan retractarse.' />
                <T e='Habiendo escuchado que su nombre se usaba como ejemplo, pude escuchar a Ike engullendo a mi lado.' />
                <D n='ChabashiraSae' t='Además, cuando eso sucede, no hay garantía de que los otros estudiantes te salvarán. Porque puede que sean ellos mismos los que caigan en un aprieto después. El único capaz de protegerte serías tú mismo.' />
                <T e='Chabashira-sensei nos aconsejó como si intentara decir que la estrategia de compartir equitativamente entre nosotros es un error.' />
                <T e='Puede ser un consejo por el que deberíamos estar agradecidos, pero ahora será difícil unir a la clase.' />
                <D n='ChabashiraSae' t='Los que trabajan duro serán recompensados con el éxito. Esto es de conocimiento común en la sociedad. Una vez que entran en la sociedad, alguien lo suficientemente benévolo como para compartir su salario y bonos con sus amigos sería un caso raro, incluso entre los casos raros. Ahora que lo saben, lo que hagan a partir de ahora depende de ustedes' />
                <T e='dijo Chabashira-sensei mientras se reía.' />
                <T e='Es muy probable que lo que Chabashira-sensei acaba de decir sea cierto' />
                <T e='No creo que un profesor de esta escuela agite las cosas sólo porque no hay un precedente.' />
                <T e='Porque todos los días, ella habla en perfecto acuerdo con el manual. Sin embargo, esto tiene un lado negativo.' />
                <T e='Probablemente ha habido casos en los que los individuos han ahorrado puntos privados, pero a la inversa, ha habido personas que han sido salvadas porque sus compañeros de clase han estado ahorrando una gran cantidad de puntos.' />
                <T e='En cuanto a cómo lo sé, es porque en el pasado como un tercero, Horikita y yo proporcionamos los puntos privados para un Sudou casi expulsado y eso sentó un precedente.' />
                <T e='En última instancia, compartirlo de manera equitativa entre nosotros puede seguir siendo una medida preventiva contra incidentes imprevistos.' />
                <T e='Al darle a un individuo una suma de dinero tan grande, se corre el riesgo de que se apropie indebidamente de ella y también es muy posible que se produzca una traición.' />
                <T e='Chabashira-sensei dijo algo perturbador a su propia clase. Por supuesto, no puedo rechazar la posibilidad de que sea simplemente la política de la escuela, pero..........' />
                <D n='HirataYousuke' t='Entonces, ¿lo sometemos a votación por mayoría? No es que vayamos a decidir a través de esto, sino más bien, me gustaría saber lo que piensan todos después de escuchar esto. Las personas que prefieran compartir entre nosotros durante el examen especial de ahora en adelante, ¿pueden por favor levantar la mano? Por supuesto, no me importa aunque cambien de opinión más tarde.' />
                <T e='Hirata levantó su mano y se convirtió en el primero en hacerlo.' />
                <T e='La mayoría de los estudiantes estaban preocupados por eso y sólo podían levantar las manos poco a poco.' />
                <T e='Es importante estar unidos como clase y ayudarnos los unos a los otros, pero cuando se trata de esto, también es crucial que preparemos un seguro en caso de que seamos nosotros los que acabemos desechados.' />
                <T e='Una vez más, parece que la mayoría de los estudiantes han ahorrado tan sólo unos diez mil o cien mil puntos privados.' />
                <T e='En ese caso, habrá bastantes estudiantes que tendrán suficientes puntos ahorrados para emergencias si solo pueden colocarse en el primer lugar.' />
                <T e='Los estudiantes que no tienen confianza en sí mismos son los que más desearían una parte equitativa. Había más de lo esperado, pero al final, el número de manos levantadas ni siquiera era la mitad de la clase.' />
                <D n='HirataYousuke' t='Gracias.' />
                <T e='Esto significa que la mayoría de la clase no desea un reparto igualitario de los puntos.' />
                <T e='Sin embargo, ahora que se ha convertido en algo así, ni siquiera Hirata, que pertenece a la facción de reparto equitativo, será capaz de dirigir las cosas en esa dirección con tanta facilidad.' />
                <D n='ChabashiraSae' t='¿Fue un consejo innecesario, Hirata?' />
                <D n='HirataYousuke' t='No, se lo agradezco. Es una información valiosa para nosotros en esta etapa.' />
                <T e='Mi teléfono vibró una vez. Pensé que “él” había contestado y saqué mi teléfono, pero resultó que era un mensaje de la “hermana” Horikita.' />
                <T e='Ya lo adiviné, pero tenía que ver con este examen especial.' />
                <D n='HorikitaSuzune' t='[¿Tienes alguna idea?]' />
                <T e='Una frase que me dejaba todo a mí.' />
                <D n='AyanokoujiKiyotaka' t='[Ninguna en absoluto.]' />
                <T e='Le respondí con eso exactamente.' />
                <T e='Pero, lo reconsideré un poco y decidí enviar sólo una cosa más.' />
                <D n='AyanokoujiKiyotaka' t='[Este examen separará a los chicos de las chicas. No puedo ayudar en nada, por favor, hazlo lo mejor que puedas.]' />
                <T e='Decidí dar ese grito de ánimo. Horikita probablemente tiene muchas cosas que le gustaría decirme, pero es imposible hacerlo aquí.' />
                <T e='Rápidamente concluí mi charla con Horikita y comprobé otro grupo de charla que está activo en este momento.' />
                <T e='Es el chat del Grupo Ayanokouji (aunque no quiero alardear).' />
                <T e='Keisei y Akito, así como Airi y Haruka estaban discutiendo alegremente el examen.' />
                <T e='Ya lo había leído, pero lo cerré sin hacer ningún comentario en particular.' />
                <T e='Así que escuché a Hirata y la conversación de los demás.' />
                <D n='HirataYousuke' t='No hay tiempo suficiente para formular una estrategia. Además, si los chicos y las chicas tendrán que formar grupos separados, será bastante difícil aconsejarse.' />
                <D n='Undefined' t='De ninguna manera....' />
                <T e='Mirándolo desde la perspectiva de las chicas, ya no podrían pedir ayuda a Hirata, el hombre en el que siempre podían confiar.' />
                <T e='Es comprensible que se sientan inquietas.' />
                <D n='HirataYousuke' t='Como los chicos no podremos ayudarles, creo que las chicas deberían elegir una clara líder. ¿Puedes asumir ese papel, Horikita-san?' />
                <T e='Hirata debió pensar en esto desde que escuchó la explicación para el examen.' />
                <T e='Le clavó una flecha a esa chica solitaria, Horikita.' />
                <T e='Por supuesto, Horikita es la única que puede desempeñar este papel en nuestra clase.' />
                <D n='HorikitaSuzune' t='Muy bien. No me importa, consúltenme en cualquier momento si hay algo que les preocupa.' />
                <T e='Horikita contestó así sin mostrar ningún desagrado. Sin embargo, aunque Horikita gradualmente se está convirtiendo en alguien de quien nuestros compañeros de clase pueden depender, su nivel de confianza en ella sigue siendo muy diferente al de Hirata.' />
                <T e='Pero si es la Horikita de ahora mismo, ella también lo entenderá.' />
                <D n='HorikitaSuzune' t='Sin embargo, debe haber bastantes chicas que sientan que no seré lo suficientemente confiable como para hacerlo sola. No me gusta decir esto de mí misma, pero no creo que tenga una personalidad que se preste bien para una consulta.' />
                <T e='Realmente no es algo que uno quisiera decir sobre sí mismo.' />
                <T e='Por eso me gustaría que Kushida me ayudara como sublíder. ¿Qué dices?' />
                <T e='Horikita le dijo a Kushida, que se movió hacia delante.' />
                <D n='KushidaKikyou' t='¿Seré de utilidad?' />
                <D n='HorikitaSuzune' t='Por supuesto que lo serás. Confían en ti más que en nadie en esta clase.' />
                <D n='KushidaKikyou' t='Umm......ok. Si estás de acuerdo conmigo, entonces voy a ayudar.' />
                <D n='HorikitaSuzune' t='Gracias. Ahora será mucho más fácil para las demás personas pedir una opinión. Si les resulta difícil hablar conmigo directamente, no me importa que lo hagan a través de Kushida. Responderé a cualquier consulta, no importa lo trivial que sea.' />
                <T e='Dejando de lado hasta qué punto Kushida es digna de confianza, es un hecho inequívoco que éste es el mejor planteamiento en este momento.' />
                <T e='Debido a las reglas de este examen, es considerablemente difícil que los chicos y chicas se involucren en los asuntos de los otros.' />
                <T e='En primer lugar, es imposible que un chico se una a la lucha de las chicas.' />
                <T e='Tanto las lecciones que recibiremos así como el examen que tomaremos, a pesar de estar en la misma instalación, se llevarán a cabo en diferentes lugares.' />
                <T e='El único momento en que podemos ponernos en contacto es durante la hora que tenemos para comer.' />
                <T e='Más aún si nuestros teléfonos, que podríamos usar para tener un contacto regular, son confiscados.' />
                <T e='Aun así, es esencial que recopilemos la mayor cantidad de información posible.' />
                <T e='En ese caso, necesitaré cómplices que me ayuden a reunir información de las chicas. Dentro de nuestra clase, los movimientos de Kushida también son ligeramente preocupantes.' />
                <T e='Las únicas dos que puedo usar serían Horikita o Kei. La primera está atrapada en una situación bastante problemática. También, necesito tomar en cuenta que ella está pensando demasiado en mis intenciones y también está actuando innecesariamente.' />
                <T e='Lo más importante es que si es consultada por las otras chicas, no tendrá espacio para hacer otras cosas.' />
                <T e='Por lo tanto, como era de esperar, la única que puedo usar es Kei.' />
                <T e='Pero no puedo forzar a Kei a hacer que vea a todo el grupo sola.' />
                <T e='Envié los hechos esenciales al teléfono de Kei.' />
                <T e='El correo llegó e inmediatamente fue visto por Kei, quien respondió con un correo en blanco.' />
                <T e='Los chicos y chicas estarán peleando una batalla mientras están separados por un largo período de tiempo.' />
                <T e='Un examen especial único está a punto de comenzar y parece que asumió instantáneamente que me pondría en contacto con ella.' />
                <T e='La propia Kei podría querer un consejo ahora mismo.' />
                <T e='Teniendo en cuenta el sistema de liderazgo y responsabilidad compartida, no es imposible pensar que hasta Kei pueda convertirse en un sacrificio' />
                <T e='En cuanto a su actitud durante las clases y sus resultados en los exámenes, no puedo decir que a Kei le vaya bien, ni siquiera como halago.' />
                <T e='Por eso le enseñaré a protegerse.' />
                <T e='No es algo que todos los estudiantes puedan lograr, pero es una manera de reducir el riesgo, aunque sea un poco.' />
                <T e='En cuanto a mí, en realidad no podría importarme menos el examen especial que se llevará a cabo.' />
                <T e='No tengo intención de ejecutar estrategias ganadoras. Sólo voy a superarlo con éxito.' />
                <T e='Aun así, al igual que le estoy dando consejos a Kei, eso no significa que no vaya a hacer ningún movimiento.' />
                <T e='El peor de los casos en el examen especial sería si ocurren expulsiones múltiples que en la clase C.' />
                <T e='Y es imposible proteger perfectamente a toda la clase por mí mismo.' />
                <T e='Tengo que reducir la cantidad de gente que necesito proteger.' />
                <T e='En resumen, aparte de mí, me gustaría proteger a Kei, que finalmente se ha convertido en un cómplice prominente, así como a Hirata.' />
                <T e='A continuación, considerando mi participación con el consejo estudiantil, tendré que asegurarme de que Horikita también sobreviva.' />
                <T e='También están mis amigos Keisei, Akito, Haruka y Airi. Es sólo que, aunque deseo que se queden, no estarán bajo mi protección. Sin embargo, como amigo, definitivamente rezaré para que no sean expulsados.' />
                <T e='Aunque no habrá muchas oportunidades para que todos los años escolares se reúnan, debería estar bien si me quedo a vigilar los movimientos de Nagumo.' />
                <T e='No tengo ningún interés en las escaramuzas que ocurrirán a mi alrededor.' />
                <T e='El autobús abandonó la carretera y comenzó a ascender gradualmente por el camino montañoso que hasta cierto punto está pavimentado. Me pregunto si se ha convertido en una costumbre para nosotros ir al mar o a ríos o lugares rodeados de naturaleza cada vez que salimos de la escuela.' />

            </FlatList>
        </View>
    );
}