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
    
    return (
        <View style = {{marginTop: vh(6),}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {styles.fundo}>
              <Text style = {styles.escrita}>Nota da categoria Ansiedade:</Text>
            </View>
            <View style = {styles.fundo}>
              <Text style = {styles.escritaV}>{route.params.ansiedade}</Text>
            </View>

            <View style = {styles.fundo}>
              <Text style = {styles.escrita}>Nota da categoria Depressão:</Text>
            </View>
            <View style = {styles.fundo}>
              <Text style = {styles.escritaV}>{route.params.depressao}</Text>
            </View>

            <View style = {styles.fundo}>
              <Text style = {styles.escrita}>Nota da categoria Estresse:</Text>
            </View>
            <View style = {styles.fundo}>
              <Text style = {styles.escritaV}>{route.params.estresse}</Text>
            </View>

            <View style = {styles.fundo}>
              <Text style = {styles.escrita}>Sua nota total no teste:</Text>
            </View>
            <View style = {styles.fundo}>
              <Text style = {styles.escritaV}>{route.params.total}</Text>
            </View>

            <View style = {styles.fundo}>
              <Text style = {{fontSize: vh(3),textAlign: 'justify',fontWeight: "bold",marginTop: vh(4),marginBottom: vh(2)}}>
                SISTEMA DE NOTAS
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

  escritaV: {
    fontSize: vh(5),
    textAlign: 'justify',
    fontWeight: "bold",
    color: '#8E4FCD',
    marginBottom: vw(5)
    
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