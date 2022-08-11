
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform,Button } from 'react-native'; 
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { volumenCOTE } from '../screens/Youkoso/volumensData';
//import Card from '../constants/Card';

const Card = (props) => {

    const { name, desc, image, width, height } = props;

    return (
        <View style={{ width: 350, height: 526, backgroundColor: 'white', padding: 10, borderRadius: 30, marginBottom: 30 }}>
            <Image
                style={{ width: '100%', height: 420, borderRadius: 20, backgroundColor: 'orange' }}
                source={{ uri: image }}
            />
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ fontSize: 20, color: 'gray' }}>{desc}</Text>
        </View>
    )
}

export default function Home({navigation}) {
    const navigator = useNavigation();
    return (
        <View style={globalStyles.cardContainer}>
            <ScrollView contentContainerStyle={{ marginHorizontal: 18 }} Style={{ marginTop: Platform.OS === 'android' && '30' }}>
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 1"} image={"https://i.imgur.com/nvtBf0u.jpg"} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 2"} image={"https://i.imgur.com/uQrcIIh.jpg"} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 3"} image={"https://i.imgur.com/lVqhukO.jpg"} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 4"} image={"https://i.imgur.com/vMKf4t7.jpg"} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 5"} image={"https://i.imgur.com/UIsUWco.jpg"} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 6"} image={"https://i.imgur.com/Kaw7s8P.jpg"} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 7"} image={"https://i.imgur.com/X6Arrbw.jpg"} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 7.5"} image={"https://i.imgur.com/XX1wvdA.jpg"} />
                <Card name={"COTE"} desc={"Classroom of the Elite Volumen 8"} image={"https://i.imgur.com/ZHgDj7d.jpg"}/>

            <Text style={globalStyles.title}> COTE 8</Text>
            <Button
                onPress={() => navigation.navigate('PrologoV8')}
                title='Prologo'
                style={globalStyles.ScreenContainer}>"PrologoV8"
            </Button>
            <Button 
            onPress={ () => navigation.navigate('Settings') }
                title='Settings' 
                style={globalStyles.ScreenContainer}>"Settings" 
            </Button>
            <Button
                onPress={() => navigation.navigate('Wiki')}
                title='Wiki'
                style={globalStyles.ScreenContainer}>"Wiki"
            </Button>
            </ScrollView>
        </View>
    );
}

