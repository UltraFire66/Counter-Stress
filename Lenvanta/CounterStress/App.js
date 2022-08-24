import * as React from 'react';
import {
  StyleSheet,
  
} from 'react-native';

import Tabs from './components/tabs';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//psicologo
import PerfilPsico from './telasPsico/PerfilPsico';

//usuario padrão
import Login from './telasUsuario/login';
import Cadastro from './telasUsuario/Cadastro';
import CadastroUsuario from './telasUsuario/CadastroUsuario';
import Diario from './telasUsuario/Diario';
import MEs from './telasUsuario/MEs'
import CatalogoPsi from './telasUsuario/CatalogoPsi';//catálogo de psicologos
import PerfilUsuario from './telasUsuario/PerfilUsuario';
import EditarPerfil from './telasUsuario/EditarPerfil';
import SubMEs from './telasUsuario/SubMEs';
import CategoriasMEs from './components/CategoriasMEs';
import Planejamento from './telasUsuario/Planejamento';
import EntrarQuest from './telasUsuario/EntrarQuest';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
      <>
    
    <NavigationContainer>

    
      
      <Stack.Navigator screenOptions= { {headerShown: false}}
        initialRouteName = "CadastroUsuario">
        <Stack.Screen name = "Tab" component = {Tabs}/>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "CadastroUsuario" component = {CadastroUsuario}/>
        <Stack.Screen name = "Cadastro" component = {Cadastro}/>
        <Stack.Screen name = "PerfilUsuario" component = {PerfilUsuario}/>
        <Stack.Screen name = "editarPerfil" component = {EditarPerfil}/>
        <Stack.Screen name = "SubMEs" component = {SubMEs}/>
        <Stack.Screen name = "CategoriasMEs" component={CategoriasMEs}/>
        <Stack.Screen name = "Planejamento" component={Planejamento}/>
        <Stack.Screen name = "PerfilPsico" component = {PerfilPsico}/>
      
      </Stack.Navigator>

      


    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
