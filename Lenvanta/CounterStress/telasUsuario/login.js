import * as React from 'react';
import {useState,useContext,useEffect} from 'react';
import { AuthContext } from '../contexts/auth';
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

import Torii from '../assets/torii.png';

import { LinearGradient } from 'expo-linear-gradient';







export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [loginStatus,setLoginStatus] = useState('');

  const {Login} = useContext(AuthContext);

  const handleLogin = () => {
    Login(email,senha);
  }

  


  return (

    <LinearGradient
    style={styles.container}
    start={{x: 0,y: 0}}
    end={{x: 0, y: 1}}
    colors={["#8E4FCD", "#5694fa"]}>


      <Image source={Torii} style={styles.icone}></Image>
      {loginStatus == '' ?
      <TextInput style={styles.escrever} placeholder="Digite seu email" value = {email} onChangeText = {(value) => {setEmail(value)}}/>
      :<TextInput style={styles.escrever2} placeholder="Digite seu email" value = {email} onChangeText = {(value) => {setEmail(value)}}/>}
     
      <TextInput style={styles.escrever} placeholder="Digite sua senha" value = {senha} onChangeText = {(value) => {setSenha(value)}}/>

      <Pressable style={styles.botao}  onPress = {handleLogin}>
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
    height: vh(100),
    width: vw(100),
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
  escrever2: {
    width: vw(80),
    height: vh(9),
    marginTop: vh(5),
    borderRadius: vw(5),
    backgroundColor: 'red',
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
    color: '#c6aefa',
    fontWeight: 'bold',
    opacity: 0.8,
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
  
