import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';


import { vh, vw } from 'react-native-expo-viewport-units';


export default function SubCategoriasMEs(props) {

 

    return (

      <View style = {styles.container}>
        <Pressable
         style = {{

          height: vh(16),
          width: vw(45),
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
          }}>
          <Text style = {styles.escrita}>{props.escrita}</Text>
        </Pressable>
      </View>

    )

}

const styles = StyleSheet.create({

  container: {
   marginTop: vh(3),
   
  },

  escrita:{

    color: 'white',
    fontSize: vw(4)

  }
 
});