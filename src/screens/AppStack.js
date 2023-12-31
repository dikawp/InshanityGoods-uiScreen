import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './register'
import Tabs from './(tabs)/_layout';
import Discount from './discount';

const Stack = createNativeStackNavigator();
const noHead = { headerShown: false };

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Register" component={Register} options={noHead} />
            <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
            <Stack.Screen name='Discount' component={Discount}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
