import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList
} from 'react-native';



import { useState,useEffect,useContext} from 'react';
import {AuthContext} from '../contexts/auth';

import Axios from 'axios';
import EntradaDiario from '../components/EntradaDiario';
import { vh, vw } from 'react-native-expo-viewport-units';
import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

var escritaDiario = "É puro espetáculo: comida, compras e diversão fora do campo ";

var escritaDiario1 = "Dois dias se passaram e eu ainda não descobri, estou estudando mais ...";

var escritaDiario2 = "Se você gosta do esporte, acaba se identificando com os times do lugar para onde você viaja.";




export default function Diario({navigation}) {

  const {user} = useContext(AuthContext);
  const [entradas,setEntradas] = useState({});

  useEffect (() => {
     Axios.post("https://counterstress.glitch.me/EntradasDiario", {id: user.data[0].id
        }).then((response) => {
        if(response.data.message == 'Nao encontrado'){
            alert('Email ou Senha incorretos!!');
        }
        else{
            setEntradas(response);
        }
  });

  },[]);

  /*useEffect (() => {
    Axios.get("https://counterstress.glitch.me/diarioUsuario/" + 1).then((response) => {
       if(response.data.message == 'Nao encontrado'){
           alert('Email ou Senha incorretos!!');
       }
       else{
           //console.log(response)
       }
 });

 },[]);*/

  const renderItem = ({ item }) => (
    <Pressable onPress = {() => {navigation.navigate('EntradaDiario',{
      id: item.id, titulo: item.titulo , data: item.data, escrita: item.escrita })}}>
    <EntradaDiario data = {item.data} escrita = {item.escrita}/>
    </Pressable>
  );

    return (
      <>
      <TopBar/>

      <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>

        <AntDesign name = "user" size = {35} />

      </Pressable>

        <View style = {styles.container}>
          
        <Pressable style = {styles.divAddNovaEntrada} onPress = {() => {navigation.navigate("CriarDiario")}}>
          
         
          <View style = {styles.divMais}>
            <View style = {styles.barraVertical}></View>
            <View style = {styles.barraHorizontal}></View>
            
          </View>

          <Text style = {styles.escritaAdd}>Adicionar novas entradas no diário</Text>
          
        </Pressable>
        
       <View style = {styles.barrinha}></View>
       
{/*======================== Parte superior de ADD entrada ===================== */}
      
      <FlatList
      
      data = {entradas.data}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      
      />

      
      
      </View>
      </>
    )

}

const styles = StyleSheet.create({

    perfil: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: vw(85),
  },

    container: {
    display: 'flex',
    alignItems: 'center',
    height: vh(100),
    width: vw(100),
  },

  divAddNovaEntrada: {
    height: vh(10),
    width: vw(100),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },

  barrinha: {

    backgroundColor: 'black',
    height: vh(0.3),
    opacity: 0.4,
    width: vw(89),
    marginBottom: vh(2)

  },

  divMais: {
    marginLeft: vw(5),
    height: vh(3),
    width: vh(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  barraHorizontal: {

    height: vh(0.3),
    backgroundColor: '#8E4FCD',
    width: vw(8),
    position: 'absolute',
  },

  barraVertical: {
    height: vw(8),
    backgroundColor: '#8E4FCD',
    width: vh(0.3),
  },

  escritaAdd: {

    fontSize: vw(6),
    textAlign: 'center',
    width: vw(50),
    marginLeft: vw(15),
    color: '#8E4FCD'
  },


//========================== Parte superior de ADD entrada====================

 

});