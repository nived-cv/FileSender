import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Discover from '../screens/Discover';
import Settings from '../screens/Settings';
import {Screen} from './routes';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screen.DISCOVER} component={Discover} />
        <Stack.Screen name={Screen.SETTINGS} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
