import * as React from 'react';
import { useState,useContext,useEffect } from 'react';
import { AuthContext } from '../contexts/auth';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';

import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Diario from "../telasUsuario/Diario";
import MEs from "../telasUsuario/MEs";
import Catalogo from "../telasUsuario/CatalogoPsi";
import Home from "../telasUsuario/Home";
import Quest from "../telasUsuario/EntrarQuest";
import Questionario from "../telasUsuario/Questionario";
import BotaoQuest from "./botaoQuest";
import BotaoQuestClicado from "./botaoQuestClicado";

import {vh,vw} from 'react-native-expo-viewport-units';
import { Axios } from 'axios';

const Tab = createBottomTabNavigator();

const Tabs = () =>{

  const [clicado,setClicado] = useState(false);
  const [cor,setCor] = useState('#C4BFE7')
  const {user} = useContext(AuthContext);
  useEffect(()=>{

    if(user.data[0].flag.data[0] == 1){
      setCor('#78ABC6');
    }


  },[])

  //{flag == 0 ? setCor = '#C4BFE7': setCor = '#78ABC6'}

  return(
    <>
    
    <Tab.Navigator  screenOptions={{headerShown: false,
    
      tabBarStyle: { 
      borderTopColor:'white',
      backgroundColor: cor,
      paddingTop:  vh(2),
      height: vh(10),
     
      
      borderTopWidth:3
      },

      tabBarActiveTintColor: 'black',
       
      
      }}

      
      >
    
      <Tab.Screen 
      name = "Home" 
      component = {Home}
      options = {{
        tabBarLabel: '',
        tabBarIcon : ({size,color}) => (

          <FontAwesome5 name = "home" size = {32} color = {color}/>
        )
      }}
      />
      
      <Tab.Screen 
      name = "Diario" 
      component = {Diario}
      options = {{
        tabBarLabel: '',
        tabBarIcon : ({size,color}) => (

          <MaterialCommunity name = "notebook" size = {32} color = {color}/>

        )
      }}
      />

      <Tab.Screen 
      name = "Quest"
      component = {Quest}
      
      options = {{
        tabBarLabel: '',
    
        tabBarIcon : ({size,color,focused}) => (
          
          focused ?
          <BotaoQuestClicado /> : <BotaoQuest/>

        )
      }}
      
      />

      <Tab.Screen 
      name = "MEs" 
      component = {MEs}
      
      options = {{
        tabBarLabel: '',
        tabBarIcon: ({size,color}) => (
          <MaterialIcons name = "category" size = {36 } color = {color}/>
        )
      }}
      />
      <Tab.Screen 
      name = "Catalogo" 
      component = {Catalogo}

      options = {{
        tabBarLabel: '',
        tabBarIcon: ({size,color}) => (
          <FontAwesome5 name = "user-graduate" size = {32} color = {color}/>
        )
      }}
      />

      



    </Tab.Navigator>
    </>
  );
}

export default Tabs;