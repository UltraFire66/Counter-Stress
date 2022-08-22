import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { vh, vw } from 'react-native-expo-viewport-units';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SubCategoriasMEs from '../components/SubCategoriasMEs';
import TopBar from '../components/TopBar';
import Tabs from '../components/tabs'

export default function SubMEs({navigation}) {

    return (
        
      <>
      
        <TopBar/>
        <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("Perfil")}}>
            <AntDesign name = "user" size = {35} />
        </Pressable>
        <Pressable style = {styles.voltar} onPress = {() => {navigation.navigate("Tab")}}>
            <AntDesign name = "arrowleft" size = {35} />
        </Pressable>

        

          <LinearGradient
          style={styles.background}
          start={{x: 0,y: 0}}
          end={{x: 0, y: 1}}
          colors={["#8E4FCD", "#C4BFE7"]}>

        

       
            <MaterialCommunityIcons name = "meditation" size = {200} style = {styles.icone} />
          <View style = {styles.fundo}>
            <ScrollView style = {styles.componentes} showsVerticalScrollIndicator={false}>

              <View style = {styles.conjunto}>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação 1" corBorda = '#8E4FCD' />
                  <View style = {styles.espacinho}/>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação 2" corBorda = '#8E4FCD' />
              </View>
              <View style = {styles.conjunto}>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação 3" corBorda = '#8E4FCD' />
                  <View style = {styles.espacinho}/>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação 4" corBorda = '#8E4FCD' />
              </View>
              <View style = {styles.conjunto}>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação 5" corBorda = '#8E4FCD' />
                  <View style = {styles.espacinho}/>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação 6" corBorda = '#8E4FCD' />
              </View>
              <View style = {styles.conjunto}>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação 7" corBorda = '#8E4FCD' />
                  <View style = {styles.espacinho}/>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação 8" corBorda = '#8E4FCD' />
              </View>
              

            </ScrollView>
          
          </View>
          </LinearGradient>

       

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

  background: {
    width: vw(100),
    height: vh(100),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  icone:{
   marginBottom: vh(20),
   opacity: 0.5
  },
 
  mes:{
    flexDirection: 'row',
    position: 'absolute'
  },

  espacinho: {
    width: 20
  },

  conjunto: {

    display: 'flex',
    flexDirection: 'row',
    

  },  

  fundo:{
    height: vh(100),
    width: vw(100),
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

  }
});