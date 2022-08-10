import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Search() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> Search </Text>
        </View>
    );
}