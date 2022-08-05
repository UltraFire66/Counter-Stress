
import React from 'react';
import { Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable }
  from 'react-native';

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { LinearGradient } from 'expo-linear-gradient';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import Torii from './assets/torii.png';

import Login from './telas/login';
import Cadastro from './telas/Cadastro';
import CadastroUsuario from './telas/CadastroUsuario'; 


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

    
      
      <Stack.Navigator screenOptions= { {headerShown: false}}
        initialRouteName = "Login">
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Cadastro" component = {Cadastro}/>
        <Stack.Screen name = "CadastroUsuario" component = {CadastroUsuario}/>
        
      
      </Stack.Navigator>

      


    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
    
   

});
  
