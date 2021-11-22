import React, {useState, useEffect} from "react";
import Guess from "./Guess";
import AuthUser from "./AuthUser";
import firebase  from 'firebase';

export default function Account(){

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

  return(login ? <AuthUser/> : <Guess/>);
};

