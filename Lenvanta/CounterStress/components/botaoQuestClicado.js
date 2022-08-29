import * as React from 'react';
import {
  
  View,
  StyleSheet,
   Image,
} from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import Torii from '../assets/torii.png';


export default function BotaoQuestClicado({props}) {

   

    

      return (

      
        <View style={styles.container}>
  
           <Image source={Torii} style={styles.torii}></Image>
  
        </View>
  
      )

    


   

}

const styles = StyleSheet.create({

  container: {
    width:  vh(13),
    height: vh(13),
    borderRadius:  vh(6.5),
    marginBottom:  vh(12),
    borderWidth: 3,
    backgroundColor: '#8E4FCD',
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  torii: {
    opacity: 0.4,
    flex: 1,
    width:  vh(7),
    height:  vh(7),
    resizeMode: 'contain'



  }
 
})