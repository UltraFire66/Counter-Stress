import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';



export default function EntradaDiario(props) {

 {var cor = props.cor}

    return (

      <View style = {styles.container}>
        
          <Text style = {styles.titulo}>Dia {props.data}</Text>
        

        <Text style = {styles.escrita}>{props.escrita}</Text>

        <View style = {styles.barrinha}></View>
      </View>

    )

}

const styles = StyleSheet.create({

  container: {
   
    height: '20vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',

  },

  

  titulo: {
    marginBottom: '2vh',
    fontSize: '5vw',
    color: '#225ED2',
  },

 escrita:{
   fontSize: '4.5vw',
   width: '90vw',
   marginBottom: '2vh'
 },

 barrinha: {

    backgroundColor: 'black',
    height: '0.3vh',
    opacity: 0.4,
    width: '89vw'

  },
  


});