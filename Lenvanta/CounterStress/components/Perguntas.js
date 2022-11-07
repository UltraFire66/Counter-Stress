import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';

import { RadioButton } from 'react-native-paper';

import { useState,useEffect,useContext} from 'react';
import {AuthContext} from '../contexts/auth';

import Axios from 'axios';

export default function Perguntas(props) {

  const {user} = useContext(AuthContext);
  const [checked, setChecked] = useState('fjbd');

   function checa (valor){
  
    enviaQuest(valor);
  }

  const enviaQuest = (resposta) => {
   
    Axios.post("https://counterstress.glitch.me/EnviaQuest",{
      categoria: props.categoria,
      peso: props.peso,
      resposta: resposta,
      idUser: user.data[0].idUser 
    });
    
  }

    return (
      <>
        <View style = {{marginTop: vh(2), marginBottom: vh(2),}}>
          <View style = {styles.fundo}>
            <Text style = {styles.escrita}>{props.pergunt}</Text>
          </View>

          <View style = {styles.botao}>
            <RadioButton
            value="nunca"
            status={ checked === 'nunca' ? 'checked' : 'unchecked' }
            onPress={() => {setChecked('nunca'),checa('nunca')}}
            />
            <Text style = {styles.escrita2}>Nunca</Text>
          </View>

          <View style = {styles.botao1}>
            <RadioButton
            value="asvezes"
            status={ checked === 'asvezes' ? 'checked' : 'unchecked' }
            onPress={() => {setChecked('asvezes'),checa('asvezes')}}
            />
            <Text style = {styles.escrita2}>Ás vezes</Text>
          </View>

          <View style = {styles.botao1}>
            <RadioButton
            value="frequent"
            status={ checked === 'frequent' ? 'checked' : 'unchecked' }
            onPress={() => {setChecked('frequent'),checa('frequent')}}
            />
            <Text style = {styles.escrita2}>Frequentemente</Text>
          </View>

          <View style = {styles.botao1}>
            <RadioButton
            value="quasesempre"
            status={ checked === 'quasesempre' ? 'checked' : 'unchecked' }
            onPress={() => {setChecked('quasesempre'),checa('quasesempre')}}
            />
            <Text style = {styles.escrita2}>Quase sempre</Text>
          </View>

          

        </View>

        
      </>
    )

}

const styles = StyleSheet.create({

  escrita: {
    fontSize: vh(3.5),
    textAlign: 'justify',
    fontWeight: "bold",
    
  },

  escrita2: {
    fontSize: vh(2.8),
    left: vw(3)
    
  },

   fundo:{ 
    marginTop: vh(2),
    alignItems: 'center',
    marginLeft: vw(6),
    marginRight: vw(6),
  },

  botao: {
    alignItems: 'flex-start',
    left: vw(8),
    marginTop: vh(5),
    display: "flex",
    flexDirection: "row",
  },

  botao1: {
    alignItems: 'flex-start',
    left: vw(8),
    marginTop: vh(2),
    display: "flex",
    flexDirection: "row",
  },

});