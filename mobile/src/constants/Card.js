
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform } from 'react-native';

export const Card = (props) => {

    const { name, desc, image, width, height } = props;

    return (
        <View style={{ width: 350, height: 526, backgroundColor: 'white', padding: 10, borderRadius: 30, marginBottom: 30 }}>
            <Image
                style={{ width: '100%', height: 420, borderRadius: 20, backgroundColor: 'orange' }}
                source={{ uri: image }}
            />
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ fontSize: 20, color: 'gray' }}>{desc}</Text>
        </View>
    );
}