/*
Autor: Jesus Pinedo
21/11/2021
Todos los derechos reservados
*/
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";
import AccountStack from "./stacks/Account-stack";
import ProductStack from "./stacks/Products-stack";

const BottomTab = createBottomTabNavigator();

export default function Navigation(){
  return(
    <NavigationContainer>
    <BottomTab.Navigator
        initialRouteName="account"
        tabBarOptions={{
        inactiveTintColor: "#fff",
        activeTintColor: "#ef5777",
        activeBackgroundColor: "#fff",
        inactiveBackgroundColor: "#ef5777",
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color),
            tabBarLabelStyle: {
              fontSize: 14
            },
            headerStyle: {
              backgroundColor: '#ef5777',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        })}
    >
      <BottomTab.Screen options={{ title: "Usuario"}} name="account" component={AccountStack}/>
      <BottomTab.Screen options={{ title: "Mis Cuentas"}} name="products" component={ProductStack}/>
    </BottomTab.Navigator>
    </NavigationContainer>
  ); 
};

function screenOptions (route, color) {
  let iconName;

  switch (route.name) {
    case "account":
        iconName = "account-outline";
        break;
    case "products":
        iconName = "piggy-bank";
        break;
    default:
      break;
  }

  return(<Icon type="material-community" name={iconName} size={24} color={color}></Icon>);
};
