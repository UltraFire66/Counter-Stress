import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable
} from 'react-native';

import {useState} from 'react';

import { vh, vw } from 'react-native-expo-viewport-units';

import { LinearGradient } from 'expo-linear-gradient';


export default function Cadastro({ navigation }) {

  const {modal,setModal} = useState(false);

  return (
    <LinearGradient
    style={styles.fundo}
    start={{x: 0,y: 0}}
    end={{x: 0, y: 1}}
    colors={["#8E4FCD", "#C4BFE7"]}>
    
      <Text style={styles.titulo}>Cadastro</Text>
      <Text style={styles.subtitulo}>
        Estou me cadastrando no Counter-Stress para:
      </Text>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroUsuario')}>
        <Text style={styles.escritaBotao}>
          Buscar ajuda com o meu estresse, ansiedade e organização
        </Text>
      </Pressable>

      <Pressable style={styles.botao}>
        <Text style={styles.escritaBotao}>
          Ajudar pessoas com estresse, ansiedade e dificuldade de organização
          como Psicólogo
        </Text>
      </Pressable>

      <View style={styles.links}>
        <Text style={styles.escrita}>Já tem uma conta?</Text>
        <Pressable
          
          onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link} >Faça Login</Text>
          
        </Pressable>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    fundo: {

    width: '100%',
    height: '100%',
    display: 'flex',

    alignItems: 'center',
  },

  titulo: {
    fontSize:  vw(11),
    color: 'white',
    marginTop: vh(5),
  },

  subtitulo: {
    fontSize: vw(8),
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#E5E5E5',
    maxWidth: vw(65),
    maxHeight: vh(35),
    marginTop: vh(4),
    borderRadius: vw(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  escritaBotao: {
    fontSize: vh(3.7),
    textAlign: 'center',
    padding: 10
  },

  links: {
    marginTop: vh(5),
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  escrita: {
    fontSize: vh(2.8),
    marginLeft: 10,
  },
  link: {
    fontSize: vh(2.8),
    color: '#8E4FCD',
    fontWeight: 'bold',
    marginLeft: 6,
    textDecorationLine: 'underline',
  },

centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
 
});
