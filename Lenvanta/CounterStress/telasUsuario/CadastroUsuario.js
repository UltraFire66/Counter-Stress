import *  as React from 'react';
import  {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';


import Axios from 'axios';

import { vh, vw } from 'react-native-expo-viewport-units';
import { LinearGradient } from 'expo-linear-gradient';

export default function CadastroUsuario({navigation}) {
  
  const [nomeres,setNome] = useState('');
  const [emailres,setEmail] = useState('');
  const [senhares,setSenha] = useState('');
  const [senhaNovamente,setSenhaNovamente] = useState('');

  
  const registro = () =>{
    Axios.post("https://counterstress.glitch.me/register", {nome: nomeres , senha: senhares});
  }
  

  return(
    <LinearGradient
    style={styles.fundo}
    start={{x: 0,y: 0}}
    end={{x: 0, y: 1}}
    colors={["#8E4FCD", "#C4BFE7"]}>

      <Text style = {styles.titulo}>Cadastro</Text>

      <TextInput style={styles.escrever}
      placeholder="Digite seu email"
      onChangeText={(value)=>setEmail(value)} />

      <TextInput style={styles.escrever}
      placeholder="Digite seu nome"
      onChangeText={(value)=>setNome(value)} />

      <TextInput style={styles.escrever} 
      placeholder="Digite sua senha" 
      onChangeText={(value)=>setSenha(value)} />

      <TextInput style={styles.escrever} 
      placeholder="Digite sua senha novamente" 
      onChangeText={(value)=>setSenhaNovamente(value)}/>

      <Pressable style={styles.botao} onPress = {registro}>
      <Text style={styles.escritaBotao}>Cadastrar</Text>
      </Pressable>

      <View style={styles.links}>
        <Text style={styles.escrita}>Já tem uma conta?</Text>
        <Pressable  onPress = {() => navigation.navigate("Login")}>
            <Text style={styles.link}>Faça Login</Text>
        </Pressable>
      </View>

    </LinearGradient>
  )



}

const styles = StyleSheet.create({
  
    fundo: {
    width: '100%',
    height: '100%',
    display: 'flex',
  
    alignItems: 'center',
  },

  titulo: {
    fontSize: vw(11),
    color: 'white',
    marginTop: vh(7),

  },
  
   escrever: {
    width: vw(80),
    height: vh(9),
    marginTop: vh(3),
    borderRadius: vw(5),
    backgroundColor: '#E5E5E5',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#E5E5E5',
    width: vw(52),
    height: vh(9),
    marginTop: vh(4),
    borderRadius: vw(8),
    display: 'flex',
    border: 'solid 1px black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  escritaBotao: {
    fontSize: vh(4)
  },

  links: {
    marginTop: vh(10),
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    
  },

  escrita: {
    fontSize: vh(2.8),
    marginLeft: 10
  },
  link: {
    fontSize: vh(2.8),
    color: '#8E4FCD',
    opacity: 0.8,
    fontWeight: 'bold',
    marginLeft: 6,
    textDecorationLine: 'underline',
    
  },
 
})