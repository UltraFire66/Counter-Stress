import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import {useState,useEffect} from 'react';
import Axios from 'axios';



import {vh,vw} from 'react-native-expo-viewport-units';
import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';






export default function EntradaDiarioID({navigation,route}) {
  

  
 
    return (
      <>
       <TopBar/>
    
          <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>
    
          <AntDesign name = "user" size = {35} />
          
          </Pressable>
    
          <Pressable style = {styles.voltar} onPress = {() => {navigation.goBack()}}>
    
          <AntDesign name = "arrowleft" size = {35} />
          
          </Pressable>
    
          <View style = {styles.container}>
              
              
              <View style = {styles.divData}>
    
                <Text style = {styles.data}>{route.params.data}</Text>
    
              </View>
    
              <View style = {styles.divTitulo}>
                <Text style = {styles.titulo}>{route.params.titulo}</Text>
              </View>
    
              <Text style = {styles.escrita}>{route.params.escrita}</Text>
    
              
    
    
          </View>
      </>
    )
   
}

const styles = StyleSheet.create({


    perfil: {
        position: 'absolute',
        marginTop: 25,
        marginLeft: vw(85),
   },

   voltar: {
    position: 'absolute',
    marginTop: 27,
    marginLeft: vw(3),
},

    container: {
    display: 'flex',
    flexDirection: 'column',
    width: vw(100),
    height: vh(100),
  },

  divData: {
    height: vh(16),
    width: vw(100),
    backgroundColor: '#8E4FCD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  data: {
    color: 'white',
    fontSize: vw(6)
  },

  titulo: {
    fontSize: vw(8),
    fontWeight: 'bold'
  },

  divTitulo: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(4)
  },

  escrita: {
    marginTop: vh(5),
    marginLeft: vw(3),
    fontSize: vw(5),
    width: vw(90),
    textAlign: 'justify'
  }


});