import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ImageBackground
} from 'react-native';

import Estrelas from './Estrelas';

export default function Cat_Psico(props) {
  {var cidade = props.cidade}
  {var fotoPsi = props.fotoPsi}
  {var estrelas = props.estrelas}

    return (
      <View style = {styles.fundo}>
        <View style={styles.container}>
          <View style = {styles.frente}>
            <ImageBackground
                style={styles.circulo}
                imageStyle={styles.usuario}
                source={props.fotoPsi}>
            </ImageBackground>
          </View>

          <View style={styles.info}>
            <Text style={styles.nomepsi}>{props.nome}</Text>
            <Text style={styles.cidade}>De: {props.cidade}</Text>
            <Estrelas></Estrelas>
          </View>
        </View>
      </View>
    )

}

const styles = StyleSheet.create({
  fundo:{
    backgroundColor: 'blue', 
    display: 'flex',
    marginTop: '10vw'
  },

  container:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: 'none',
    borderRadius: '7vw', 
    marginLeft: '-6vw',
    marginRight: '15vw',
    backgroundColor: '#D9D9D9'
  },

  info:{
    marginLeft: '18vw',
    alignItems: 'center',
    marginBottom: '14vw'
  },

  nomepsi: {
    fontSize: '6vw',
    marginBottom: '1vw',
    marginRight: '2vw'
  },

  cidade: {
    fontSize: '3.7vw',
  },

  b: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '50vw'
  },
  frente:{
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '8.5vw'
    },

  circulo: {
    height: '12vh',
    width: '12vh',
    borderStyle: 'none'
  },
  usuario: {
    borderRadius: '9vh',
    display: 'flex',
    border: '2px none',
  }
});