
import { View ,Text,Button} from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';
export default function Home({navigation}) {
    const navigator = useNavigation();
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> Home </Text>
            <Button 
            onPress={ () => navigation.navigate('Settings') }
                title='Settings' 
                style={globalStyles.ScreenContainer}>"Settings" 
            </Button>
            <Button
                onPress={() => navigation.navigate('Wiki')}
                title='Wiki'
                style={globalStyles.ScreenContainer}>"Wiki"
            </Button>
        </View>
    );
}