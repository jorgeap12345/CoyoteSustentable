import React, { createContext, useState, useContext, useEffect } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

   //Should globally manage the state of the active work day
   //If kept in backende, we should set this to the same when logging in
   const [activeWorkDay, setActiveWorkDay] = useState(false)

   const [isInLogin, setIsInLogin] = useState(true)
   
   //An "expo-font" hook. Defines if a font is loaded
   const [loaded, error] = useFonts({
      'Roboto': require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
   });
   
   //Awaits for the font to load to show the app, all children inherit loaded fonts, AKA. no need to import in each file
   useEffect(() => { 
      if (loaded || error) {
         SplashScreen.hideAsync();
      }
   }, [loaded, error]);
   
   if (!loaded && !error) {
      return null;
   }

  return (
    <AppContext.Provider value={{ activeWorkDay, setActiveWorkDay, isInLogin, setIsInLogin}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
