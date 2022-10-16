import * as React from 'react';
import { useState, useContext } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import { AuthContext } from '../contexts/auth';

import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { vh, vw } from 'react-native-expo-viewport-units';
import Axios from 'axios';


export default function CriarDiario({navigation}) {

  const {user} = useContext(AuthContext)

  let currentDate = new Date();
  let cDate =   currentDate.getFullYear() +  '-' + (currentDate.getMonth() + 1)  + '-' + currentDate.getDate() + '-'  + currentDate.getHours() + '.' + currentDate.getMinutes() + '.' + currentDate.getSeconds() ;


  

  const [titulo, setTitulo] = useState("");
  const [anota, setAnota] = useState("");

 

    const RegistrarDiario = () => {
      Axios.post("https://counterstress.glitch.me/RegistrarDiario",{idUser: user.data[0].idUser,
      data: cDate, titulo: titulo, escrita: anota});
      navigation.navigate('Tab');
    }

    return (
        <>
        <TopBar/>
        <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>
  
          <AntDesign name = "user" size = {35} />
  
        </Pressable> 

        <Pressable style = {styles.voltar} onPress = {() => {navigation.goBack()}}>

            <AntDesign name = "arrowleft" size = {35} />
            
        </Pressable>

        <View style = {styles.container}>
          <TextInput style={styles.escreverT} placeholder="Título"
          onChangeText = {(value) => setTitulo(value)} value = {titulo}/>
        </View>

        <Text style = {styles.topico}>Anotação:</Text>
        <View style = {styles.anota}>
          
            <TextInput style={styles.escrever} 
            onChangeText = {(value) => setAnota(value)} value = {anota}/>
          
        </View>

        <View style = {styles.botaoConfirm}>
          <Pressable style = {styles.btn} onPress = {RegistrarDiario}>
            <Text style = {styles.txtBtn}>Confirmar</Text>
          </Pressable>
        </View>
      </>

    )

}

const styles = StyleSheet.create({
  
  perfil: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: vw(85),
  },

  voltar: {
    position: 'absolute',
    marginTop: 27,
    marginLeft: vw(3),
  },

   container: {
    height: vh(15),
    width: vw(100),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: "purple",
  },

  escreverT: {
   
    height: vh(9),
    minWidth: vw(20),
    fontSize: vw(7.5),
    textAlign: 'left',
    marginLeft: vw(5),
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  },

  topico: {
    fontSize: vw(5),
    marginLeft: vw(4),
    marginTop: vh(3),
  },

  
  botaoConfirm:{
    alignItems: 'center',
    marginRight: vw(8),
  },

  divTexto: {
    
    
    
    marginTop: vh(4),
    
    display: 'flex',
    border: 'solid 1px black',

    alignItems: 'center',
    justifyContent: 'center',
  },

  escrever: {
    backgroundColor: '#E5E5E5',
    borderRadius: vw(6),
    marginLeft: vw(11),
    width: vw(79),
    height: vh(45),
    fontSize: vw(4.5),
    textAlign: 'justify',
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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


  

  

  txtBtn: {
    fontSize: 18
  },

  
   
});

