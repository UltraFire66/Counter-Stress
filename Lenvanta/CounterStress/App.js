import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  
} from 'react-native';



import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Login from './telas/login';
import Cadastro from './telas/Cadastro';
import CadastroUsuario from './telas/CadastroUsuario';
import Diario from './telas/Diario';
import MEs from './telas/MEs'
import CatalogoPsi from './telas/CatalogoPsi';//catálogo de psicologos


const Stack = createStackNavigator();



export default function App() {
  return (
      <>
    
    <NavigationContainer>

    
      
      <Stack.Navigator screenOptions= { {headerShown: false}}
        initialRouteName = "Login">
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "CadastroUsuario" component = {CadastroUsuario}/>
        <Stack.Screen name = "Cadastro" component = {Cadastro}/>
        <Stack.Screen name = "Diario" component = {Diario}/>
        <Stack.Screen name = "MEs" component = {MEs}/>
        <Stack.Screen name = "CatalogoPsi" component = {CatalogoPsi}/>
      
      </Stack.Navigator>

      


    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
