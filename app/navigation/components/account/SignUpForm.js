import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {View, StyleSheet, Text} from "react-native";
import {Input, Button, Icon} from "react-native-elements";
import { validateEmail } from "../../../utils/validations";
import {size, isEmpty} from "lodash";
import firebase from "firebase";


export default function SingUpForm(){

  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const [showLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
    }else if(isEmpty(formData.repeatPassword)){
      setError({
        repeatPassword: "Confirme su contraseña"
      });
    }else if(formData.repeatPassword !== formData.password){
      setError({
        repeatPassword: "Las contraseñas no coinciden",
        password: "Las contraseñas no coinciden"
      });
    }else if(size(formData.password)<6){
      setError({
        repeatPassword: "La contraseña debe tener por lo menos 6 caracteres"
      });
    } else{
      await firebase.auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then( res =>{
          alert("Registro exitoso");
          firebase.auth().currentUser.sendEmailVerification();
      })
      .catch(error => {
        setLoading(false);
        if(error.code === "auth/email-already-in-use"){
          alert("Correo ya está en uso");
        } else{
          alert("Error: "+error.message);
        }      
      });
    }

  }

  function defaultFormValue(){
    return{
      email: "",
      password: "",
      repeatPassword: ""
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
      <Input
        placeholder="Confirmar Contraseña"
        containerStyle={styles.input}
        onChange={e => onChanging(e.nativeEvent.text, "repeatPassword")}
        errorMessage={error.repeatPassword}
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


      <Text onPress={()=> navigation.navigate("login")} style={{marginTop: 25, fontSize: 16, textAlign: "center", color: "#ef5777", fontWeight: "bold"}}>Iniciar</Text>
      <Text style={{marginTop: 5, fontSize: 12, textAlign: "center"}}>¿Ya posees una cuenta?</Text>

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