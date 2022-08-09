import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Diario from "../telas/Diario";
import MEs from "../telas/MEs";
import Catalogo from "../telas/CatalogoPsi";
import Home from "../telas/Home";
import Quest from "../telas/EntQuestionario"
import BotaoQuest from "./botaoQuest";

import {vh,vw} from 'react-native-expo-viewport-units';

const Tab = createBottomTabNavigator();

const Tabs = () =>{

  return(

    <Tab.Navigator  screenOptions={{headerShown: false,
    
      tabBarStyle: { 
      borderTopColor:'white',
      backgroundColor: '#C4BFE7',
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
      component = {Home}
      
      options = {{
        tabBarLabel: '',
    
        tabBarIcon : ({size,color}) => (

          <BotaoQuest/>

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

  );
}

export default Tabs;