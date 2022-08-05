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
        <Pressable style={styles.link} >Excluir</Pressable>
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
/*   //=============================== Tela de perfil ====================================
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

  //=============================== Componentes de baixo =============================

  jogarDireita: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },

  btnEditar: {
    marginTop: '2vh',
    width: '18vw',
    heigth: '3vh',
    borderRadius: '8vh',
    backgroundColor: '#D9D9D9',
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
  },

  lapis: {
    flex: 1,
    maxHeight: '3.5vh',
    maxWidth: '9vw',

    resizeMode: 'contain',
  },

  escritaPerfil: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '5vw',
    marginBottom: '5vh',
  },
  topo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  titulo: {
    fontSize: '5vw',
    marginLeft: '3vw'
  },

  escrita: {
    fontSize: '5vw',
    marginLeft: '10vw',
  },

  

  senha: {
    fontSize: '7vw',
    fontWeight: 'bold',
    marginLeft: '10vw',
  },

  botaoEditarSenha: {

    width: '13vw',
    height: '3.3vh',
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5vw',
    border: '1.8px solid black',
    marginLeft: '30vw'
  } ,

  lapisSenha: {

    flex: 1,
    maxHeight: '3vh',
    maxWidth: '5vw',
    resizeMode: 'contain'

  },


  escritaLink: {
    fontSize: '2.4vh',
    whiteSpace: 'nowrap',
    marginLeft: '3vw',
  },

  link: {
    fontSize: '2.5vh',
    color: 'red',
    fontWeight: 'bold',
    marginLeft:'6px',
    textDecorationLine: 'underline',
    whiteSpace: 'nowrap'
  },

  

  links: {
    marginTop: '5px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
    
  },
 */
});
