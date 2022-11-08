import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  FlatList,
  ActivityIndicator,
  Alert
} from 'react-native';

import { vh, vw } from 'react-native-expo-viewport-units';
import Torii from '../assets/torii.png';
import { LinearGradient } from 'expo-linear-gradient';
import Perguntas from '../components/Perguntas';

import { useState,useEffect,useContext} from 'react';
import {AuthContext} from '../contexts/auth';

import Axios from 'axios';

export default function Questionario({navigation}) {
  
  const {user} = useContext(AuthContext);
  const [entradas,setEntradas] = useState({});
  const [nmrResp,setNmrResp] = useState();
  const [carregando,setCarregando] = useState(false);
  const [carregando2,setCarregando2] = useState(false);

  const [resultado,setResultado] = useState();

  useEffect(()=>{
     
    setCarregando(true);  
      
    Axios.get("https://counterstress.glitch.me/BuscaQuestoes").
    then((response) => {
     
      setEntradas(response);
      setCarregando(false);
    });


  },[]);


  async function enviaResult(){
    let currentDate = new Date();
    let cDate =   currentDate.getFullYear() +  '-' + (currentDate.getMonth() + 1)  + '-' + currentDate.getDate() + '-'  + currentDate.getHours() + '.' + currentDate.getMinutes() + '.' + currentDate.getSeconds() ;
   
    let nmr,menor;
    
    setCarregando(true);
 

    await Axios.get("https://counterstress.glitch.me/BuscarNmr/"+user.data[0].idUser).
    then((response)=>{
      
        nmr = response.data.result[0].contagem;
        menor = response.data.result[0].menor;
        
    })

   Axios.post("https://counterstress.glitch.me/EnviaResult",{
      idUser: user.data[0].idUser,
      quantidade: nmr,
      menor: menor,
      data: cDate
    }).then((response)=> {
      console.log(response.data.result[0]);
      setResultado(response);
      
      setCarregando(false);

      Alert.alert(
        "Questionário feito com sucesso!",
        "Clique em OK para continuar",
        [
          { text: "OK", onPress: () => {navigation.navigate("ResultQuest",{
            total: response.data.result[0].total,
            estresse: response.data.result[0].totalStress,
            ansiedade: response.data.result[0].totalAnxiety,
            depressao: response.data.result[0].totalDepression,
          })} }
        ]
      );

    });

    //não testado
    

  } 







  const enviaResul = () => {
    Axios.post("https://counterstress.glitch.me/EnviaResult",{
      idUser: user.data[0].idUser
    });
  }

  const buscaNmr = () => {
    Axios.post("https://counterstress.glitch.me/BuscaNmr/"+user.data[0].idUser).
    then((response)=>{
        setNmrResp(response.data.contagem);
    })
  }

  const renderItem = ({ item }) => (<>
     
     <Perguntas pergunt = {item.question} categoria = {item.category} peso = {item.weight}></Perguntas>
     </>
  );

  return (
    <View>
      {carregando?
      
      (<View style = {styles.ViewLoading}>
        <Text style = {{fontSize: vw(5.5),textAlign: 'center',marginVertical: vh(8)}}>Essa operação pode demorar alguns segundos</Text>
        <ActivityIndicator size="large" color="#C4BFE7" />
      </View>
      )
      
      :(

        <FlatList

        data = {entradas.data}
        keyExtractor={item => item.idQuestion}
        renderItem = {renderItem}
        ListFooterComponent = {
          <View style = {styles.centro}>
            <Pressable style = {styles.btn} onPress = {() => enviaResult()} >
                <Text style = {styles.txtBtn}>Finalizar Teste</Text>
            </Pressable> 
          </View>}
        />

      )}

      

          

        

        
      
    </View>
    
    

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

 
  ViewLoading: {
    height: vh(80),
    width: vw(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   },
  

  btn:{
    marginBottom: vh(10),
    width: vw(60),
    height: vh(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(8),
    backgroundColor: '#D9D9D9',
  },

  txtBtn: {
    fontSize: 18
  },

  centro:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(10),
  },

});
  
