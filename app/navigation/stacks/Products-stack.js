import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Current from "../screens/products/Current";
import Saving from "../screens/products/Saving";
import Products from "../screens/products/Products";

const Stack = createStackNavigator();

export default function ProductStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{title: 'Mis productos', headerShown: false}} name="profile_products" component={Products}/>
      <Stack.Screen options={{title: 'Cuenta de Ahorro', headerShown: false}} name="saving" component={Saving}/>
      <Stack.Screen options={{title: 'Cuenta Corriente', headerShown: false}} name="current" component={Current}/>
    </Stack.Navigator>
  );
};