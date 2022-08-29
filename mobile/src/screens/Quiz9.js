import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton } from '../constants/Quiz';
export default function Quiz9() {
    return (
        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz9 </Text>
            <ContinueButton id="Quiz10" />
        </View>
    );
}