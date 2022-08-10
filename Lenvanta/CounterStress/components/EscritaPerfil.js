import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import {vh,vw} from 'react-native-expo-viewport-units';

export default function EscritaPerfil(props) {

    return (

      <View style = {styles.container}>
       <View style = {styles.topo}>
      <Image source = {props.imagem} style = {styles.imagem}></Image>
      <Text style = {styles.titulo} >{props.titulo}</Text>
      </View>
      <Text style = {styles.escrita}>{props.escrita}</Text>
      </View>

    )

}

const styles = StyleSheet.create({

    container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: vw(5),
    marginBottom: vh(5)
  },

  topo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  titulo: {

    fontSize: vw(5),

  },

  escrita: {
    fontSize: vw(5),
    marginLeft: vw(10)
  },

  imagem: {
    resizeMode: 'contain',
    maxWidth: vw(12),
    maxHeight: vh(6)

  } 


});