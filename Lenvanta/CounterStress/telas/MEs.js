import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

import { vh, vw } from 'react-native-expo-viewport-units';

import CategoriasMEs from '../components/CategoriasMEs';


export default function MEs({navigation}) {

    return (

      <View style = {styles.container}>
        <ScrollView>
        <CategoriasMEs cor = '#C4BFE7' escrita = "Meditação" corBorda = '#8E4FCD'></CategoriasMEs>
        <CategoriasMEs cor = '#ABD79E' escrita = "Planejamento" corBorda = '#308A15'></CategoriasMEs>
        <CategoriasMEs cor = '#78ABC6' escrita = "Autoconhecimento" corBorda = '#225ED2'></CategoriasMEs>
        <CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD'></CategoriasMEs>
        </ScrollView>
      </View>

    )

}

const styles = StyleSheet.create({
 
  container: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    width: vw(100),
    height: vh(100)

  },



  

 
});