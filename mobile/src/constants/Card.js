import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform, Pressable } from 'react-native';

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

export const RadioButton = (props) => {
    const [userOption, setUserOption] = useState(null);
    const { data, onSelect } = props;
    const item = data;
  
    return (
        <View style={{flex: 1 }}>
            {item.map((item) => {
                return (
                    <Pressable
                        style={ //Line 5
                            item.value === userOption ? styles.selected : styles.unselected
                        } /*Add style here */ //Line 7
                        key={item.id} 
                        onPress={() => setUserOption(item.value)}>
                        <Text style={styles.option}> {item.value}</Text>
                    </Pressable>
                );
            })}
         
        </View>
    );
}

const styles = StyleSheet.create({
    option: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        
    },
    unselected: {
        backgroundColor: 'darkgrey',
        margin: 6,
        padding: 10,
        borderRadius: 10,
    },
    selected: {
        backgroundColor: 'green',
        margin: 6,
        padding: 10,
        borderRadius: 10,
    },
});
export default styles;