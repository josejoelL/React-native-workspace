import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform, } from 'react-native';
import global, { globalStyles } from '../screens/Youkoso/styles/global';
import { useNavigation } from '@react-navigation/native';
import { pfps } from '../screens/Youkoso/character/data';
import { Colors } from '../screens/Youkoso/constants/colorY';

export const T = (props) => {
    const { e } = props;
    return (
        <Text style={globalStyles.title}>{e}</Text> 
    );
}

export const W = (props) => {
    const { i,k } = props;
    let nav = i;
    const navigation = useNavigation();
    return (

        <Text style={globalStyles.titleWiki} onPress={() => navigation.navigate(nav)}>{k}</Text>
    );
}
export const D = (props) => {
    const { n, t } = props;
    let name = n;
    let pfp =  pfps.find(x => x.name === name )
    return (
        <View style={{ flex: 0.001, padding: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.gray, borderRadius: 10 }}>
            <Image
                style={{ width: 50, height: 50, borderRadius: 100, padding: 20, }}
                source={ {uri: pfp.image} }>
            </Image>
            
            <View style={{ padding: 20, flexDirection: 'rowflex-start', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Text style={globalStyles.titledialog}>{pfp.nick}</Text>
                <Text style={globalStyles.dialog}>{t}</Text>
            </View>
        </View>
    );
}