import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function home() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> Lecture </Text>
        </View>
    );
}