import * as React from 'react';
import {

  View,
  StyleSheet,

} from 'react-native';

import TopBar from '../components/TopBar';

export default function Home(props) {

    return (

      <View style = {styles.container}>
        <TopBar/>
      </View>

    )

}

const styles = StyleSheet.create({

   container: {
    
  },
 
})