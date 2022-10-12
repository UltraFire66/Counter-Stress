import * as React from 'react';
import {
  StyleSheet,
  
} from 'react-native';

import Tabs from './components/tabs';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthProvider from './contexts/auth';
//psicologo
import PerfilPsico from './telasPsico/PerfilPsico';

//usuario padrão
import Login from './telasUsuario/login';
import Cadastro from './telasUsuario/Cadastro';
import CadastroUsuario from './telasUsuario/CadastroUsuario';
import CadastroPsicologo from './telasPsico/CadastroPsicologo';
import Diario from './telasUsuario/Diario';
import MEs from './telasUsuario/MEs'
import CatalogoPsi from './telasUsuario/CatalogoPsi';//catálogo de psicologos
import PerfilUsuario from './telasUsuario/PerfilUsuario';
import EditarPerfil from './telasUsuario/EditarPerfil';
import SubMEs from './telasUsuario/SubMEs';
import CategoriasMEs from './components/CategoriasMEs';
import MeEspecifica from './telasUsuario/MeEspecifica';
import Planejamento from './telasUsuario/Planejamento';
import EntrarQuest from './telasUsuario/EntrarQuest';
import CriarDiario from './telasUsuario/CriarDiario';
import EntradaDiarioID from './telasUsuario/EntradaDiarioID';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
      <>
    
    <NavigationContainer>
    
      <AuthProvider>
        
        <Stack.Navigator screenOptions= { {headerShown: false}}
          initialRouteName = "Cadastro">

          <Stack.Screen name = "Tab" component = {Tabs}/>
          <Stack.Screen name = "Login" component = {Login}/>
          <Stack.Screen name = "CadastroUsuario" component = {CadastroUsuario}/>
          <Stack.Screen name = "CadastroPsicologo" component = {CadastroPsicologo}/>
          <Stack.Screen name = "Cadastro" component = {Cadastro}/>
          <Stack.Screen name = "PerfilUsuario" component = {PerfilUsuario}/>
          <Stack.Screen name = "editarPerfil" component = {EditarPerfil}/>
          <Stack.Screen name = "SubMEs" component = {SubMEs}/>
          <Stack.Screen name = "CategoriasMEs" component={CategoriasMEs}/>
          <Stack.Screen name = "MeEspecifica" component={MeEspecifica}/>
          <Stack.Screen name = "Planejamento" component={Planejamento}/>
          <Stack.Screen name = "PerfilPsico" component = {PerfilPsico}/>
          <Stack.Screen name = "CriarDiario" component = {CriarDiario}/>
          <Stack.Screen name = "EntradaDiario" component = {EntradaDiarioID}/>

          

        
        </Stack.Navigator>

      </AuthProvider>
    
      

      


    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
