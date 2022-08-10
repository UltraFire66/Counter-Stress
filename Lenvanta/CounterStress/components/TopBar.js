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
        

          
      </View>

    )

}

const styles = StyleSheet.create({

   container: {
    height: vh(12),
    width: vw(100),
    backgroundColor: '#C4BFE7',
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-end',
   },

});