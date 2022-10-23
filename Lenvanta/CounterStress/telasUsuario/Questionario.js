import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  FlatList
} from 'react-native';

import { vh, vw } from 'react-native-expo-viewport-units';
import Torii from '../assets/torii.png';
import { LinearGradient } from 'expo-linear-gradient';
import Perguntas from '../components/Perguntas';

import { useState,useEffect,useContext} from 'react';
import {AuthContext} from '../contexts/auth';

import Axios from 'axios';

export default function Questionario({navigation}) {
  const [entradas,setEntradas] = useState({});

  useEffect(()=>{
     
      
      
    Axios.get("https://counterstress.glitch.me/BuscaQuestoes").
    then((response) => {
     
      setEntradas(response);
      console.log(response.data);
    });


  },[]);


  const renderItem = ({ item }) => (
     <Perguntas pergunt = {item.question}></Perguntas>
  
  );

  return (
    <View>
      

        <FlatList

        data = {entradas.data}
        keyExtractor={item => item.idQuestion}
        renderItem = {renderItem}
        
        />

        <View style = {styles.centro}>
          <Pressable style = {styles.btn} onPress = {() => {navigation.goBack()}}>
              <Text style = {styles.txtBtn}>Finalizar Teste</Text>
          </Pressable> 
        </View>
      
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
  
