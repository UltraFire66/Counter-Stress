import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image
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
          colors={["#308A15", "#ABD79E"]}>

        

       
            <Image source = {{uri: 'https://pasteboard.co/XXewNcXDAmWk.png'}} style = {styles.icone} />
          <View style = {styles.fundo}>
            <ScrollView style = {styles.componentes} showsVerticalScrollIndicator={false}>

              <View style = {styles.conjunto}>
                <SubCategoriasMEs cor = '#ABD79E' escrita = "Planejamento 1" corBorda = '#308A15' />
                  <View style = {styles.espacinho}/>
                <SubCategoriasMEs cor = '#ABD79E' escrita = "Planejamento 2" corBorda = '#308A15' />
              </View>
              <View style = {styles.conjunto}>
                <SubCategoriasMEs cor = '#ABD79E' escrita = "Planejamento 3" corBorda = '#308A15' />
                  <View style = {styles.espacinho}/>
                <SubCategoriasMEs cor = '#ABD79E' escrita = "Planejamento 4" corBorda = '#308A15' />
              </View>
              <View style = {styles.conjunto}>
                <SubCategoriasMEs cor = '#ABD79E' escrita = "Planejamento 5" corBorda = '#308A15' />
                  <View style = {styles.espacinho}/>
                <SubCategoriasMEs cor = '#ABD79E' escrita = "Planejamento 6" corBorda = '#308A15' />
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
   opacity: 0.5,
   width: vh(5),
   height: vh(5),
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