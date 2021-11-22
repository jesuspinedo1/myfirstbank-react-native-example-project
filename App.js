/*
Autor: Jesus Pinedo
21/11/2021
Todos los derechos reservados
*/
import React from 'react';
import Navigation from './app/navigation/Navigation';
import {firebaseApp} from "./app/utils/firebase";
import * as firebase  from 'firebase';
import {decode, encode} from "base-64";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer', 'Warning: ...']);

if(!global.btoa) global.btoa = encode;
if(!global.atob) global.atob = decode;

export default function App() {
  return (<Navigation></Navigation>);
}
