import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';



export default function CadastroUsuario({navigation}) {
  return(
    <View style = {styles.fundo}>
      <Text style = {styles.titulo}>Cadastro</Text>

      <TextInput style={styles.escrever} placeholder="Digite seu email" />
      <TextInput style={styles.escrever} placeholder="Digite seu nome" />
      <TextInput style={styles.escrever} placeholder="Digite sua senha" />
      <TextInput style={styles.escrever} placeholder="Digite sua senha novamente" />
      <Pressable style={styles.botao} >
      <Text style={styles.escritaBotao}>Cadastrar</Text>
      </Pressable>

      <View style={styles.links}>
        <Text style={styles.escrita}>Já tem uma conta?</Text>
        <Pressable style={styles.link} onPress = {() => navigation.navigate("Login")}>Faça Login</Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  
 /*  fundo: {
    backgroundImage: 'linear-gradient(#8E4FCD,#C4BFE7)',
    width: '100%',
    height: '100%',
    display: 'flex',
  
    alignItems: 'center',
  },

  titulo: {
    fontSize: '11vw',
    color: 'white',
    marginTop: '10px',

  },
  
   escrever: {
    width: '80vw',
    height: '13vh',
    marginTop: '3vh',
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
    borderRadius: '8vw',
    display: 'flex',
    border: 'solid 1px black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  escritaBotao: {
    fontSize: '4vh'
  },

  links: {
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    
  },

  escrita: {
    fontSize: '2.8vh',
    marginLeft: '10px'
  },
  link: {
    fontSize: '2.8vh',
    color: '#8E4FCD',
    fontWeight: 'bold',
    marginLeft:'6px',
    textDecorationLine: 'underline',
    
  },
 */
})