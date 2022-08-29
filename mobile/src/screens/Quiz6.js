import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton } from '../constants/Quiz';
export default function Quiz6() {
    return (
        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz6 </Text>
            <ContinueButton id="Quiz7" />
        </View>
    );
}