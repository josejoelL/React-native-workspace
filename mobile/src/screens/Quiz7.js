import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { ContinueButton } from '../constants/Quiz';
export default function Quiz7() {
    return (
        <View style={globalStyles.ScreenContainer} >
            <Text style={globalStyles.title}> Quiz7 </Text>
            <ContinueButton id="Quiz8" />
        </View>
    );
}