import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import firebase from "firebase";
import {Input, Button, Icon} from "react-native-elements";
import * as Location from 'expo-location';
import axios from "axios";

export default function AuthUser(){

  const [userInfo, setUserInfo] = useState(null);

  const currentUser = async() => {
    const user = await firebase.auth().currentUser;
    setUserInfo(user);
  }

  //Obtener geoLocalización
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    // lamentablemente no pude ejecutar la consulta del clima por que el plan básico no me dejaba consultar el clima más de 60 veces por hora y mi cuenta fue bloqueda
      let locations = await Location.getCurrentPositionAsync({});
      console.log(locations);
      if (locations){
      await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${locations.coords.latitude}&lon=${locations.coords.longitude}&units=metric&appid=3f14b7e1a9dfa22606ee266ca40241a3&lang=es`)
      .then((res)=>{
      let description = res.data.weather.map(item => item.description)
      console.log(description);
      });}

    })();
    
  }, []);

    //Obtener usuario
    useEffect(() => { 
      currentUser();
    }, [userInfo]);


  return(
    <View
    style={styles.mainView}
    >
      <View style={styles.wheatherView}>
      <Icon
      type="material-community"
      name="weather-cloudy"
      />
      <Text> Nublado</Text>
    </View>
      <Image
          source={require("../../../../assets/img/myfirstbank_logo.png")}
          resizeMode="contain"
          style={styles.image}
      />
      {userInfo ? <Text style={{textAlign: "center", fontWeight:"bold"}}>Bienvenido: {userInfo.email}</Text>: null}
      <Button 
        buttonStyle={styles.btnCloseSession}
        title="Cerrar sesión" onPress={() => firebase.auth().signOut()}
        titleStyle={styles.btnCloseSessionText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }, btnCloseSession: {
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E3E3E3",
    borderBottomWidth: 1,
    borderBottomColor: "#E3E3E3",
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 0.5
  },
  btnCloseSessionText: {
    color: "#ef5777"
  },
  image: {
    height: 200,
    width: "100%",
    marginBottom: 20,
  },
  wheatherView: {
    width: 280,
    marginTop: 40,
    elevation: 2,
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#F4FEFF",
    borderRadius: 10,
    alignContent: "flex-start",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});