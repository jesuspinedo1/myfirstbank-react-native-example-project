import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { firebaseApp } from "../../../utils/firebase";
import firebase, {firestore} from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

export default function AuthAccount(){
  
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    db.collection("accounts").limit(2).get().then((snap)=>{
    });
  }, [])

  return(
    <View
    style={styles.mainView}
    > 
      <Image
          source={require("../../../../assets/img/myfirstbank_logo.png")}
          resizeMode="contain"
          style={styles.image}
      />
      {/*Ahorro*/}
        <View
        style={{backgroundColor: "#fff", elevation: 3, borderRadius: 20, width: 250, padding: 12, marginTop: 20}}
        >
          <Text style={{fontWeight: "bold", color: "#ef5777", fontSize: 25}}> Ahorros</Text>
          <Text> Número de cuenta: 8711848-25</Text>
          <View 
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          >
          <Text> Saldo: </Text>
          <Text style={{fontWeight: "bold", color: "#ef5777", fontSize: 15}}> $3.811.158</Text>
          </View>
          
        </View>
      {/*Corriente*/}
      <View
        style={{backgroundColor: "#fff", elevation: 3, borderRadius: 20, width: 250, padding: 12, marginTop: 20}}
        >
          <Text style={{fontWeight: "bold", color: "#ef5777", fontSize: 25}}> Corriente</Text>
          <Text> Número de cuenta: 7811847-25</Text>
          <View 
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          >
          <Text> Saldo: </Text>
          <Text style={{fontWeight: "bold", color: "#ef5777", fontSize: 15}}> $43.721.187</Text>
          </View>
          
        </View>

      <View
      style={styles.rowButtons}
      >
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {
    height: 80,
    width: "100%",
    marginBottom: 20,
  },
  rowButtons: {
   flexDirection: "row",
   paddingHorizontal: 15
  },
  btnStyle: {
    backgroundColor: "#ef5777",
    margin: 15
  },
  btnContainer: {
    width: "50%"
  }
});