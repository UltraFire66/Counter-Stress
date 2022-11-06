import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useState,useEffect,useContext} from 'react';
import {AuthContext} from '../contexts/auth';

import Planejamento from '../assets/planejamento.png';
import Respiracao from '../assets/IconeRespiracao.png';
import { vh, vw } from 'react-native-expo-viewport-units';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SubCategoriasMEs from '../components/SubCategoriasMEs';
import TopBar from '../components/TopBar';
import Tabs from '../components/tabs'

import Axios from 'axios';

export default function SubMEs({navigation,route}) {
    
    const [entradas,setEntradas] = useState({});
    const [meditacao,setMeditacao] = useState(false);
    const [planejamento,setPlanejamento] = useState(false);
    const [autoconhecimento,setAutoconhecimento] = useState(false);
    const [respiracao,setRespiracao] = useState(false);


    useEffect(()=>{

      if(route.params.categoria == 'Meditação'){
          setMeditacao(true);
      }

      if(route.params.categoria == 'Planejamento'){
          setPlanejamento(true);
      }

      if(route.params.categoria == 'Autoconhecimento'){
          setAutoconhecimento(true);
      }

      if(route.params.categoria == 'Respiração'){
          setRespiracao(true);
      }
      
      
      Axios.get("https://counterstress.glitch.me/BuscarMEs/"+route.params.categoria).
      then((response) => {
       
        setEntradas(response);
        
      });


    },[]);

    const renderItem = ({ item }) => (
      <Pressable onPress = {() => {navigation.navigate('MeEspecifica',{
      id: item.idME,
      corClara: route.params.corClara,
      corEscura: route.params.corEscura,
      categoria: route.params.categoria
      })}}> 
        <SubCategoriasMEs cor = {route.params.corClara} escrita = {item.tittleME} corBorda = {route.params.corEscura} />
      </Pressable>
   
    );


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
          colors={[route.params.corEscura, route.params.corClara]}>

        

          {meditacao ? (<MaterialCommunityIcons name = "meditation" size = {200} style = {styles.icone} />) :null}
          {planejamento ? (<Image source={Planejamento} style = {styles.icone2} />) : null}
          {autoconhecimento ? (<MaterialCommunityIcons name = "head-heart-outline" size = {200} style = {styles.icone3} />) :null}
          {respiracao ? (<Image source={Respiracao} style = {styles.icone4} />) : null}

          <View style = {styles.fundo}>
            
              <View style = {styles.componentes}>    
                
                
                
                <FlatList
                
                data = {entradas.data}
                keyExtractor={item => item.idME}
                renderItem = {renderItem}
                
                />

              </View>
              
          
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

  icone2:{
    marginBottom: vh(20),
    opacity: 0.4,
    width: vh(40),
    height: vh(40),
  },

  icone3:{
    marginBottom: vh(20),
    opacity: 0.5
  },
  
  icone4:{
    marginBottom: vh(20),
    opacity: 0.4,
    width: vh(40),
    height: vh(40),
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
    

  },
  componentes:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: vh(20)
  }
});