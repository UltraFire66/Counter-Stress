import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {vh,vw} from 'react-native-expo-viewport-units';

import { LinearGradient } from 'expo-linear-gradient';

export default function MeEspecifica({navigation}) {

    return (
    <>
        <TopBar/>
        <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("Perfil")}}>
            <AntDesign name = "user" size = {35} />
        </Pressable>
        <Pressable style = {styles.voltar} onPress = {() => {navigation.navigate("Tab")}}>
            <AntDesign name = "arrowleft" size = {35} />
        </Pressable>

      <View style = {styles.container}>

        <LinearGradient
        style={styles.parteSuperior}
        start={{x: 0,y: 0}}
        end={{x: 0, y: 1}}
        colors={["#8E4FCD", "#5694fa"]}>


           <MaterialCommunityIcons name = "meditation" size = {140} style = {styles.icone} /> 
           <View style = {styles.circulo}></View>

        
        </LinearGradient>


        <View style = {styles.parteInferior}>

        </View>

      </View>
    </>
    )

}

const styles = StyleSheet.create({
    
    perfil: {
      position: 'absolute',
      marginTop: 30,
      marginLeft: vw(85),
    },
    
    voltar: {
      position: 'absolute',
      marginTop: 30,
      marginLeft: vw(4),
    },

    container: {
      backgroundColor: 'red',
      height: vh(100),
      width: vw(100)

    },

    parteSuperior: {
      display: 'flex',
      height: vh(30),
      width: vw(100),
      alignItems: 'center',
      zIndex: 1
    },

    icone: {
        marginTop: vh(1)
    },

    

    parteInferior: {
        zIndex: 5
    }

 

});