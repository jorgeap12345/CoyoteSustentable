import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { GlobalStyles } from "../GlobalStyles";
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ExamplePage from '../pages/ExamplePage';
import Dashboard from '../pages/Dashboard'; // Importación de Dashboard
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import Qrscanner from '../pages/Qrscanner';
import { useAppContext } from "../context/AppContext";
import { View } from "react-native";


export default function App() {


   const {isInLogin, setIsInLogin} = useAppContext()

    //Main area where our app is rendered
    //SafeAreaProvider and a SafeAreaView should encapsule all the app, they provide automatic padding considering Notches or similar hardware/software obstructions to the UI. ONLY USE "style={GlobalStyles.appContainer}" HERE!!!
  return (

      <>
        <Dashboard setIsInLogin={setIsInLogin}/>
      </>

        
      
  );
}