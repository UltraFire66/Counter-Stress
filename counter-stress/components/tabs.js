import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Diario from "../telas/Diario";
import MEs from "../telas/MEs";

const Tab = createBottomTabNavigator();

const Tabs = () =>{

  return(

    <Tab.Navigator>
    
    <Tab.Screen name = "Diario" component = {Diario}/>
    <Tab.Screen name = "MEs" component = {MEs}/>

    </Tab.Navigator>

  );
}

export default Tabs;