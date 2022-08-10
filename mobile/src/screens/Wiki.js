import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Wiki() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> Wiki </Text>
        </View>
    );
}