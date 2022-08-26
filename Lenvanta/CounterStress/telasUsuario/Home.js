import * as React from 'react';
import {

  View,
  StyleSheet,
  Pressable,
  Text
} from 'react-native';

import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { vh, vw } from 'react-native-expo-viewport-units';

export default function Home({navigation}) {
  const {user} = useContext(AuthContext); 

    return (

      <View style = {styles.container}>
        <TopBar/>

        <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>
        
          <AntDesign name = "user" size = {35} style = {styles.user}/>

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
   

  
  
 
})