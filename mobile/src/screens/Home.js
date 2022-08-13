
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, Platform,Button,Dimensions,Animated,PanResponder } from 'react-native'; 
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { volumenCOTE } from '../screens/Youkoso/volumensData';
import { Colors } from '../constants/color';
//import Card from '../constants/Card';

const Card = (props) => {
    const navigation = useNavigation();
    const { name, desc, image, width, height, color, id} = props;

    return (
        <TouchableOpacity 
        style={{
            width: 350,
            height: 526,
            backgroundColor: 'white',
            padding: 25,
            borderRadius: 30,
            marginBottom: 1,
            marginTop: 50 
            
        }} 
            onPress={() => navigation.navigate(id)}
        >
           
            <Image
                style={{ width: '100%', height: 420, borderRadius: 20, backgroundColor: 'white' }}
                source={{ uri: image }}
            />
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ fontSize: 18, color: 'gray' }}>{desc}</Text>
            
             
        
        
        </TouchableOpacity>
    )
}

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.cardContainer}>
        
            <ScrollView contentContainerStyle={{ marginHorizontal: 18 }} Style={{ marginTop: Platform.OS === 'android' && '30' }} 
              
            >
                <Text style={globalStyles.title}></Text>
               
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 1"} image={"https://i.imgur.com/nvtBf0u.jpg"} id={'Cote1'} color={'red'}/>
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 2"} image={"https://i.imgur.com/uQrcIIh.jpg"} id={'Cote2'} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 3"} image={"https://i.imgur.com/lVqhukO.jpg"} id={'Cote3'} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 4"} image={"https://i.imgur.com/vMKf4t7.jpg"} id={'Cote4'} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 5"} image={"https://i.imgur.com/UIsUWco.jpg"} id={'Cote5'} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 6"} image={"https://i.imgur.com/Kaw7s8P.jpg"} id={'Cote6'} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 7"} image={"https://i.imgur.com/X6Arrbw.jpg"} id={'Cote7'} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 7.5"} image={"https://i.imgur.com/XX1wvdA.jpg"} id={'Cote7_5'} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 8"} image={"https://i.imgur.com/ZHgDj7d.jpg"} id={'Cote8'} />
                <Text style={globalStyles.title}></Text>
            
            
            </ScrollView>
        </View>
    );
}

