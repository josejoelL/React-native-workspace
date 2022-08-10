import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Settings() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> Settings </Text>
        </View>
    );
}