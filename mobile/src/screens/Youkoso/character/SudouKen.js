import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SudouKen() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> SudouKen </Text>
        </View>
    );
}