import * as React from 'react';
import {

  View,
  StyleSheet,

} from 'react-native';

import TopBar from '../components/TopBar';

export default function Home({navigation}) {

    return (

      <View style = {styles.container}>
        <TopBar voltaPara = {navigation.navigate("Login")} perfil = {navigation.navigate("Home")} />
      </View>

    )

}

const styles = StyleSheet.create({

   container: {
    
  },
 
})