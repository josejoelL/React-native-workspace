import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton } from '../constants/Quiz';
export default function Quiz1() {
    
    return (
        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz1 </Text>

            <ContinueButton id="Quiz2" />
        </View>
    );
}