import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { vh, vw } from 'react-native-expo-viewport-units';


export default function TopBar(props) {


    return (

      <View style = {styles.container}>
        
        <View style = {styles.quadrado}>
          <Pressable onPress = {props.voltaPara}>
            <AntDesign name = "arrowleft" size = {'160%'} style = {styles.seta}/>
          </Pressable>
        </View>
        <View style = {styles.quadrado}>
          <Pressable onPress = {props.perfil}>
            <AntDesign name = "user" size = {'160%'} style = {styles.user}/>
          </Pressable>
        </View>
          
      </View>

    )

}

const styles = StyleSheet.create({

   container: {
    height: vh(12),
    width: '100%',
    backgroundColor: '#C4BFE7',
   },

   quadrado: {

    height: '100%',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
 

  },

  seta: {

    alignSelf: 'flex-start',
    paddingLeft: vw(2)
  },

  user: {
    alignSelf: 'flex-end',
    paddingRight: vw(2)
  },


});