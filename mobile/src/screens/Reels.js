import { View, Text,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

export default function Reels() {
    const navigation = useNavigation();
    
    return (
        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz Naruto</Text>
            <TouchableOpacity style={{
                backgroundColor: 'green',
                padding:10,
                marginTop: '20%',
                width: '50%',
                alignSelf: 'center',
                borderRadius: '5px',
                }}

                onPress={() => navigation.navigate('Quiz1')}
                >

                <Text style={{
                    
                    fontSize: 20,
                    color: 'white',
                    textAlign: 'center',
                
                    fontWeight: "bold",
                }}>Play</Text>
            </TouchableOpacity>
        </View>
    );
}