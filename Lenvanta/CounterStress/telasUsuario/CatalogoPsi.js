import * as React from 'react';
import {
  View,
  StyleSheet,
  Pressable
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Cat_Psico from '../components/Cat_Psico';
import FotoPsi from '../assets/Wall-e.jpg';
import FotoPsi2 from '../assets/telaPerfilKratos.jpg';
import { vh , vw} from 'react-native-expo-viewport-units';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TopBar from '../components/TopBar';

export default function CatalogoPsi({navigation}) {

    return (
      <>
      <LinearGradient
      style={styles.container}
      start={{x: 0,y: 0}}
      end={{x: 0, y: 1}}
      colors={["#78ABC6", "#C4BFE7"]}>
      <TopBar/>

      <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>

        <AntDesign name = "user" size = {35} />

      </Pressable>

      
        <Pressable onPress = {() => navigation.navigate("VerPsico")}>
          <Cat_Psico fotoPsi = {FotoPsi} nome = "Wall-le" cidade = "Cataguases" estrelas = '1'></Cat_Psico>
        </Pressable>
        
        <Pressable onPress = {() => navigation.navigate("VerPsico")}>
          <Cat_Psico fotoPsi = {FotoPsi2} nome = "Fabão da VM" cidade = "Leopoldina" estrelas = '1'></Cat_Psico>
        </Pressable>

      </LinearGradient>

      </>
      
    )

}

const styles = StyleSheet.create({

  container: {

    
    height: vh(100),
    width: vw(100),
  },

  perfil: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: vw(85),
  },

  a: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    width: vw(100),
    height:  vh(100)

  },

 

  


});