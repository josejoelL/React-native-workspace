import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Reels() {
    return (
        <View style={globalStyles.ScreenContainer} screenOptions={{ headerShown: false }}>
            <Text style={globalStyles.title}> Reels </Text>
        </View>
    );
}