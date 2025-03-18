
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Componentes/Home';
import Tip1 from '../Componentes/Tip1';
import Tip2 from '../Componentes/Tip2';

const Stack = createNativeStackNavigator();

export default function rotasBotao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Tip1" component={Tip1} />
                <Stack.Screen name="Tip2" component={Tip2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}