import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function VnProfile() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> Visual Novel </Text>
        </View>
    );
}