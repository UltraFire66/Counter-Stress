import * as React from 'react';
import { useState, useContext } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
  ScrollView
} from 'react-native';

import { AuthContext } from '../contexts/auth';
import { LinearGradient } from 'expo-linear-gradient';

import Feather from "react-native-vector-icons/Feather";
import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { vh, vw } from 'react-native-expo-viewport-units';
import Axios from 'axios';
import Icone from "../assets/standardProfileIcon.png";


export default function CriarDiario({navigation}) {

  const {user} = useContext(AuthContext)
 

  const [titulo, setTitulo] = useState("");
  const [anota, setAnota] = useState("");

    return (
        <>
        <TopBar/>
        <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>
  
          <AntDesign name = "user" size = {35} />
  
        </Pressable>

        <LinearGradient
        style={styles.fundo}
        start={{x: 0,y: 0}}
        end={{x: 0, y: 1}}
        colors={["#225ED2", "#78ABC6"]}>

        <View style={styles.telaPerfil}>

          <ImageBackground
            style={styles.circulo}
            imageStyle={styles.usuario}
            source={Icone}
          />
        </View>

        
        <View style = {styles.trocarFotoPerfil}>
          <Pressable>
            <Feather name = 'camera' size = {20}/>
          </Pressable>
        </View>
        
            
        </LinearGradient>

        

        
        <ScrollView>
        <Text style = {styles.topico}>Texto da ME:</Text>
        <View>
          
            <TextInput style={styles.escrever} 
            onChangeText = {(value) => setAnota(value)} value = {anota}/>
          
        </View>

        <Text style = {styles.topico}>Referêcia:</Text>
        <View style = {styles.anota}>
          
            <TextInput style={styles.escrever} 
            onChangeText = {(value) => setAnota(value)} value = {anota}/>
          
        </View>

        <View style = {styles.botaoConfirm}>
          <Pressable style = {styles.btn} onPress = {() => {navigation.goBack()}}>
            <Text style = {styles.txtBtn}>Confirmar</Text>
          </Pressable>
        </View>
        </ScrollView>
      </>

    )

}

const styles = StyleSheet.create({

    telaPerfil:{
        alignItems: 'center',
    },

    usuario: {
        borderRadius: vh(9),
        display: "flex",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
      },
    
      circulo: {
        height: vh(18),
        width: vh(18),
        marginBottom: vh(5),
        marginTop: vh(5),
      },
  
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
  },

  escreverT: {
   
    height: vh(9),
    minWidth: vw(10),
    fontSize: vw(7.5),
    textAlign: 'left',
    marginLeft: vw(5),
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  },

  topico: {
    fontSize: vw(4),
    marginLeft: vw(12.5),
    marginTop: vh(3),
  },

  
  botaoConfirm:{
    alignItems: 'center',
    marginRight: vw(8),
    marginBottom: vh(3),
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
    height: vh(25),
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

  trocarFotoPerfil: {

    backgroundColor: '#8E4FCD',
    height: vh(5),
    width: vh(5),
    borderRadius: vh(2.5),
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: vw(55),
    marginTop: vh(19)

  },
});

