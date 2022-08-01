import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  
} from 'react-native';

import Tabs from './components/tabs';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './telas/login';
import Cadastro from './telas/Cadastro';
import CadastroUsuario from './telas/CadastroUsuario';
import Perfil from './telas/Perfil';
import EditarPerfil from './telas/EditarPerfil';
import Diario from './telas/Diario';
import MEs from './telas/MEs'
import CatalogoPsi from './telas/CatalogoPsi';//catálogo de psicologos

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default function App() {
  return (
      <>
    
    <NavigationContainer>

    
      
      <Stack.Navigator screenOptions= { {headerShown: false}}
        initialRouteName = "Login">
        <Stack.Screen name = "Tab" component = {Tabs}/>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "CadastroUsuario" component = {CadastroUsuario}/>
        <Stack.Screen name = "Cadastro" component = {Cadastro}/>
        <Stack.Screen name = "Perfil" component = {Perfil}/>
        <Stack.Screen name = "EditarPerfil" component = {EditarPerfil}/>
        
      
      </Stack.Navigator>

      


    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
 
});
