import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";

import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";

import { vh, vw } from "react-native-expo-viewport-units";

import Wallpaper from "../assets/wallpaper.jpg";
import Icone from "../assets/dantePerfil.jpg";
import Lapis from "../assets/iconeLapis.png";

export default function Perfil({ navigation }) {
  
  const {user} = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <View style={styles.telaPerfil}>
        <ImageBackground source={Wallpaper} resizeMode="cover" style={styles.fundo} blurRadius={1.5}>

        <Pressable style = {styles.fechar} onPress = {() => navigation.navigate("Tab")} >

            <AntDesign name = "close" size = {30}/>

          </Pressable>
          <ImageBackground
            style={styles.circulo}
            imageStyle={styles.usuario}
            source={Icone}
          />
        </ImageBackground>
      </View>

      <View style={styles.jogarDireita}>
        <Pressable style={styles.btnEditar}  onPress = {() => navigation.navigate("editarPerfil")}>
          <MaterialCommunity name = "pencil" size={25} />
        </Pressable>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <EvilIcons name="user" size={40}></EvilIcons>
          <Text style={styles.titulo}>Usuario:</Text>
        </View>
        <Text style={styles.escrita}>{user.data[0].nomeUsuario}</Text>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <MaterialCommunity name="email-outline" size={32} />
          <Text style={styles.titulo}>Email:</Text>
        </View>
        <Text style={styles.escrita}> {user.data[0].email} </Text>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <AntDesign name="idcard" size={30} />
          <Text style={styles.titulo}>Nome:</Text>
        </View>
        <Text style={styles.escrita}> {user.data[0].nome}</Text>
      </View>

      <View style={styles.escritaPerfil}>
        <View style={styles.topo}>
          <EvilIcons name="lock" size={40}/>
          <Text style={styles.titulo}>Senha:</Text>
          <Pressable style={styles.botaoEditarSenha}>
            <Image source={Lapis} style={styles.lapisSenha} />
          </Pressable>
        </View>
        <Text style={styles.senha}> {user.data[0].senha}</Text>
      </View>

      <View style={styles.links}>
        <Text style={styles.escritaLink}>Deseja excluir sua conta?</Text>
        <Pressable>
        
          <Text style={styles.link}>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //=============================== Tela de perfil ====================================
  telaPerfil: {
    width: vw(100),
    height: vh(33),
  },

  fundo: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  fechar: {

    position: 'absolute',
    right: vw(4),
    top: vh(3)

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
  },

  //=============================== Componentes de baixo =============================

  jogarDireita: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
  },

  btnEditar: {
    marginTop: vh(1),
    width: vw(18),
    heigth: vh(3),
    borderRadius: vh(8),
    backgroundColor: "#D9D9D9",
    borderWidth: 2,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },


  escritaPerfil: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: vw(5),
    marginBottom: vh(5),
  },
  topo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: vh(5),
  },

  titulo: {
    fontSize: vw(5),
    marginLeft: vw(3),
  },

  escrita: {
    fontSize: vw(5),
    marginLeft: vw(10),
  },

  senha: {
    fontSize: vw(7),
    fontWeight: "bold",
    marginLeft: vw(10),
  },

  botaoEditarSenha: {
    width: vw(13),
    height: vh(3.3),
    backgroundColor: "#D9D9D9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: vw(5),
    borderWidth: 1.8,
    borderColor: "black",
    marginLeft: vw(30),
  },

  lapisSenha: {
    flex: 1,
    maxHeight: vh(3),
    maxWidth: vw(5),
    resizeMode: "contain",
  },

  escritaLink: {
    fontSize: vh(2.4),

    marginLeft: vw(3),
  },

  link: {
    fontSize: vh(2, 5),
    color: "red",
    fontWeight: "bold",
    marginLeft: 6,
    textDecorationLine: "underline",
  },

  links: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
