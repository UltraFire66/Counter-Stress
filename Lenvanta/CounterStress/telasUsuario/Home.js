import * as React from 'react';
import {

  View,
  StyleSheet,
  Pressable,
  Text,
  Image
} from 'react-native';

import {useState,useEffect} from 'react'
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { vh, vw } from 'react-native-expo-viewport-units';

const pensador = require('pensador-api')
import { createClient } from 'pexels';



export default function Home({navigation}) {


  
 
  const [foto,setFoto] = useState('https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800');
  const [frase,setFrase] = useState('Clique no botao para receber uma mensagem!bfjbghjfbjgbdfjg');
  const [autor,setAutor] = useState('');

  const client = createClient('563492ad6f91700001000001b6804ae3f9b34c36b123675631140391');
  const query = 'landscape';
  const orientation = 'landscape';
  const size = 'medium';

  
  async function pegaFrase() {

    const array = await pensador({ term: "Elon Musk", max: 5 })
    setFrase(array.phrase[0]);
    setAutor('Elon Musk');
    return array;

  }

  const pegaFoto = async () => {
    try{
      const page = Math.random() * (15000 - 1 + 1) + 1;
      await client.photos.search({ query,orientation,size,page, per_page: 1 }).then(photos => {
        setFoto(photos.photos[0].src.portrait);
      });
    }catch{
      pegaFoto();
    }
    

  }

  const Mensagem = () => {
    pegaFoto;
 


  }



    return (

      <View style = {styles.container}>
        <TopBar/>

        <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>
        
          <AntDesign name = "user" size = {35} style = {styles.user}/>

        </Pressable>

      
          
          <Image source={{uri:foto}}  style={styles.foto} />
          <Text style = {styles.mensagem}>{frase}</Text>
          <Text style = {styles.autor}>{autor}</Text>
          <Pressable style={styles.botao} onPress = {pegaFoto}>
            <Text style={styles.escritaBotao}>Mensagem</Text>
          </Pressable>
        

       

      </View>

    )

}

const styles = StyleSheet.create({

   perfil: {
      position: 'absolute',
      marginTop: 25,
      marginLeft: vw(85),
   },

  

   btn: {
    width: vw(35),
    heigth: vh(36),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'red',
   
    
   },

   botao: {
    backgroundColor: '#E5E5E5',
    width: vw(52),
    height: vh(9),
    marginTop: vh(4),
    borderRadius: vw(8),
    display: 'flex',
    position: 'absolute',
    top: vh(63),
    left: vw(25),
    border: 'solid 1px black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  escritaBotao: {
    fontSize: vh(4)
  },


   foto: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
   },

   mensagem: {
      position: 'absolute',
      top: vh(35),
      left: vw(7),
      fontSize: vw(8),
      maxWidth: vw(80),
    
      textAlign: 'center',
      color: 'white'
   },

   autor: {
    position: 'absolute',
    top: vh(55),
    left: vw(7),
    fontSize: vw(8),
    maxWidth: vw(80),
  
    textAlign: 'center',
    color: 'white'
 }
   

  
  
 
})