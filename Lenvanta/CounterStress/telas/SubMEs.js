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

        

          <LinearGradient
          style={styles.fundo}
          start={{x: 0,y: 0}}
          end={{x: 0, y: 1}}
          colors={["#8E4FCD", "#C4BFE7"]}>

        

       
            <MaterialCommunityIcons name = "meditation" size = {200} style = {styles.icone} />

            <ScrollView   >
            
            <View style = {styles.mes} >
                
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Transcendental" corBorda = '#8E4FCD'></SubCategoriasMEs>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Guiada" corBorda = '#8E4FCD'></SubCategoriasMEs>
            
            </View>

           </ScrollView>

          </LinearGradient>

       

      </>
      
    )

}

const styles = StyleSheet.create({
 
  container: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    width: vw(100),
    height: vh(50),

  },

  perfil: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: vw(85),
 },
 fundo: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
 },

 icone:{
   
    zIndex: 0,
 },
 mes:{
    flexDirection: 'row',
    position: 'absolute'
 }
});