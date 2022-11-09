import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
  ActivityIndicator,
  Alert
} from "react-native";

import { useState,useEffect,useContext} from 'react';
import { AuthContext } from "../contexts/auth";

import Axios from 'axios';

import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { vh, vw } from "react-native-expo-viewport-units";



import Wallpaper from "../assets/standardWallpaper.png";
import Icone from "../assets/standardProfileIcon.png";
import Lapis from "../assets/iconeLapis.png";

export default function Perfil({ navigation }) {
  
  const {user,temFoto,temWallpp} = useContext(AuthContext);
  const [psy,setPsy] = useState(false);
  const [usuario,setUsuario]=useState({});
  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    if(user.data[0].flag.data[0] == '1'){
      setPsy(true);

      Axios.get("https://counterstress.glitch.me/BuscarPsy/"+user.data[0].idUser)
      .then((response)=>{

        setUsuario(response.data[0]);
        setLoading(false);
      })

    }

    else{

      Axios.get("https://counterstress.glitch.me/BuscarUser/"+user.data[0].idUser)
      .then((response)=>{
        
        setUsuario(response.data[0]);
        setLoading(false);
      })

    }

  },[])


  const DeletarConta = () => {
      Axios.post("https://counterstress.glitch.me/delete", {id: user.data[0].idUser}).then((response)=>{
        if(response.data.message == 'Erro encontrado'){
          alert('Não foi possível excluir a conta');
        }
        else{
          alert('Conta excluída com sucesso');
          navigation.navigate('Login');
        }
      });
      
    
    
  }

  const MostrarPopUp = ()=>{
    return Alert.alert (
      "Deletar Conta",
      "Tem certeza que deseja deletar a sua conta ?",
      [
        {
          text: 'yes',
          onPress: () => {DeletarConta}
        },
        {text: 'Nao'}
      ]

    );
  };

  return (

    <>

    {loading?
    (
      <View style = {styles.ViewLoading}>
        <ActivityIndicator size="large" color="#C4BFE7" />
      </View>
    )
    
    :(
      <>
          {psy
        ?(
        <View style={styles.container}>
        {/*<View style={styles.telaPerfil}>
          <ImageBackground source={Wallpaper} resizeMode="cover" style={styles.fundo} blurRadius={1.5}>

          <Pressable style = {styles.fechar} onPress = {() => navigation.goBack()} >

              <AntDesign name = "close" size = {30}/>

            </Pressable>
            <ImageBackground
              style={styles.circulo}
              imageStyle={styles.usuario}
              source={Icone}
            />
          </ImageBackground>
    </View>*/}

        <View style={styles.jogarDireita1}>
          <Pressable style={styles.btnEditar}  onPress = {() => navigation.navigate("editarPerfil")}>
            <MaterialCommunity name = "pencil" size={25} />
          </Pressable>
        </View>

        <View style={styles.escritaPerfil2}>
          <View style={styles.topo}>
            <MaterialCommunityIcons name="notebook-edit" size={28}></MaterialCommunityIcons>
            <Text style={styles.titulo}>Bio:</Text>
          </View>
          <Text style={styles.escrita}> {usuario.txtBio} </Text>
        </View>

        <View style={styles.escritaPerfil}>
          <View style={styles.topo}>
            <EvilIcons name="user" size={40}></EvilIcons>
            <Text style={styles.titulo}>Usuario:</Text>
          </View>
          <Text style={styles.escrita}>{usuario.nameUser}</Text>
        </View>

        <View style={styles.escritaPerfil}>
          <View style={styles.topo}>
            <MaterialCommunity name="email-outline" size={32} />
            <Text style={styles.titulo}>Email:</Text>
          </View>
          <Text style={styles.escrita}>{usuario.email}</Text>
        </View>
      
        <View style={styles.escritaPerfil}>
          <View style={styles.topo}>
            <Foundation name="telephone" size={30} />
            <Text style={styles.titulo}>Telefone:</Text>
          </View>
          <Text style={styles.escrita}> {usuario.contactNum} </Text>
        </View>

        <View style={styles.escritaPerfil}>
          <View style={styles.topo}>
            <FontAwesome name="map-marker" size={30}/>
            <Text style={styles.titulo}>Senha</Text>
          </View>
          <Text style={styles.escrita}> {usuario.city} - {usuario.state}</Text>
        </View>

        <View style={styles.links}>
          <Text style={styles.escritaLink}>Deseja excluir sua conta?</Text>
          <Pressable>
          
            <Text style={styles.link}>Excluir</Text>
          </Pressable>
        </View>
      </View>
      ) 
      
      
      
      
      :(
        <View style={styles.container}>
        {/*<View style={styles.telaPerfil}>
          <ImageBackground source={Wallpaper} resizeMode="cover" style={styles.fundo} blurRadius={1.5}>

          <Pressable style = {styles.fechar} onPress = {() => navigation.goBack()} >

              <AntDesign name = "close" size = {30}/>

            </Pressable>
            <ImageBackground
              style={styles.circulo}
              imageStyle={styles.usuario}
              source={Icone}
            />
          </ImageBackground>
    </View>*/}

        <View style={styles.jogarDireita2}>
          <Pressable style={styles.btnEditar}  onPress = {() => navigation.navigate("editarPerfil")}>
            <MaterialCommunity name = "pencil" size={25} />
          </Pressable>
        </View>

        <View style={styles.escritaPerfil}>
          <View style={styles.topo}>
            <EvilIcons name="user" size={40}></EvilIcons>
            <Text style={styles.titulo}>Usuario:</Text>
          </View>
          <Text style={styles.escrita}>{usuario.nick}</Text>
        </View>

        <View style={styles.escritaPerfil}>
          <View style={styles.topo}>
            <MaterialCommunity name="email-outline" size={32} />
            <Text style={styles.titulo}>Email:</Text>
          </View>
          <Text style={styles.escrita}> {usuario.email} </Text>
        </View>

        {/*<View style={styles.escritaPerfil}>
          <View style={styles.topo}>
            <AntDesign name="idcard" size={30} />
            <Text style={styles.titulo}>Nome:</Text>
          </View>
          <Text style={styles.escrita}> {user.data[0].nome}</Text>
        </View>*/}

        <View style={styles.escritaPerfil}>
          <View style={styles.topo}>
            <EvilIcons name="lock" size={40}/>
            <Text style={styles.titulo}>Senha</Text>
            <Pressable style={styles.botaoEditarSenha} onPress = {() => navigation.navigate("EditarSenha")}>
              <Image source={Lapis} style={styles.lapisSenha} />
            </Pressable>
          </View>
          <Text style={styles.senha}> {usuario.senha}</Text>
        </View>

        <View style={styles.links}>
          <Text style={styles.escritaLink}>Deseja excluir sua conta?</Text>
          <Pressable onPress={DeletarConta}>
          
            <Text style={styles.link}>Excluir</Text>
          </Pressable>
        </View>
      </View>
      )}

      </>
    )}

    
    
  </>
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

  ViewLoading: {
    height: vh(80),
    width: vw(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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

  jogarDireita1: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    marginTop: vh(10),
  },

  jogarDireita2: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    marginTop: vh(20),
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
  escritaPerfil2: {
    display: "flex",
    flexDirection: 'column',
    marginLeft: vw(5),
    marginRight: vw(10),
    marginBottom: vh(5),
    justifyContent: "flex-start",
  },
});
