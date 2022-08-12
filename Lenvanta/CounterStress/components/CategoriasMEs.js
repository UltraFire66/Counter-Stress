import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { vh, vw } from 'react-native-expo-viewport-units';


export default function CategoriasMEs(props) {

 const navigation = useNavigation();

    return (

      <View style = {styles.container}>
        <Pressable
         style = {{

          height: vh(12),
          width: vw(80),
          backgroundColor: props.cor,
          borderRadius: vw(5),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#171717',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.5,
          borderWidth: 3,
          borderColor: props.corBorda,
          }} onPress = {() => navigation.navigate(props.navegarPara)}>
          <Text style = {styles.escrita} >{props.escrita}</Text>
        </Pressable>
      </View>

    )

}

const styles = StyleSheet.create({

  container: {
   marginTop: vh(3),
   padding: vh(2.3)
    
  },

  escrita:{

    color: 'white',
    fontSize: vw(7)

  }
 
});