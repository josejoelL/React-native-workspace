import { View, Text, ScrollView, TouchableOpacity, useState } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

export default function Cap3V8() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.ScreenContainer}>
            <ScrollView>
                <Text style={globalStyles.title}> CAPÍTULO 3 </Text>
            </ScrollView>
        </View>
    );
}