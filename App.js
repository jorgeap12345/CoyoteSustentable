import { StatusBar } from 'expo-status-bar';
import { useEffect,  } from 'react';
import { useFonts } from 'expo-font';
import { GlobalStyles } from "./GlobalStyles";
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ExamplePage from './pages/ExamplePage';


export default function App() {

    //An "expo-font" hook. Defines if a font is loaded
    const [loaded, error] = useFonts({
      'Roboto': require('./assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
    });

      //Awaits for the font to load to show the app, all children inherit loaded fonts
  useEffect(() => { 
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

    //Main area where our app is rendered
    //SafeAreaProvider and a SafeAreaView should encapsule all the app, they provide automatic padding considering Notches or similar hardware/software obstructions to the UI.

  return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.appContainer}>

        <Text>Open up App.js to start working on your app!</Text>

        <ExamplePage/>  


        <StatusBar style="auto" />
      
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
