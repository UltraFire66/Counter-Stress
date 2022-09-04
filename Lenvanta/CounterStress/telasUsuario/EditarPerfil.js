import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ImageBackground
} from 'react-native';

import { useState ,useContext } from 'react';


import { AuthContext } from '../contexts/auth';

import Wallpaper from '../assets/wallpaper.jpg';
import Icone from '../assets/dantePerfil.jpg';
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { vh, vw } from 'react-native-expo-viewport-units';

export default function EditarPerfil({navigation}) {

  const {Edit,user} = useContext(AuthContext);

  const [nomeUsu,setNomeUsu] = useState('');
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');

  const handleEdit = () =>{
    Edit(email,nome,nomeUsu,user.data[0].id)
  }

    return (

      <View style = {styles.container}>
       <View style={styles.telaPerfil}>
        <ImageBackground
          source={Wallpaper}
          resizeMode="cover"
          style={styles.fundo}
          blurRadius={1.5}>
          
          <ImageBackground
            style={styles.circulo}
            imageStyle={styles.usuario}
            source={Icone}></ImageBackground>
            

          
        </ImageBackground>

        <View style = {styles.trocarFotoPerfil}>

        <Feather name = 'camera' size = {20}/>

        </View>
        <View style = {styles.trocarPapelParede}>
        
          <MaterialCommunity name = 'wallpaper' size = {20}/>
        
        </View>

          
          
      </View>

{/*===============Topo do perfil=========================*/}

      <View style = {styles.parteDeBaixo}>
      
        <View >
          <Text style = {styles.escrita}>Usuário: </Text>
          <TextInput style = {styles.campoEditar} value = {nomeUsu}
          onChangeText = {(value) => setNomeUsu(value)}/>
        </View>

        <View >
          <Text style = {styles.escrita}>E-mail: </Text>
          <TextInput style = {styles.campoEditar} value = {email}
          onChangeText = {(value) => setEmail(value)}/>
        </View>

        <View >
          <Text style = {styles.escrita}>Nome: </Text>
          <TextInput style = {styles.campoEditar} value = {nome}
          onChangeText = {(value) => setNome(value)}/>
        </View>

        <Pressable style = {styles.btn} onPress = {handleEdit}>
          <Text style = {styles.txtBtn}>Editar Dados</Text>
        </Pressable>

      </View>

     

      
      </View>

    )

}

const styles = StyleSheet.create({
 
 container: {
   height: vh(100),
   width: vw(100),
 },

 telaPerfil: {
    width: vw(100),
    height: vh(33),
  },

  fundo: {
    width: '100%',
    height: '100%',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  usuario: {
    borderRadius: vh(9),
    display: 'flex',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "black",
    marginTop: vh(1),
  },

  circulo: {
    height: vh(18),
    width: vh(18),
  },

  trocarPapelParede:{

    backgroundColor: '#8E4FCD',
    height: vh(5),
    width: vh(5),
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: vw(87),
    marginTop: vh(26),
    borderRadius: vh(2.5)

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
    marginTop: vh(21)

  },

  parteDeBaixo:{
    width: vw(90),
    height: '64%',
    marginLeft: vw(10),
    marginTop: vh(3),
  },

  escrita: {
    fontSize: 17

  },

  campoEditar:{
      width: vw(80),
      height: vh(7),
      backgroundColor: '#E5E5E5',
      borderRadius: vw(4),
      fontSize: 15,
      marginBottom: vh(3),
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
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