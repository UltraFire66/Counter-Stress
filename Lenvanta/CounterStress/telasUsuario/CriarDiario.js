import * as React from 'react';
import { useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { vh, vw } from 'react-native-expo-viewport-units';
import { text } from 'express';


export default function CriarDiario({navigation}) {

  const [titulo, setTitulo] = useState("");
  const [anota, setAnota] = useState("");

    return (
        <>
        <TopBar/>
        <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>
  
          <AntDesign name = "user" size = {35} />
  
        </Pressable>     

        <View style = {styles.container}>
          <TextInput style={styles.escreverT} placeholder="Título"
          onChangeText = {(value) => {
            setTitulo(value);
          }} value = {titulo}/>
        </View>

        <Text style = {styles.topico}>Anotação:</Text>
        <View style = {styles.botao}>
          <View style={styles.botaoCinza}>
            <TextInput style={styles.escrever} 
            onChangeText = {(value) => {
              setAnota(value);
            }} value = {anota}/>
          </View>
        </View>

        <View style = {styles.botaoConfirm}>
          <Pressable style = {styles.btn}>
            <Text style = {styles.txtBtn}>Confirmar</Text>
          </Pressable>
        </View>
      </>

    )

}

const styles = StyleSheet.create({

   container: {
    height: vh(20),
    width: vw(100),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "purple",
  },

  topico: {
    fontSize: vw(5),
    marginLeft: vw(13),
    marginTop: vh(5),
  },

  botao:{
    alignItems: 'center',
    marginTop: vh(-3),
  },

  botaoConfirm:{
    alignItems: 'center',
    marginRight: vw(8),
  },

  botaoCinza: {
    backgroundColor: '#E5E5E5',
    width: vw(79),
    height: vh(7),
    marginTop: vh(4),
    borderRadius: vw(6),
    display: 'flex',
    border: 'solid 1px black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  perfil: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: vw(85),
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

  escreverT: {
    width: vw(60),
    height: vh(9),
    marginTop: vh(10),
    marginLeft: vw(-18),
    fontSize: vw(7.5),
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  },

  escrever: {
    width: vw(62),
    height: vh(9),
    fontSize: vw(4.5),
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    alignItems: 'flex-start',
  },

  txtBtn: {
    fontSize: 18
  },

  btn:{
    marginTop: vh(5),
    width: vw(60),
    height: vh(10),
    marginLeft: vw(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(8),
    backgroundColor: '#D9D9D9',
  },
   
});

