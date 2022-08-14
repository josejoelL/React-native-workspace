import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Profile() {
    return (
        <View style={globalStyles.ScreenContainer }>
            <Text style={globalStyles.title}> Profile </Text>
        </View>
    );
}