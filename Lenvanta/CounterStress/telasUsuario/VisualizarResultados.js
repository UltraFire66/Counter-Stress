import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  FlatList
} from 'react-native';

import { vh, vw } from 'react-native-expo-viewport-units';

import Torii from '../assets/torii.png';
import SubCategoriasMEs from '../components/SubCategoriasMEs';
import { LinearGradient } from 'expo-linear-gradient';

import { useState,useEffect,useContext} from 'react';



export default function VisualizarResultados({navigation,route}) {

  const [data,setData] = useState();

  const renderItem = ({ item }) => (
    <>
      {setData(item.dia + " - " + item.mes + " - " + item.ano)}  
      <Pressable onPress = {() => {navigation.navigate('ResultQuest',{
        total: item.total,
        estresse: item.totalStress,
        ansiedade: item.totalAnxiety,
        depressao: item.totalDepression })}}> 
        <SubCategoriasMEs cor = 'gray' escrita = {data} corBorda = 'dark gray' />
      </Pressable>
    </>
  );

  return (

    
      <View style = {styles.fundo}>
        
          <View style = {styles.componentes}>    
            
            
            
            <FlatList
            
              data = {route.params.dados.data}
              keyExtractor={item => item.idME}
              renderItem = {renderItem}
              showsVerticalScrollIndicator={false}
            
            />

          </View>
          
      
      </View>

    
    

  );
}

const styles = StyleSheet.create({


  background: {
    width: vw(100),
    height: vh(100),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  icone:{
   marginBottom: vh(20),
   opacity: 0.5
  },
 
  

  conjunto: {

    display: 'flex',
    flexDirection: 'row',
    

  },  

  fundo:{
    height: vh(100),
    width: vw(100),
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#c3bbcb',

  },
  componentes:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    

  }

});
  
