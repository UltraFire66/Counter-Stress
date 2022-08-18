import * as React from 'react';
import {
  StyleSheet,
  
} from 'react-native';

import Tabs from './components/tabs';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



import Login from './telas/login';
import Cadastro from './telas/Cadastro';
import CadastroUsuario from './telas/CadastroUsuario';
import Diario from './telas/Diario';
import MEs from './telas/MEs'
import CatalogoPsi from './telas/CatalogoPsi';//catálogo de psicologos
import Perfil from './telas/Perfil';
import EditarPerfil from './telas/EditarPerfil';
import SubMEs from './telas/SubMEs';
import CategoriasMEs from './components/CategoriasMEs';
import Planejamento from './telas/Planejamento';

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
        <Stack.Screen name = "editarPerfil" component = {EditarPerfil}/>
        <Stack.Screen name = "SubMEs" component = {SubMEs}/>
        <Stack.Screen name = "CategoriasMEs" component={CategoriasMEs}/>
        <Stack.Screen name = "Planejamento" component={Planejamento}/>
      
      </Stack.Navigator>

      


    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
