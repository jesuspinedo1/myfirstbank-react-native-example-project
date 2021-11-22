import React from "react";
import {View, ScrollView, Text, StyleSheet, Image} from "react-native";
import SingUpForm from "../../components/account/SignUpForm";



export default function Login(){
  
  return(
    <ScrollView
    style={{flex: 1, backgroundColor: "#fff"}}
    >
      <View
      style={styles.mainView}
      >
        <Image
            source={require("../../../../assets/img/myfirstbank_logo.png")}
            resizeMode="contain"
            style={styles.image}
        />
        <Text style={styles.title}>Registro de usuario</Text>
        <SingUpForm/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {
    height: 150,
    width: "100%",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ef5777"
  },
});