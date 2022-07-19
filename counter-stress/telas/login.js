import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import Torii from '../assets/torii.png';




export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={Torii} style={styles.icone}></Image>
      <TextInput style={styles.escrever} placeholder="Digite seu email" />
      <TextInput style={styles.escrever} placeholder="Digite sua senha" />
      <Pressable style={styles.botao}>
        <Text style={styles.escritaBotao}>Login</Text>
      </Pressable>
      <View style={styles.links}>
        <Text style={styles.escrita}>Esqueceu sua senha?</Text>
        <Pressable style={styles.link}>Alterar senha</Pressable>
      </View>

       <View style={styles.links}>
        <Text style={styles.escrita}>Não tem uma conta?</Text>
        <Pressable style={styles.link} onPress = {() => navigation.navigate("Cadastro")}>Cadastre-se</Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(#8E4FCD, #225ED2)',
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icone: {
    opacity: '40%',
    maxHeight: '35vh',
    maxWidth: '75vw',
  },

  escrever: {
    width: '80vw',
    height: '13vh',
    marginTop: '5vh',
    borderRadius: '5vw',
    backgroundColor: '#E5E5E5',
    textIndent: '15px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  },

  botao: {
    backgroundColor: '#E5E5E5',
    width: '65vw',
    height: '12vh',
    marginTop: '4vh',
    borderRadius: '10vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  escritaBotao: {
    fontSize: '4vh',
  },

  escrita: {
    fontSize: '2.4vh',
    whiteSpace: 'nowrap'
  },

  link: {
    fontSize: '2.5vh',
    color: '#8E4FCD',
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
    
  },

  
});
