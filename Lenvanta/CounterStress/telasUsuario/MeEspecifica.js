import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView
} from 'react-native';

import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {vh,vw} from 'react-native-expo-viewport-units';

import { LinearGradient } from 'expo-linear-gradient';

const texto = "A meditação vipassana é uma das mais antigas práticas de centralidade da Índia. Ela se mostra como uma rota para se autotransformar usando a auto-observação para atingir esse caminho. Seu foco primário é a conexão entre o corpo e a mente do praticante. Isso pode ser experimentado através da atenção voltada às sensações físicas que movimentam o corpo e conduzem a mente. O caminho para a visualização acontece desde a raiz que unifica o ..." 

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
        style={styles.parteSuperior}
        start={{x: 0,y: 0}}
        end={{x: 0, y: 1}}
        colors={["#8E4FCD", "#C4BFE7"]}>


           <MaterialCommunityIcons name = "meditation" size = {140} style = {styles.icone} /> 
           <Text style = {styles.Titulo}>Vipassana</Text>

        
        </LinearGradient>


        <View style = {styles.parteInferior}>
          
            <Text style = {styles.texto}>{texto}</Text>
            <View style = {styles.Fontes}>
              <Text style = {styles.Fonte}>Fontes</Text>
              <Text style = {styles.Link}>linkparateste.com</Text>
              <Text style = {styles.Link}>linkparateste2.com</Text>
              <Text style = {styles.Link}>linkparateste3.com</Text>
            </View>
        </View>
        
        </ScrollView>
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
      
      

    },

    parteSuperior: {
      display: 'flex',
      height: vh(30),
      width: vw(100),
      alignItems: 'center',
    },

    icone: {
      marginTop: vh(1)
    },

    Titulo: {

      fontSize: vw(8),

    },


    parteInferior: {
      width: vw(100),
      backgroundColor: '#C4BFE7'
    },

    texto: {
      fontSize: vw(7),
      marginHorizontal: vw(5.5),
      marginTop: vh(4),
      textAlign: 'justify',
      
    },

    Fontes: {
  
      marginTop: vh(4),
      marginBottom: vh(15),
      marginLeft: vw(5.5),
    },

    Fonte: {
      fontSize: vw(7),
      
      color: '#8E4FCD'
    },

    Link: {
      fontSize: vw(7),
      marginTop: vh(2)
    }

 

});