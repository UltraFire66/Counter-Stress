import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import { vh, vw } from 'react-native-expo-viewport-units';

import Torii from '../assets/torii.png';

import { LinearGradient } from 'expo-linear-gradient';




export default function Login({navigation}) {
  return (

    <LinearGradient
    style={styles.container}
    start={{x: 0,y: 0}}
    end={{x: 0, y: 1}}
    colors={["#8E4FCD", "#225ED2"]}>


      <Image source={Torii} style={styles.icone}></Image>
      <TextInput style={styles.escrever} placeholder="Digite seu email" />
      <TextInput style={styles.escrever} placeholder="Digite sua senha" />
      <Pressable style={styles.botao} >
        <Text style={styles.escritaBotao} >Login</Text>
      </Pressable>
      <View style={styles.links}>
        <Text style={styles.escrita}>Esqueceu sua senha?</Text>
        <Pressable >
            <Text style={styles.link}>Alterar senha</Text>
        </Pressable>
      </View>

       <View style={styles.links}>
        <Text style={styles.escrita} >Não tem uma conta?</Text>
        <Pressable onPress = {() => navigation.navigate("Cadastro")}>
            <Text style={styles.link}>Cadastre-se</Text>
        </Pressable>
      </View>



    </LinearGradient>
    

  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icone: {
    opacity: 0.4,
    maxHeight: vh(35),
    maxWidth: vh(35),
    marginTop: vh(5)
  },

  escrever: {
    width: vw(80),
    height: vh(9),
    marginTop: vh(5),
    borderRadius: vw(5),
    backgroundColor: '#E5E5E5',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  },

  botao: {
    backgroundColor: '#E5E5E5',
    width: vw(52),
    height: vh(9),
    marginTop: vh(4),
    borderRadius: vw(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },

  escritaBotao: {
    fontSize: vh(4),
  },

  escrita: {
    fontSize: vh(2.4),
    
  },

  link: {
    fontSize: vh(2.5),
    color: '#8E4FCD',
    fontWeight: 'bold',
    marginLeft: 6,
    textDecorationLine: 'underline',

  },

  

  links: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginLeft: vw(4)
    
  },

   
});
  
