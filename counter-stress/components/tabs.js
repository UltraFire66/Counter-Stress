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

const Tab = createBottomTabNavigator();

const Tabs = () =>{

  return(

    <Tab.Navigator  screenOptions={{headerShown: false,
    
      tabBarStyle: { 
      borderTopColor:'white',
      backgroundColor: '#C4BFE7',
      display: 'flex',
      paddingBottom: 5,
      paddingTop: 5,
      
      borderTopWidth:3
      },
      
      }}

      tabBarOptions = {{
        
        activeTintColor: 'black',
        inactiveTintColor: '#aaa',
        indicatorStyle: {
                backgroundColor: 'red',
                height: '80%',
                borderRadius: 30,
                marginBottom: 8,
                marginLeft: 12,
                width: '45%'
            },
         
      }}

      
    >
    
      <Tab.Screen 
      name = "Home" 
      component = {Home}
      options = {{
        tabBarLabel: '',
        tabBarIcon : ({size,color}) => (

          <FontAwesome5 name = "home" size = {size} color = {color}/>
        )
      }}
      />
      
      <Tab.Screen 
      name = "Diario" 
      component = {Diario}
      options = {{
        tabBarLabel: '',
        tabBarIcon : ({size,color}) => (

          <MaterialCommunity name = "notebook" size = {size} color = {color}/>

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
          <MaterialIcons name = "category" size = {size + 4} color = {color}/>
        )
      }}
      />
      <Tab.Screen 
      name = "Catalogo" 
      component = {Catalogo}

      options = {{
        tabBarLabel: '',
        tabBarIcon: ({size,color}) => (
          <FontAwesome5 name = "user-graduate" size = {size} color = {color}/>
        )
      }}
      />

    </Tab.Navigator>

  );
}

export default Tabs;