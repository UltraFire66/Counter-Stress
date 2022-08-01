import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import EntradaDiario from '../components/EntradaDiario';

var cor = 'red';
var escritaDiario = "eu não sei como o Caio consegue ser tão lindo e inteligente, que homem lindo ...";

var escritaDiario1 = "Dois dias se passaram e eu ainda não descobri, estou estudando mais ...";

var escritaDiario2 = "Após mais uma semana de estudos, concluo que o Caio é de fato o ser humano mais lindo do mundo ...";

export default function EscritaPerfil({navigation}) {

    return (

      <View style = {styles.container}>
       <View style = {styles.divAddNovaEntrada}>
        <View style = {styles.divMais}>
          <View style = {styles.barraVertical}></View>
          <View style = {styles.barraHorizontal}></View>
        </View>

        <Text style = {styles.escritaAdd}>Adicionar novas entradas no diário</Text>

       </View>
       <View style = {styles.barrinha}></View>

{/*======================== Parte superior de ADD entrada ===================== */}

      <EntradaDiario data = {"21/05/2022"} escrita = {escritaDiario}/>
      <EntradaDiario data = {"23/05/2022"} escrita = {escritaDiario1}/>
      <EntradaDiario data = {"30/05/2022"} escrita = {escritaDiario2}/>
      </View>

    )

}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },

  divAddNovaEntrada: {
    height: '10vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },

  barrinha: {

    backgroundColor: 'black',
    height: '0.3vh',
    opacity: 0.4,
    width: '89vw',
    marginBottom: '2vh'

  },

  divMais: {
    marginLeft: '5vw',
    height: '3vh',
    width: '3vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  barraHorizontal: {

    height: '0.3vh',
    backgroundColor: '#8E4FCD',
    width: '8vw',
    position: 'absolute',
  },

  barraVertical: {
    height: '8vw',
    backgroundColor: '#8E4FCD',
    width: '0.3vh',
  },

  escritaAdd: {

    fontSize: '6vw',
    textAlign: 'center',
    width: '50vw',
    marginLeft: '15vw',
    color: '#8E4FCD'
  },


//========================== Parte superior de ADD entrada====================



});