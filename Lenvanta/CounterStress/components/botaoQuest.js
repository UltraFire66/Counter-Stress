import * as React from 'react';
import {
  
  View,
  StyleSheet,
   Image,
} from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

import { LinearGradient } from 'expo-linear-gradient';

import Torii from '../assets/torii.png';


export default function BotaoQuest() {

  
    return (

        <View style = {styles.container}>

         <Image source={Torii} style={styles.torii}></Image>

      </View>

    )

}

const styles = StyleSheet.create({

  container: {
    width:  vh(10),
    height: vh(10),
    borderRadius:  vh(5),
    marginBottom:  vh(9),
    borderWidth: 3,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  torii: {
    flex: 1,
    width:  vh(5.5),
    height:  vh(5.5),
    resizeMode: 'contain'



  }
 
})