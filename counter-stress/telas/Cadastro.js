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

export default function Cadastro({ navigation }) {

  const {modal,setModal} = useState(false);

  return (
    <View style={styles.fundo}>
    
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
          style={styles.link}
          onPress={() => navigation.navigate('Login')}>
          Faça Login
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
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

  subtitulo: {
    fontSize: '8vw',
    color: 'white',
    marginTop: '10px',
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#E5E5E5',
    maxWidth: '65vw',
    maxHeight: '35vh',
    marginTop: '4vh',
    borderRadius: '8vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  escritaBotao: {
    fontSize: '3.7vh',
    textAlign: 'center',
    padding: '10px',
  },

  links: {
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  escrita: {
    fontSize: '2.8vh',
    marginLeft: '10px',
  },
  link: {
    fontSize: '2.8vh',
    color: '#8E4FCD',
    fontWeight: 'bold',
    marginLeft: '6px',
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
