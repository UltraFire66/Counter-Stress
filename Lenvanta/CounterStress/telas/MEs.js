import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native';

import { vh, vw } from 'react-native-expo-viewport-units';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CategoriasMEs from '../components/CategoriasMEs';
import TopBar from '../components/TopBar';

export default function MEs({navigation}) {

    return (
      <>
      <TopBar/>

      <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("Perfil")}}>

        <AntDesign name = "user" size = {35} />

      </Pressable>
      <View style = {styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriasMEs cor = '#C4BFE7' escrita = "Meditação" corBorda = '#8E4FCD'></CategoriasMEs>
        <CategoriasMEs cor = '#ABD79E' escrita = "Planejamento" corBorda = '#308A15'></CategoriasMEs>
        <CategoriasMEs cor = '#78ABC6' escrita = "Autoconhecimento" corBorda = '#225ED2'></CategoriasMEs>
        <CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD'></CategoriasMEs>
        <CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD'></CategoriasMEs>
        <CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD'></CategoriasMEs>
        <CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD'></CategoriasMEs>
        <CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD'></CategoriasMEs>
        
        </ScrollView>
        
      </View>
      </>
    )

}

const styles = StyleSheet.create({
 
  container: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    width: vw(100),
    height: vh(100),
    flexDirection: 'column'
  },

  perfil: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: vw(85),
 },

 


  

 
});