import { AppProvider } from "../context/AppContext";
import { Stack } from "expo-router";

import { GlobalStyles } from "../GlobalStyles";
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {

   return (
         
            <SafeAreaProvider>
               
               <AppProvider>

                  <Stack 
                  screenOptions={{
                     // Hide the header for all other routes.
                     headerShown: false,
                  }}
                  />


                  </AppProvider>
                  
            </SafeAreaProvider>
         
   );
}
