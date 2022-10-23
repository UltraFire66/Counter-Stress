import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
} from 'react-native';

import { vh, vw } from 'react-native-expo-viewport-units';
import Torii from '../assets/torii.png';
import { LinearGradient } from 'expo-linear-gradient';
import Perguntas from '../components/Perguntas';




export default function Questionario({navigation}) {
  return (
    <View>
      <ScrollView>
        <Perguntas pergunt = "vc olha pro céu estrelado?"></Perguntas>
        <Perguntas pergunt = "ta tudo bem meu lindo?"></Perguntas>
        <Perguntas pergunt = "dormiu bem princesa?"></Perguntas>
        <Perguntas pergunt = "o mundo é lindo, não?"></Perguntas>

        <View style = {styles.centro}>
          <Pressable style = {styles.btn} onPress = {() => {navigation.goBack()}}>
              <Text style = {styles.txtBtn}>Finalizar Teste</Text>
          </Pressable> 
        </View>
      </ScrollView>
    </View>
    
    

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
    alignItems: 'center',
  },

  icone: {
    opacity: 0.4,
    maxHeight: vh(49),
    maxWidth: vh(49),
    marginTop: vw(15),
  },

  escrever: {
    fontSize: vh(5),
    marginLeft: vw(5),
    marginRight: vw(5),
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    position: 'absolute',
    top: vh(7),
    
  },

  botao: {
    backgroundColor: '#D9D9D9',
    width: vw(65),
    height: vh(13),
    borderRadius: vw(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40, 
    borderWidth: vw(0.4),
    position: 'absolute',
  },

  escritaBotao: {
    fontSize: vh(4),
  },

  btn:{
    marginTop: vh(5),
    width: vw(60),
    height: vh(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(8),
    backgroundColor: '#D9D9D9',
  },

  txtBtn: {
    fontSize: 18
  },

  centro:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh(3),
  },

});
  
