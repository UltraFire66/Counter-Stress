import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
   Image,
} from 'react-native';

import Torii from '../assets/torii.png';


export default function BotaoQuest() {

  
    return (

      <View style = {styles.container}>
         <Image source={Torii} style={styles.torii}></Image>
      </View>

    )

}

const styles = StyleSheet.create({
/* 
  container: {
    backgroundImage: 'linear-gradient(to right,#C4BFE7, #78ABC6)',
    width: '10vh',
    height: '10vh',
    borderRadius: '5vh',
    marginBottom: '9vh',
    border: 'solid white 3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  torii: {
    flex: 1,
    width: '5.5vh',
    height: '5.5vh',
    resizeMode: 'contain'



  }
 */
})