import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton } from '../constants/Quiz';
export default function Quiz2() {
    return (
        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz2 </Text>
            <ContinueButton id="Quiz3" />
        </View>
    );
}