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
        <Pressable style={styles.btnEditar}>
          <Image source={Lapis} style={styles.lapis}></Image>
        </Pressable>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <Image source={Usuario} style={styles.imagemUsuario}></Image>
          <Text style={styles.titulo}>Usuario:</Text>
        </View>
        <Text style={styles.escrita}>Passarinho Tui Tui</Text>
      </View>

     <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <Image source={Carta} style={styles.carta}></Image>
          <Text style={styles.titulo}>Email:</Text>
        </View>
        <Text style={styles.escrita}>caioLindo@gmail.com</Text>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <Image source={Cartao} style={styles.cartao}></Image>
          <Text style={styles.titulo}>Nome:</Text>
        </View>
        <Text style={styles.escrita}>Diego de Souza Camillo</Text>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <Image source={Cadeado} style={styles.cadeado}></Image>
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
  //=============================== Tela de perfil ================================================
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
    borderRadius: '27vw',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid black',
  },

  circulo: {
    height: '15vh',
    width: '33vw',
  },

  //=============================== Componentes de baixo ================================================

  jogarDireita: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },

  btnEditar: {
    marginTop: '2vh',
    width: '18vw',
    heigth: '7vh',
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
    maxHeight: '5vh',
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
  },

  escrita: {
    fontSize: '5vw',
    marginLeft: '10vw',
  },

  imagemUsuario: {
    resizeMode: 'contain',
    maxWidth: '12vw',
    maxHeight: '6vh',
  },

  carta: {
    resizeMode: 'contain',
    maxWidth: '13.5vw',
    maxHeight: '6vh',
  },

  cartao: {
    resizeMode: 'contain',
    maxWidth: '10vw',
    maxHeight: '5vh',
    marginRight: '2vw'
  },

  cadeado: {
    resizeMode: 'contain',
    maxWidth: '7vw',
    maxHeight: '5vh',
    marginRight: '2vw'

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

});
