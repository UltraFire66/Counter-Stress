import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,

  ImageBackground
} from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';



export default function Perguntas(props) {
  
  {var pergunt = props.pergunt}

    return (
      <View style = {styles.fundo}>
        <View style={styles.container}>
          <View style = {styles.frente}>
            <Text>{props.pergunt}</Text>
          </View>

          <View style = {styles.circulo}></View>

          
        </View>
      </View>
    )

}

const styles = StyleSheet.create({
   fundo:{
        
    display: 'flex',
    marginTop: vw(10)
  },

  container:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: 'none',
    borderRadius:  vw(7), 
    marginLeft:  vw(-6),
    marginRight:  vw(15),
    backgroundColor: '#D9D9D9'
  },

  info:{
    marginLeft:  vw(18),
    alignItems: 'center',
    marginBottom:  vw(14)
  },

  nomepsi: {
    fontSize:  vw(6),
    marginBottom:  vw(1),
    marginRight:  vw(2)
  },

  cidade: {
    fontSize: vw(3.7),
  },

  frente:{
    display: 'flex',
    justifyContent: 'center',
    marginLeft:  vw(8.5)
    },

  circulo: {
    height:  vh(12),
    width:  vh(12),
    
  },

  usuario: {
    borderRadius:  vh(6),
    display: 'flex',
    borderWidth: 2,
  } 

});