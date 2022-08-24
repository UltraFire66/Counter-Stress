import * as React from 'react';
import {
  
  View,
  StyleSheet,
   Image,
} from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

import { LinearGradient } from 'expo-linear-gradient';

import Torii from '../assets/torii.png';


export default function BotaoQuest({props}) {

    
  
    return (

      <LinearGradient
      colors={['#C4BFE7', '#78ABC6']}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 1}}
      style={styles.container}
    >

         <Image source={Torii} style={styles.torii}></Image>

      </LinearGradient>

    )

}

const styles = StyleSheet.create({

  container: {
    width:  vh(13),
    height: vh(13),
    borderRadius:  vh(6.5),
    marginBottom:  vh(12),
    borderWidth: 3,
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