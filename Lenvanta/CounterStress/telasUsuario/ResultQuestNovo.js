import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView
} from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';

import { useState,useEffect,useContext} from 'react';
import {AuthContext} from '../contexts/auth';

import Axios from 'axios';



export default function ResultQuest({route,navigation}) {
    
    const [cor,setCor] = useState("");
    const [mensagem,setMensagem] = useState("");


    useEffect(()=>{
        
        if(route.params.total <= 5){
            setCor("#308A15");
            setMensagem("Seus níveis de estresse estão normais!\n\n\nLembrando que este é apenas um teste, caso ache que precise de ajuda, recomendamos que procure um profissional");
            
        }

        else if(route.params.total <= 10){
            setCor("#E5C101");
            setMensagem("Seus níveis de estresse estão medianos!\n\n\nrecomendamos que busque ajuda profissional caso pense que precise.");
        }

        else {
            setCor("#FF2768");
            setMensagem("Seus níveis de estresse estão preocupantes!\n\n\nrecomendamos que busque ajuda profissional.");
        }

    },[])

    return (
        <View style = {{marginTop: vh(6),}}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style = {styles.fundo}>
              <Text style = {styles.escrita}>Sua nota total no teste:</Text>
            </View>
            <View style = {styles.fundo}>
              <Text style = {{ fontSize: vh(5),textAlign: 'justify',fontWeight: "bold",color: cor,marginBottom: vw(5)}}>{route.params.total}</Text>
            </View>

            <View style = {styles.fundo}>
              <Text style = {{fontSize: vh(3),textAlign: 'justify',fontWeight: "bold",marginTop: vh(4),marginBottom: vh(2)}}>
                {mensagem}
              </Text>
            </View>
            

            <View style = {styles.fundo2}> 
              <Pressable style={styles.botao}  onPress = {() => navigation.navigate('Tab')}>
                  <Text style={styles.escritaBotao}>Sair do resultado</Text>
              </Pressable>
            </View>
          </ScrollView>

        </View>

        
    )

}

const styles = StyleSheet.create({

  escrita: {
    fontSize: vh(3),
    textAlign: 'justify',
    fontWeight: "bold",
    
  },

   fundo:{ 
    marginTop: vh(2),
    alignItems: 'center',
    marginLeft: vw(6),
    marginRight: vw(6),
  },

  fundo2:{ 
    marginTop: vh(5),
    alignItems: 'center',
    marginLeft: vw(6),
    marginRight: vw(6),
  },

  botao: {
    backgroundColor: '#D9D9D9',
    width: vw(45),
    height: vh(9),
    borderRadius: vw(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40, 
    borderWidth: vw(0.4),

  },

  escritaBotao: {
    fontSize: vh(2.5),
  },

  
});