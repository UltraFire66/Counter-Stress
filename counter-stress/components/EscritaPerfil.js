import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';



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
    marginLeft: '5vw',
    marginBottom: '5vh'
  },

  topo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  titulo: {

    fontSize: '5vw',

  },

  escrita: {
    fontSize: '5vw',
    marginLeft: '10vw'
  },

  imagem: {
    resizeMode: 'contain',
    maxWidth: '12vw',
    maxHeight: '6vh'

  }


});