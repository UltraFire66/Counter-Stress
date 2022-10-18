import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Text
} from 'react-native';

import { vh, vw } from 'react-native-expo-viewport-units';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CategoriasMEs from '../components/CategoriasMEs';
import TopBar from '../components/TopBar';

export default function MEs({navigation}) {

    return (
      <>
      <TopBar/>

      <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>

        <AntDesign name = "user" size = {35} />

      </Pressable>
      <View style = {styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriasMEs cor = '#C4BFE7' escrita = "Meditação" corBorda = '#8E4FCD' navegarPara = "SubMEs"></CategoriasMEs>
        <CategoriasMEs cor = '#ABD79E' escrita = "Planejamento" corBorda = '#308A15' navegarPara = "Planejamento"></CategoriasMEs>
        <CategoriasMEs cor = '#78ABC6' escrita = "Autoconhecimento" corBorda = '#225ED2' navegarPara = "SubMEs"></CategoriasMEs>
        
        
        <View style = {{alignItems: 'center'}}>
          <Pressable
            style = {{
              marginTop: vh(3),
              height: vh(10),
              width: vw(45),
              backgroundColor: '#78ABC6',
              borderRadius: vw(5),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#171717',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 0.5,
              borderWidth: 3,
              borderColor: '#225ED2',
            }} onPress = {() => {navigation.navigate("CriarME")}}>
            <Text style = {styles.escrita}>Criar ME</Text>
          </Pressable>
        </View>
              
        </ScrollView>
        
      </View>
      </>
    )

}

const styles = StyleSheet.create({
 
  container2: {
    marginTop: vh(3),
   },

   escrita:{
    color: 'black',
    fontSize: vw(4)
  },
  
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

/*
<CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD' navegarPara = "SubMEs"></CategoriasMEs>
<CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD' navegarPara = "SubMEs"></CategoriasMEs>
<CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD' navegarPara = "SubMEs"></CategoriasMEs>
<CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD' navegarPara = "SubMEs"></CategoriasMEs>
<CategoriasMEs cor = '#C4BFE7' escrita = "Respiração" corBorda = '#8E4FCD' navegarPara = "SubMEs"></CategoriasMEs>
*/