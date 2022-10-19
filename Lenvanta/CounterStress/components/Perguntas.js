import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';


export default function Perguntas(props) {

    return (
      <>
        <View style = {{marginTop: vh(2), marginBottom: vh(2),}}>
          <View style = {styles.fundo}>
            <Text style = {styles.escrita}>{props.pergunt}</Text>
          </View>

          <View style = {styles.botao}>
            <Pressable style = {styles.circulo}></Pressable>
            <Text style = {styles.escrita2}>Nunca</Text>
          </View>

          <View style = {styles.botao1}>
            <Pressable style = {styles.circulo}></Pressable>
            <Text style = {styles.escrita2}>Ás vezes</Text>
          </View>

          <View style = {styles.botao1}>
            <Pressable style = {styles.circulo}></Pressable>
            <Text style = {styles.escrita2}>Frequentemente</Text>
          </View>

          <View style = {styles.botao1}>
            <Pressable style = {styles.circulo}></Pressable>
            <Text style = {styles.escrita2}>Quase sempre</Text>
          </View>
        </View>

        
      </>
    )

}

const styles = StyleSheet.create({

  escrita: {
    fontSize: vh(3.5),
    textAlign: 'justify',
  },

  escrita2: {
    fontSize: vh(2.8),
    left: vw(3),
    marginTop: vh(-0.6)
  },

   fundo:{ 
    marginTop: vh(2),
    alignItems: 'center',
    marginLeft: vw(6),
    marginRight: vw(6),
  },

  botao: {
    alignItems: 'flex-start',
    left: vw(10),
    marginTop: vh(5),
    display: "flex",
    flexDirection: "row",
  },

  botao1: {
    alignItems: 'flex-start',
    left: vw(10),
    marginTop: vh(2),
    display: "flex",
    flexDirection: "row",
  },

  circulo: {
    height:  vh(3),
    width:  vh(3),
    borderRadius:  vh(6),
    borderWidth: 2,
  },

});