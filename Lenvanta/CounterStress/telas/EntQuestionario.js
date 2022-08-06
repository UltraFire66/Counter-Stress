import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import { vw , vh} from 'react-native-expo-viewport-units';



export default function EntQuestionario(props) {

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
    marginLeft:  vw(5),
    marginBottom:  vh(5)
  }, 
})