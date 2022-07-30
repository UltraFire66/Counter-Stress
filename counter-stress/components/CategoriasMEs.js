import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';



export default function EntradaDiario(props) {

 

    return (

      <View style = {styles.container}>
        <Pressable
         style = {{

          height: '12vh',
          width: '80vw',
          backgroundColor: props.cor,
          borderRadius: '5vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#171717',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.5,
          border: "3px solid",
          borderColor: props.corBorda,
          }}>
          <Text style = {styles.escrita} >{props.escrita}</Text>
        </Pressable>
      </View>

    )

}

const styles = StyleSheet.create({

  container: {
   
   padding: '2.3vh'
    
  },

  escrita:{

    color: 'white',
    fontSize: '7vw'

  }

});