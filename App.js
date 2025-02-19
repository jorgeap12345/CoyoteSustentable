import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from './GlobalStyles';
import Dashboard from './pages/Dashboard'; // Importación de Dashboard

export default function App() {


  const [loaded, error] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  
  useEffect(() => { 
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.appContainer}>

        <Dashboard />   
        <StatusBar style="auto" />
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
