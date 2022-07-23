import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform } from 'react-native';


const Menu = (props) => {

    const { name, desc, image, width, height } = props;

    return (
        <Text style={{ fontSize: 30, textAlign: 'center', }}>{"hola"}</Text>
    )
}


export default function App() { 
    return (
        <SafeAreaView >
            <ScrollView >
    
                <Menu/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
