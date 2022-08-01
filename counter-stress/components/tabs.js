import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Diario from "../telas/Diario";
import MEs from "../telas/MEs";
import Catalogo from "../telas/CatalogoPsi";


const Tab = createBottomTabNavigator();

const Tabs = () =>{

  return(

    <Tab.Navigator  screenOptions={{headerShown: false}}>
    
      <Tab.Screen name = "Diario" component = {Diario}/>
      <Tab.Screen name = "MEs" component = {MEs}/>
      <Tab.Screen name = "Catalogo" component = {Catalogo}/>

    </Tab.Navigator>

  );
}

export default Tabs;