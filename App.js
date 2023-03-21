import { Dimensions, Image, View, Button, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './src/screens/Onboarding/Onboarding';
import Splash from './src/screens/Splash/Splash';
import Login from './src/screens/Auth/Login/Login';
import Signup from './src/screens/Auth/Signup/Signup';
import Main from './src/screens/Index/Main';
import Dashboard from './src/screens/Dashboard/Dashboard';
import DrawerNavigator from './src/Navigation/DrawerNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window')

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DrawerNavigator} options={{headerShown :false}}

        />
        {/* <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;