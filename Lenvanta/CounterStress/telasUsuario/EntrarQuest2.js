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




export default function EntrarQuest({navigation}) {
  return (

    <LinearGradient
    style={styles.container}
    start={{x: 0,y: 0}}
    end={{x: 0, y: 1}}
    colors={["#8E4FCD", "#5694fa"]}>

      <Text style={styles.escrever}>Deseja fazer o teste para avaliar seu nivel de stress?</Text>
      <Image source={Torii} style={styles.icone}></Image>

      <View style = {{alignItems: 'center', position: 'absolute', alignContent: 'center'}}>
        <Pressable style={styles.botao}  onPress = {() => navigation.navigate("Questionario")}>
            <Text style={styles.escritaBotao} >Fazer novo teste</Text>
        </Pressable>
        <Pressable style={styles.botao2}  onPress = {() => navigation.navigate("Questionario")}>
            <Text style={styles.escritaBotao} >Ver último resultado</Text>
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
    borderWidth: vw(0.4),
    marginTop: vh(10),
  },

  botao2: {
    backgroundColor: '#D9D9D9',
    width: vw(65),
    height: vh(13),
    borderRadius: vw(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: vw(0.4),
    marginTop: vh(2.5),
  },

  escritaBotao: {
    fontSize: vh(3),
  },

});
  
