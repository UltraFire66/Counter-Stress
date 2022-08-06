import * as React from 'react';
import {
  View,
  StyleSheet,

} from 'react-native';

import Cat_Psico from '../components/Cat_Psico';
import FotoPsi from '../assets/Wall-e.jpg';
import { vh , vw} from 'react-native-expo-viewport-units';


export default function CatalogoPsi({navigation}) {

    return (

      <View style = {styles.container}>
        <Cat_Psico fotoPsi = {FotoPsi} nome = "Wall-le" 
        cidade = "Cataguases" 
        estrelas = '1'></Cat_Psico>
        <Cat_Psico fotoPsi = {FotoPsi} nome = "Wall-le" 
        cidade = "Cataguases" 
        estrelas = '1'></Cat_Psico>
      </View>

    )

}

const styles = StyleSheet.create({

  container: {

    marginTop: vh(4),

  },
  a: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    width: vw(100),
    height:  vh(100)

  },

 

  


});