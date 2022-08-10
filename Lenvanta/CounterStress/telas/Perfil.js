import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { vh, vw } from 'react-native-expo-viewport-units';

import Wallpaper from '../assets/wallpaper.jpg';
import Icone from '../assets/dantePerfil.jpg';
import EscritaPerfil from '../components/EscritaPerfil';
import Usuario from '../assets/iconePerfil.png';
import Lapis from '../assets/iconeLapis.png';
import Carta from '../assets/iconeCarta.png';
import Cartao from '../assets/iconeNome.png';
import Cadeado from '../assets/iconeCadeado.png';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
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
      </View>

      <View style={styles.jogarDireita}>
        <Pressable style={styles.btnEditar}
         onPress = {() => navigation.navigate('EditarPerfil')}>
          <Image source={Lapis} style={styles.lapis}></Image>
        </Pressable>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <EvilIcons name = "user" size={'180%'}></EvilIcons>
          <Text style={styles.titulo}>Usuario:</Text>
        </View>
        <Text style={styles.escrita}>Passarinho Tui Tui</Text>
      </View>

     <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <MaterialCommunity name = "email-outline" size = {'150%'}></MaterialCommunity>
          <Text style={styles.titulo}>Email:</Text>
        </View>
        <Text style={styles.escrita}>caioLindo@gmail.com</Text>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <AntDesign name = "idcard" size = {"140%"}></AntDesign>
          <Text style={styles.titulo}>Nome:</Text>
        </View>
        <Text style={styles.escrita}>Diego de Souza Camillo</Text>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <Fontisto name = "locked" size = {"130%"} ></Fontisto>
          <Text style={styles.titulo}>Senha:</Text>
          <Pressable style = {styles.botaoEditarSenha}>
            <Image source = {Lapis} style = {styles.lapisSenha}></Image>
          </Pressable>
        </View>
        <Text style={styles.senha}>. . . . . . .</Text>
      </View>

      <View style={styles.links}>
        <Text style={styles.escritaLink}>Deseja excluir sua conta?</Text>
        <Pressable style={styles.link}> <Text>Excluir</Text> </Pressable>
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  //=============================== Tela de perfil ====================================
  telaPerfil: {
    width:  vw(100),
    height: vh(33),
  },

  fundo: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  usuario: {
    borderRadius: vh(9),
    display: 'flex',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    
  },

  circulo: {
    height: vh(18),
    width: vh(18)
  },

  //=============================== Componentes de baixo =============================

  jogarDireita: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },

  btnEditar: {
    marginTop: vh(2),
    width: vw(18),
    heigth: vh(3),
    borderRadius: vh(8),
    backgroundColor: '#D9D9D9',
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  lapis: {
    flex: 1,
    maxHeight: vh(3.5),
    maxWidth: vw(9),

    resizeMode: 'contain',
  },

  escritaPerfil: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: vw(5),
    marginBottom: vh(5),
  },
  topo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  titulo: {
    fontSize: vw(5),
    marginLeft: vw(3)
  },

  escrita: {
    fontSize: vw(5),
    marginLeft: vw(10),
  },

  

  senha: {
    fontSize: vw(7),
    fontWeight: 'bold',
    marginLeft: vw(10),
  },

  botaoEditarSenha: {

    width: vw(13),
    height: vh(3.3),
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(5),
    border: '1.8px solid black',
    marginLeft: vw(30)
  } ,

  lapisSenha: {

    flex: 1,
    maxHeight: vh(3),
    maxWidth: vw(5),
    resizeMode: 'contain'

  },


  escritaLink: {
    fontSize: vh(2.4),
    whiteSpace: 'nowrap',
    marginLeft: vw(3),
  },

  link: {
    fontSize: vh(2,5),
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 6,
    textDecorationLine: 'underline',
    whiteSpace: 'nowrap'
  },

  

  links: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
    
  },
 
});
