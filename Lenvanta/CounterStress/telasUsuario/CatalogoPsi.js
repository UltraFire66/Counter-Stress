import * as React from 'react';
import {
  View,
  StyleSheet,
  Pressable
} from 'react-native';

import Cat_Psico from '../components/Cat_Psico';
import FotoPsi from '../assets/Wall-e.jpg';
import FotoPsi2 from '../assets/telaPerfilKratos.jpg';
import { vh , vw} from 'react-native-expo-viewport-units';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TopBar from '../components/TopBar';

export default function CatalogoPsi({navigation}) {

    return (
      <>
      <TopBar/>

      <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("Perfil")}}>

        <AntDesign name = "user" size = {35} />

      </Pressable>

      <LinearGradient
      style={styles.container}
      start={{x: 0,y: 0}}
      end={{x: 0, y: 1}}
      colors={["#8E4FCD", "#C4BFE7"]}>

        <Cat_Psico fotoPsi = {FotoPsi} nome = "Wall-le" cidade = "Cataguases" estrelas = '1'></Cat_Psico>
        <Cat_Psico fotoPsi = {FotoPsi2} nome = "Fabão da VM" cidade = "Leopoldina" estrelas = '1'></Cat_Psico>

      </LinearGradient>
      </>
    )

}

const styles = StyleSheet.create({

  container: {

    marginTop: vh(4),

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