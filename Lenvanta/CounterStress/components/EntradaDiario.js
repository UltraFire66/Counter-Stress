import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';


import { vh, vw } from 'react-native-expo-viewport-units';


export default function EntradaDiario(props) {

 {var cor = props.cor}

    return (

      <View style = {styles.container}>
        
          <Text style = {styles.titulo}>Dia {props.titulo}</Text>
        

        <Text style = {styles.escrita}>{props.escrita}</Text>

        <View style = {styles.barrinha}></View>
      </View>

    )

}

const styles = StyleSheet.create({

   container: {
   
    height: vh(20),
    width: vw(100),
    display: 'flex',
    alignItems: 'center',

  },

  

  titulo: {
    marginBottom: vh(2),
    fontSize: vw(5),
    color: '#225ED2',
  },

 escrita:{
   fontSize: vw(4.5),
   width: vw(90),
   marginBottom: vh(2)
 },

 barrinha: {

    backgroundColor: 'black',
    height: vh(0.3),
    opacity: 0.4,
    width: vw(89)

  },
   


});