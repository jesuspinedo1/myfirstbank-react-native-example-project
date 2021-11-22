import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Account from "../screens/account/Account";
import Login from "../screens/account/Login";
import SignUp from "../screens/account/Signup";

const Stack = createStackNavigator();

export default function AccountStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{title: 'Cuenta', headerShown: false}} name="profile_account" component={Account}/>
      <Stack.Screen options={{title: 'Iniciar Sesión', headerShown: false}} name="login" component={Login}/>
      <Stack.Screen options={{title: 'Registro', headerShown: false}} name="signup" component={SignUp}/>
    </Stack.Navigator>
  );
};