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

import Wallpaper from '../assets/wallpaper.jpg';
import Icone from '../assets/dantePerfil.jpg';

export default function EditarPerfil({ navigation }) {

    return (

      <View style = {styles.container}>
       <View style={styles.telaPerfil}>
        <ImageBackground
          source={Wallpaper}
          resizeMode="cover"
          style={styles.fundo}
          blurRadius={1.5}>
          <View style = {styles.trocarPapelParede}>

          
          </View>
          <ImageBackground
            style={styles.circulo}
            imageStyle={styles.usuario}
            source={Icone}></ImageBackground>
            <View style = {styles.trocarFotoPerfil}>

          
          </View>
        </ImageBackground>
      </View>

{/*===============Topo do perfil=========================*/}

      <View style = {styles.parteDeBaixo}>
      
        <View >
          <Text style = {styles.escrita}>Usuário: </Text>
          <TextInput style = {styles.campoEditar} value = {"Passarinho Tui Tui"}/>
        </View>

        <View >
          <Text style = {styles.escrita}>E-mail: </Text>
          <TextInput style = {styles.campoEditar} value = {"deigocamillo@gmail.com"}/>
        </View>

        <View >
          <Text style = {styles.escrita}>Nome: </Text>
          <TextInput style = {styles.campoEditar} value = {"Deigo"}/>
        </View>

         <Pressable style = {styles.btn}>
      
        <Text style = {styles.txtBtn}>Editar Dados</Text>
      
      </Pressable>

      </View>

     

      
      </View>

    )

}

const styles = StyleSheet.create({

 container: {
   height: '100vh',
   width: '100vw',
 },

 telaPerfil: {
    width: '100vw',
    height: '33vh',
  },

  fundo: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  usuario: {
    borderRadius: '9vh',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid black',
  },

  circulo: {
    height: '18vh',
    width: '18vh',
  },

  trocarPapelParede:{

    backgroundColor: '#8E4FCD',
    height: '5vh',
    width: '5vh',
    position: 'absolute',
    marginLeft: '80vw',
    marginTop: '24vh',
    borderRadius: '2.5vh'

  },

  trocarFotoPerfil: {

    backgroundColor: '#8E4FCD',
    height: '5vh',
    width: '5vh',
    borderRadius: '2.5vh',
    position: 'absolute',
    marginLeft: '24vw',
    marginTop: '10vh'

  },

  parteDeBaixo:{
    width: '90vw',
    height: '64%',
    marginLeft: '10vw',
    marginTop: '3vh',
  },

  escrita: {
    fontSize: '17px',

  },

  campoEditar:{
      width: '80vw',
      height: '7vh',
      backgroundColor: '#E5E5E5',
      borderRadius: '4vw',
      textIndent: '15px',
      fontSize: '15px',
      marginBottom: '3vh',
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
  },

  btn:{
    marginTop: '5vh',
    width: '60vw',
    height: '10vh',
    marginLeft: '10vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8vw',
    backgroundColor: '#D9D9D9',


  },

  txtBtn: {

    fontSize: '18px'

  },

});