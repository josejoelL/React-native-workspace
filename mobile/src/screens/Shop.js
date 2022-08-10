import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Shop() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> Shop </Text>
        </View>
    );
}