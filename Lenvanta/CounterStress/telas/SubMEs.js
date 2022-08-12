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

            <ScrollView style = {styles.componentes}>

              <View style = {styles.conjunto}>
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação1" corBorda = '#8E4FCD' />
                <SubCategoriasMEs cor = '#C4BFE7' escrita = "Meditação1" corBorda = '#8E4FCD' />
              </View>

            </ScrollView>
          

          </LinearGradient>

       

      </>
      
    )

}

const styles = StyleSheet.create({
 

  perfil: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: vw(85),
 },
  fundo: {
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

  componentes: {

    position: 'absolute',
    
  },

  conjunto: {

    display: 'flex',
    flexDirection: 'row',


  },  
});