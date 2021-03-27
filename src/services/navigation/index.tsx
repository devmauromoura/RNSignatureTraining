import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import InitialScreen from '../../screens/initialScreen';

const Stack = createStackNavigator();

const Header = {};
const noHeader = {
  headerShown: false
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InitialScreen" component={InitialScreen} options={noHeader}/>
      </Stack.Navigator>    
    </NavigationContainer>
  );
}