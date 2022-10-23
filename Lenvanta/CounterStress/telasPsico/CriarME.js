import * as React from 'react';
import { useState, useContext } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
  ScrollView
} from 'react-native';

import { AuthContext } from '../contexts/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';

import Feather from "react-native-vector-icons/Feather";
import TopBar from '../components/TopBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { vh, vw } from 'react-native-expo-viewport-units';
import Axios from 'axios';
import Icone from "../assets/standardProfileIcon.png";


export default function CriarDiario({navigation}) {

  const {user} = useContext(AuthContext)
 

  const [titulo, setTitulo] = useState("");
  const [anota, setAnota] = useState("");

  const [ref1,setRef1] = useState('');
  const [ref2,setRef2] = useState(null);
  const [ref3,setRef3] = useState(null);
  const [ref4,setRef4] = useState(null);
  const [ref5,setRef5] = useState(null);

  const [checked, setChecked] = React.useState('');


    const CriarME = () => {
        Axios.post("https://counterstress.glitch.me/RegistrarME",
        {

          idUser: user.data[0].idUser,
          title: titulo,
          apertado: checked,
          txt: anota,
          ref1: ref1,
          ref2: ref2,
          ref3: ref3,
          ref4: ref4,
          ref5: ref5, 

        });
        navigation.navigate('Login');
    }


    return (
        <>
        <TopBar/>
        <Pressable style = {styles.perfil} onPress = {() => {navigation.navigate("PerfilUsuario")}}>
  
          <AntDesign name = "user" size = {35} />
  
        </Pressable>

        <LinearGradient
        style={styles.fundo}
        start={{x: 0,y: 0}}
        end={{x: 0, y: 1}}
        colors={["#225ED2", "#78ABC6"]}>

        <View style = {styles.container2}>
          <TextInput style={styles.escreverT} placeholder="Título"
          onChangeText = {(value) => setTitulo(value)} value = {titulo}/>
        </View>
        
            
        </LinearGradient>

        

        
        <ScrollView>

        <View style = {styles.frente}>
          <RadioButton
          value="first"
          status={ checked === 'primeiro' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('primeiro')}
          />
          <Text style = {styles.escrita}>Meditação</Text>
        </View>

        <View style = {styles.frente}>
          <RadioButton
          value="first"
          status={ checked === 'segundo' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('segundo')}
          />
          <Text style = {styles.escrita}>Planejamento</Text>
        </View>

        <View style = {styles.frente}>
          <RadioButton
          value="first"
          status={ checked === 'terceiro' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('terceiro')}
          />
          <Text style = {styles.escrita}>Autoconhecimento</Text>
        </View>

        <View style = {styles.frente}>
          <RadioButton
          value="first"
          status={ checked === 'quarto' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('quarto')}
          />
          <Text style = {styles.escrita}>Respiração</Text>
        </View>


        <Text style = {styles.topico2}>Texto da ME:</Text>
        <View>
          
            <TextInput style={styles.escrever} 
            onChangeText = {(value) => setAnota(value)} value = {anota}/>
          
        </View>

        <Text style = {styles.topico}>Referêcias:</Text>
        
        <View style = {styles.anota}>
          
            <TextInput style={styles.escreverRef} 
            onChangeText = {(value) => setRef1(value)} value = {anota}/>
          
        </View>

        
        


        {ref2 != null ?
        
        (<View style = {styles.anota}>
          
          <TextInput style={styles.escreverRef} 
          onChangeText = {(value) => setRef2(value)} value = {anota}/>
        
         </View>
         
         )
         
          
        : null}

        {ref3 != null ?
        
        (<View style = {styles.anota}>
          
          <TextInput style={styles.escreverRef} 
          onChangeText = {(value) => setRef3(value)} value = {anota}/>
        
         </View>)
        
        : null}

        {ref4 != null ?
        
        (<View style = {styles.anota}>
          
          <TextInput style={styles.escreverRef} 
          onChangeText = {(value) => setRef4(value)} value = {anota}/>
        
         </View>)
        
        : null}

        {ref5 != null ?
        
        (<View style = {styles.anota}>
          
          <TextInput style={styles.escreverRef} 
          onChangeText = {(value) => setRef5(value)} value = {anota}/>
        
         </View>)
        
        : null}

        {ref2 == null ?
        
        (
       
        
         <Pressable style = {styles.btnRef} onPress = {()=>{setRef2('')}}>
           <Text style = {styles.txtBtn}>adicionar referência</Text>
         </Pressable>
         
         

         
         )

        :null}

        {ref3 == null && ref2 != null ?
        
        (
        <View style ={styles.botoes}>
        <Pressable style = {styles.btnRef} onPress = {()=>{setRef3('')}}>
           <Text style = {styles.txtBtn}>adicionar referência</Text>
         </Pressable>
         
         <Pressable style = {styles.btnRef} onPress = {()=>{setRef2(null)}}>
           <Text style = {styles.txtBtn}>remover</Text>
         </Pressable>

         </View>

         )

        :null}

        {ref4 == null && ref2 != null && ref3 != null ?
        
        (
         <View style = {styles.botoes}>

          <Pressable style = {styles.btnRef} onPress = {()=>{setRef4('')}}>
            <Text style = {styles.txtBtn}>adicionar referência</Text>
          </Pressable>

          <Pressable style = {styles.btnRef} onPress = {()=>{setRef3(null)}}>
            <Text style = {styles.txtBtn}>remover</Text>
          </Pressable>

         </View>)

        :null}

        {ref5 == null && ref2 != null && ref3 != null && ref4 != null ?
        
        (
          <View style = {styles.botoes}>
        <Pressable style = {styles.btnRef} onPress = {()=>{setRef5('')}}>
           <Text style = {styles.txtBtn}>adicionar referência</Text>
         </Pressable>
         
         <Pressable style = {styles.btnRef} onPress = {()=>{setRef4(null)}}>
            <Text style = {styles.txtBtn}>remover</Text>
          </Pressable>

         </View>
         )

        :null}

      {ref5 != null && ref2 != null && ref3 != null && ref4 != null ?
        
        (
          
        
         <Pressable style = {styles.btnRef} onPress = {()=>{setRef5(null)}}>
            <Text style = {styles.txtBtn}>remover</Text>
          </Pressable>

         
         )

        :null}

        <View style = {styles.botaoConfirm}>
          <Pressable style = {styles.btn} onPress = {CriarME}>
            <Text style = {styles.txtBtn}>Confirmar</Text>
          </Pressable>
        </View>
        </ScrollView>
      </>

    )

}

const styles = StyleSheet.create({

  fundo:{
    marginBottom: vh(2),
  },

  escrita:{
    fontSize: vh(2.8),
    left: vw(3),
    marginTop: vh(0.4)
  
  },

    frente:{
      flexDirection: "row",
      display: "flex",
      alignItems: 'flex-start',
      marginLeft: vw(3),
    },

    telaPerfil:{
        alignItems: 'center',
    },

    usuario: {
        borderRadius: vh(9),
        display: "flex",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
      },
    
      circulo: {
        height: vh(18),
        width: vh(18),
        marginBottom: vh(5),
        marginTop: vh(5),
      },
  
  perfil: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: vw(85),
  },

  voltar: {
    position: 'absolute',
    marginTop: 27,
    marginLeft: vw(3),
  },

   container: {
    height: vh(15),
    width: vw(100),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  container2: {
    height: vh(15),
    width: vw(100),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  escreverT: {
   
    height: vh(9),
    minWidth: vw(10),
    fontSize: vw(7.5),
    textAlign: 'left',
    marginLeft: vw(5),
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  },

  topico: {
    fontSize: vw(5),
    marginLeft: vw(12.5),
    marginTop: vh(3),
  },

  topico2: {
    fontSize: vw(5),
    marginLeft: vw(12.5),
    marginTop: vh(9),
  },

  
  botaoConfirm:{
    alignItems: 'center',
    marginRight: vw(8),
    marginBottom: vh(3),
  },

  divTexto: {
    
    
    
    marginTop: vh(4),
    
    display: 'flex',
    border: 'solid 1px black',

    alignItems: 'center',
    justifyContent: 'center',
  },

  escrever: {
    backgroundColor: '#E5E5E5',
    borderRadius: vw(6),
    marginLeft: vw(11),
    width: vw(79),
    height: vh(25),
    fontSize: vw(4.5),
    textAlign: 'justify',
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  escreverRef: {
    backgroundColor: '#E5E5E5',
    borderRadius: vw(6),
    marginLeft: vw(11),
    marginVertical: vh(2),
    width: vw(79),
    height: vh(15),
    fontSize: vw(4.5),
    textAlign: 'justify',
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
    
  btn:{
    marginTop: vh(5),
    width: vw(60),
    height: vh(10),
    marginLeft: vw(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(8),
    backgroundColor: '#D9D9D9',
  },

  txtBtn: {
    fontSize: 18
  },

  trocarFotoPerfil: {

    backgroundColor: '#8E4FCD',
    height: vh(5),
    width: vh(5),
    borderRadius: vh(2.5),
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: vw(55),
    marginTop: vh(19)

  },

  botoes: {
    display: 'flex',
    flexDirection: 'row'
  },

  btnRef: {
    marginTop: vh(5),
    width: vw(32),
    height: vh(10),
    marginLeft: vw(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(8),
    backgroundColor: '#D9D9D9',
  }
});

