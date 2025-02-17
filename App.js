import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { GlobalStyles } from "./GlobalStyles";
import { Text, View, Button, TextInput } from 'react-native';
import { ButtonLarge, ButtonQRScreen, ButtonThin } from './components/Buttons';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller  } from 'react-hook-form';
import { LargeInput, SmallInput } from './components/InputFields';

export default function App() {

  //An "expo-font" hook. Defines if a font is loaded
  const [loaded, error] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  //BasicTemplate for handling user input.
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Nombre: "",
      Apellido: "",
    },
  })
  
  const onSubmit = (data) => console.log(data)

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
        <ButtonLarge buttonLabel='INICIAR SESIÓN'/>
        <ButtonLarge buttonLabel='REGISTRARSE' buttonColor='rgba(0, 152, 74, 1)'/>
        <ButtonThin buttonLabel='EDITAR PERFIL'/>
        <ButtonQRScreen buttonLabel='Permitir el acceso a la Camara'/>


        <LargeInput control={control} errors={errors} field='Nombre'/>

        <SmallInput control={control} errors={errors} isRequired={false} field='Apellido'/>
      
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />


        <StatusBar style="auto" />
      
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
