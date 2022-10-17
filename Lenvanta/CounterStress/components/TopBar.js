import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

import {useEffect,useState,useContext} from 'react';

import { AuthContext } from '../contexts/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { vh, vw } from 'react-native-expo-viewport-units';


export default function TopBar(props) {
  const {user} = useContext(AuthContext);
  const [psy,setPsy] = useState(false);

  useEffect (() => {
 
    if(user.data[0].flag.data[0] == 1){
      setPsy(true);
    }

    else{
      setPsy(false);
    }

  },[])
  
    
    return (
      <>
        {psy
        ?
        (<View style = {styles.containerPsy}/>)
        :
        (<View style = {styles.containerUser}/>)}
        
        

      </>
    )

}

const styles = StyleSheet.create({

   containerUser: {
    height: vh(12),
    width: vw(100),
    backgroundColor: '#C4BFE7',
    borderBottomWidth: 3,
    borderColor: 'white',
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-end',
   },

   containerPsy: {
    height: vh(12),
    width: vw(100),
    backgroundColor: '#78ABC6',
    borderBottomWidth: 3,
    borderColor: 'white',
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-end',
   },

});