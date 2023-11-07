import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './screens/register';
import Tabs from './screens/(tabs)/_layout';
import Discount from './screens/(tabs)/discount';
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();
const noHead = { headerShown: false };

function MyStack() {
  return (
  <NativeBaseProvider>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Register" component={Register} options={noHead} />
            <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
            <Stack.Screen name='Discount' component={Discount}/>
        </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
  );
}

export default MyStack;
