import React, {createContext,useState} from "react";

import { useNavigation } from "@react-navigation/native";
import Axios from 'axios';
export const AuthContext = createContext({});

function AuthProvider ({children}){

    const [user,setUser] = useState({});
    const navigation = useNavigation();

    function Login(email,senha){
        Axios.post("https://counterstress.glitch.me/login", {email: email , senha: senha
        }).then((response) => {
        if(response.data.message == 'Nao encontrado'){
            alert('Email ou Senha incorretos!!');
        }
        else{
            setUser(response);
         
            navigation.navigate('Tab');
        }
  });
    }

    function Edit(email,nome,nomeUsu,id){
        Axios.post("https://counterstress.glitch.me/edit", {email: email , 
        nome : nome, id : id, nomeUsu: nomeUsu
        }).then((response) => {
        if(response.data.message == 'Nao encontrado'){
            alert('erro ao editar perfil');
            navigation.navigate('PerfilUsuario')
        }
        else{
            setUser(response);
            alert('Operação feita com sucesso');
            navigation.navigate('PerfilUsuario');
        }
  });
    }

    return (
        <AuthContext.Provider value={{user, Login,Edit}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;