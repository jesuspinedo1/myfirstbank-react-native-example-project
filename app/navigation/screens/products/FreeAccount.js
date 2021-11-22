import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

export default function FreeAccount(){

  return(
    <View
    style={styles.mainView}
    > 
      <Image
          source={require("../../../../assets/img/myfirstbank_logo.png")}
          resizeMode="contain"
          style={styles.image}
      />
      <Text style={{textAlign: "center", marginHorizontal: 20}}>Bienvenido a tu primer banco, inicia sesión para visualizar tus cuentas</Text>
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
    height: 200,
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