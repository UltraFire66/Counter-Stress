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

import { useState,useEffect,useContext} from 'react';
import {AuthContext} from '../contexts/auth';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {vh,vw} from 'react-native-expo-viewport-units';

import { LinearGradient } from 'expo-linear-gradient';

import Axios from 'axios';

const texto = "A meditação vipassana é uma das mais antigas práticas de centralidade da Índia. Ela se mostra como uma rota para se autotransformar usando a auto-observação para atingir esse caminho. Seu foco primário é a conexão entre o corpo e a mente do praticante. Isso pode ser experimentado através da atenção voltada às sensações físicas que movimentam o corpo e conduzem a mente. O caminho para a visualização acontece desde a raiz que unifica o ..." 

export default function MeEspecifica({navigation,route}) {

  const [me,setMe] = useState(null);
  const [nmr,setNmr] = useState(null);
  const [fontes,setFontes] = useState(null);
  const [psy,setPsy] = useState(null);

  useEffect(()=>{

    async function pegaME(){

      await Axios.get("https://counterstress.glitch.me/BuscarME/"+route.params.id).
      then((response) => {
       
       setMe(response.data[0]);
      
      });

    }

    async function pegaPsy(){

      await Axios.get("https://counterstress.glitch.me/BuscarPsyME/"+route.params.id).
      then((response) => {

       
       setPsy(response.data[0]);
      
      });

    }

    

    async function pegaFontes(){

      await Axios.get("https://counterstress.glitch.me/BuscarFontes/"+route.params.id).
      then((response) => {
       
       setFontes(response);
       
      });

    }

    pegaME();

    pegaPsy();

    pegaFontes();



  },[])


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

           {me != null?
           (<Text style = {styles.Titulo}>{me.tittleME}</Text>): null}
           

        
        </LinearGradient>


        <View style = {styles.parteInferior}>
          
          {me != null? 
          ( <Text style = {styles.texto}>{me.txt}</Text>) : null}
           


            <View style = {styles.Fontes}>
              <Text style = {styles.Fonte}>Fontes</Text>

              

              {fontes != null ?

              typeof fontes.data[0]  != "undefined"  
              ?(<Text style = {styles.Link}>{fontes.data[0].refLink}</Text>):null
        
              : null}

              {fontes != null ?

              typeof fontes.data[1]  != "undefined"  
              ?(<Text style = {styles.Link}>{fontes.data[1].refLink}</Text>):null

              : null}

              {fontes != null ?

              typeof fontes.data[2]  != "undefined"  
              ?(<Text style = {styles.Link}>{fontes.data[2].refLink}</Text>):null

              : null}

              {fontes != null ?

              typeof fontes.data[3]  != "undefined"  
              ?(<Text style = {styles.Link}>{fontes.data[3].refLink}</Text>):null

              : null}

              {fontes != null ?

              typeof fontes.data[4]  != "undefined"  
              ?(<Text style = {styles.Link}>{fontes.data[4].refLink}</Text>):null

              : null}
              

              {psy != null 
              ?(<>
                  <Text style = {{ fontSize: vw(8),marginTop: vh(2)}}>Mecanismo postado por</Text>

                  <Pressable onPress = {()=>{navigation.navigate('VerPsico',{id: psy.idUser})}}>
                    <Text style = {{ fontSize: vw(7),marginTop: vh(2), color: "#8E4FCD" }}>{psy.psyName}</Text>
                  </Pressable>

                </>
                ):null}
              
                  
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
      minHeight: vh(70),
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