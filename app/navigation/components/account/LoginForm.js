import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {View, StyleSheet, Text} from "react-native";
import {Input, Button, Icon} from "react-native-elements";
import { validateEmail } from "../../../utils/validations";
import {isEmpty} from "lodash";
import firebase from "firebase";


export default function LoginForm(){

  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const [showLoading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const onChanging = (value, type) =>{
      setFormData({...formData, [type]: value})   
  };

  const onHandleSubmit= async()=>{
    setError({});
    if(isEmpty(formData.email)){
      setError({
        email: "Ingrese su correo"
      });
    } else if(!validateEmail(formData.email)){
      setError({
        email: "El correo ingresado no es válido"
      });
    }
     else if(isEmpty(formData.password)){
      setError({
        password: "Ingrese su contraseña"
      });
    } else {
      setLoading(true);
      firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
      .then( res => {
        if(res !== null){
          setLoading(false);
          console.log("Ingreso exitoso");
              navigation.navigate("profile_account");       
        }
      })
      .catch(error => {
        setLoading(false);
        if(error.code === "auth/wrong-password"){ alert("Usuario o contraseña incorrectos");}
        else if(error.code === "auth/user-not-found"){alert("Correo no se encuentra registrado");}
        else{alert("Error al iniciar sesión: Intente más tarde");
        console.log(error);
      }
      });
    }


  }

  function defaultFormValue(){
    return{
      email: "",
      password: "",
    };
  };

  return(
    <View style={styles.formContainer}>
   
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        onChange={e => onChanging(e.nativeEvent.text, "email")}
        errorMessage={error.email}
        rightIcon={
            <Icon
              type="material-community"
              name="at"
              iconStyle={styles.iconRight}
            />
          }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        onChange={e => onChanging(e.nativeEvent.text, "password")}
        errorMessage={error.password}
        password={true}
        secureTextEntry={!showPassword}
        rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-off" : "eye-outline"}
              iconStyle={styles.iconRight}
              onPress={()=> setShowPassword(!showPassword)}
            />
          }
      />
      <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        title="Iniciar"
        disabledTitleStyle={styles.btnTextDisabled}
        disabled={disableButton}
        onPress={onHandleSubmit}
        loading={showLoading}
      />

      <Text style={{marginTop: 35, fontSize: 12, textAlign: "center"}}>¿Aún no te has registrado?</Text>
      <Text onPress={()=> navigation.navigate("signup")} style={{marginTop: 5, fontSize: 16, textAlign: "center", color: "#ef5777", fontWeight: "bold"}}>Registrarme</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  input: {
    width: 250,
    marginTop: 4
  },
  btnStyle: {
    backgroundColor: "#ef5777",
    marginTop: 10,
    borderColor: "#ef5777",
    borderWidth: 2,
    borderRadius: 10,
    elevation: 2
  },
  btnTextDisabled: {
    color: "#ef5777"
  },
  btnContainer: {
    width: 150,
    
  },
  iconRight: {
    color: "#c1c1c1"
  }
});