import React , {useState,useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import EntradaDiario from '../components/EntradaDiario';
import Axios from 'axios';




const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];



export default function testeFlatList () {


  const [entradas,setEntradas] = useState({});

  useEffect (() => {
    Axios.post("https://counterstress.glitch.me/diario", {id: 1
       }).then((response) => {
       if(response.data.message == 'Nao encontrado'){
           alert('Email ou Senha incorretos!!');
       }
       else{
           setEntradas(response);
       }
  });
  
  },[]);

  const renderItem = ({ item }) => (
    <EntradaDiario data = {item.data} escrita = {item.escrita}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={entradas.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

