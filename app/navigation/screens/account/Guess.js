import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

export default function Guess(){

  const navigation = useNavigation();

  return(
    <View
    style={styles.mainView}
    > 
      <Image
          source={require("../../../../assets/img/myfirstbank_logo.png")}
          resizeMode="contain"
          style={styles.image}
      />
      <Text>Bienvenido a tu primer banco.</Text>
      <View
      style={styles.rowButtons}
      >
        <Button
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            title="Iniciar Sesión"
            onPress={()=> navigation.navigate("login")}
        />
        <Button
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            title="Registrarte"
            onPress={()=> navigation.navigate("signup")}
        />
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