import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import Cat_Psico from '../components/Cat_Psico';
import FotoPsi from '../assets/Wall-e.jpg';


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

  a: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'

  },



  


});