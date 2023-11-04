import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './screens/register';
import Tabs from './screens/(tabs)/_layout';
import Home from './screens/(tabs)/home';

const Stack = createNativeStackNavigator();
const noHead = { headerShown: false };

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
