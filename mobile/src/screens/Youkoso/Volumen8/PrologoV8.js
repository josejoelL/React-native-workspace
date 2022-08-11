import { View, Text,ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function PrologoV8() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <ScrollView>
            <Text style={globalStyles.title}> PRÓLOGO </Text>
            <Text style={globalStyles.title}> EL MONÓLOGO DE HORIKITA MANABU</Text>
            <Text style={globalStyles.title}>Hay algunas cosas que la gente encontraría extrañas si se enterara de ello.</Text>
            </ScrollView>
        </View>
    );
}