import * as React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  FlatList,
  Text
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


import { useState,useEffect,useContext} from 'react';
import {AuthContext} from '../contexts/auth';

import Cat_Psico from '../components/Cat_Psico';
import FotoPsi from '../assets/Wall-e.jpg';
import FotoPsi2 from '../assets/telaPerfilKratos.jpg';
import { vh , vw} from 'react-native-expo-viewport-units';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TopBar from '../components/TopBar';

import Axios from 'axios';

export default function CatalogoPsi({navigation}) {

  const [naCidade,setNaCidade] = useState({});
  const [total,setTotal] = useState({});

  const {user} = useContext(AuthContext);

  useEffect (() => {

    Axios.post("https://counterstress.glitch.me/MostrarPsyCidade", {id: user.data[0].idUser
       }).then((response) => {
        
       if(response.data.message == 'Nao encontrado'){
           alert('Sem dados encontrados');
       }
       else{
           setNaCidade(response);
       }
 });

 Axios.post("https://counterstress.glitch.me/MostrarPsyTotal", {id: user.data[0].idUser
       }).then((response) => {
        
       if(response.data.message == 'Nao encontrado'){
           alert('Sem dados encontrados');
       }
       else{
           setTotal(response);
       }
 });

 },[]);

    const renderItem = ({ item }) => (
      <Pressable onPress = {() => {navigation.navigate("VerPsico",{
       id:item.idUser,txtBio: item.txtBio, nameUser: item.nameUser, email: item.email, contactNum: item.contactNum,
       city: item.city, state: item.state   })}}>
      <Cat_Psico fotoPsi = {FotoPsi} nome = {item.nameUser} cidade = {item.city} estrelas = '1'></Cat_Psico>
      </Pressable>
    );


    return (
      <>
      <LinearGradient
      style={styles.container}
      start={{x: 0,y: 0}}
      end={{x: 0, y: 1}}
      colors={["#78ABC6", "#C4BFE7"]}>
      <TopBar/>

      <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>

        <AntDesign name = "user" size = {35} />

      </Pressable>
        <View style = {{display: 'flex',alignItems: 'center'}}>
          
          

              <FlatList

              data = {naCidade.data}
              keyExtractor={item => item.idUser}
              renderItem = {renderItem}
              ListHeaderComponent = {
                <Text style={{fontSize: vw(6),marginTop: vh(3)}}>Na sua cidade</Text>
              }
              />

              <FlatList

              data = {total.data}
              keyExtractor={item => item.idUser}
              renderItem = {renderItem}
              ListHeaderComponent = {
                <Text style={{fontSize: vw(6),marginTop: vh(3)}}>Outros</Text>
              }
              />

          
            
              
        </View>
      </LinearGradient>

      </>
      
    )

}

const styles = StyleSheet.create({

  container: {

    
    height: vh(100),
    width: vw(100),
  },

  perfil: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: vw(85),
  },

  a: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    width: vw(100),
    height:  vh(100)

  },

 

  


});