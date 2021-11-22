import React, {useState, useEffect} from "react";
import FreeAccount from "./FreeAccount";
import AuthAccount from "./AuthAccount";
import firebase  from 'firebase';

export default function Products(){

  const [login, setLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) =>{
        if(!user) { 
          setLogin(false)
        } else{
          console.log(user);
          setLogin(true);
          console.log({login});
          }
      });   
     }, []);

  return(login ? <AuthAccount/> : <FreeAccount/>);
};

