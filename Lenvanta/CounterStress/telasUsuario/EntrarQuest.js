import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator
} from 'react-native';

import { vh, vw } from 'react-native-expo-viewport-units';

import Torii from '../assets/torii.png';

import { LinearGradient } from 'expo-linear-gradient';

import { useState,useEffect,useContext} from 'react';
import {AuthContext} from '../contexts/auth';

import Axios from 'axios';


export default function EntrarQuest({navigation}) {

  const {user} = useContext(AuthContext);
  const [carregando,setCarregando] = useState(true); 
  const [respondeu,setRespondeu] = useState();
  const [dados,setDados] = useState();
  useEffect(()=>{

    async function buscaR() {

      await Axios.get("https://counterstress.glitch.me/BuscaResults/"+user.data[0].idUser).
      then((response)=>{
      
        if(response.data.message == "Nao encontrado"){
          setRespondeu(false);
        }

        else if(response != null){
          setRespondeu(true);
          setDados(response);
        }

      })

    }


    buscaR()
    setCarregando(false);
  },[])

  return (
    <>
    {carregando
    
    ?
     (
     
     <View style = {styles.ViewLoading}>
        <ActivityIndicator size="large" color="#C4BFE7" />
     </View>
      
      )
      
      :


      (
      <LinearGradient
        style={styles.container}
        start={{x: 0,y: 0}}
        end={{x: 0, y: 1}}
        colors={["#8E4FCD", "#5694fa"]}>

          {respondeu
          ?
          (<>
            <Text style={styles.escrever}>Deseja fazer o teste para avaliar seu nivel de stress?</Text>
            <Image source={Torii} style={styles.icone}></Image>
      
            <View style = {{alignItems: 'center', position: 'absolute', alignContent: 'center'}}>
              <Pressable style={styles.botao}  onPress = {() => navigation.navigate("Questionario")}>
                  <Text style={styles.escritaBotao} >Fazer novo teste</Text>
              </Pressable>
              <Pressable style={styles.botao2}  onPress = {() => navigation.navigate("VisualizarResultados",{dados: dados})}>
                  <Text style={styles.escritaBotao} >Ver resultados</Text>
              </Pressable>
            </View>  
           </>)

          :
         (<>
            <Text style={styles.escrever}>Deseja fazer o teste para avaliar seu nivel de stress?</Text>
              <Image source={Torii} style={styles.icone}></Image>
              <Pressable style={styles.botao}  onPress = {() => navigation.navigate("Questionario")}>
                <Text style={styles.escritaBotao} >Fazer o Teste</Text>
              </Pressable>
          </>
          )}
         
    
       </LinearGradient>)}
    
    
    
    </>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    height: vh(100),
    width: vw(100),
    justifyContent: 'center',
    padding: 8,
    display: 'flex',
    alignItems: 'center',
  },

  icone: {
    opacity: 0.4,
    maxHeight: vh(49),
    maxWidth: vh(49),
    marginTop: vw(15),
  },

  escrever: {
    fontSize: vh(5),
    marginLeft: vw(5),
    marginRight: vw(5),
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    position: 'absolute',
    top: vh(7),
    
  },

  botao: {
    backgroundColor: '#D9D9D9',
    width: vw(65),
    height: vh(13),
    borderRadius: vw(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40, 
    borderWidth: vw(0.4),
    position: 'absolute',
  },

  botao2: {
    backgroundColor: '#D9D9D9',
    width: vw(65),
    height: vh(13),
    borderRadius: vw(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: vw(0.4),
    marginTop: vh(20.5),
  },

  escritaBotao: {
    fontSize: vh(4),
  },

  ViewLoading: {
    height: vh(100),
    width: vw(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   },

});
  
