import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { GlobalStyles } from "./GlobalStyles";
import { Text, View, Button, TextInput } from 'react-native';
import { ButtonLarge, ButtonQRScreen, ButtonThin } from './components/Buttons';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller  } from 'react-hook-form';
import { LargeInput, MultOptionInput, SmallInput } from './components/InputFields';
import RNPickerSelect from 'react-native-picker-select';
import { DataField } from './components/DataFields';

export default function App() {

  //An "expo-font" hook. Defines if a font is loaded
  const [loaded, error] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  //BasicTemplate for handling user input fields.
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

        <MultOptionInput control={control} errors={errors} 
        options={[
          { label: "OPTION 1", value: "value1"},
          { label: "OPTION 2", value: "value2"},
          { label: "OPTION 3", value: "value3"}
        ]}/>

      
        <ButtonLarge buttonLabel='Subir informacion' pressHandler={handleSubmit(onSubmit)}/>

        <DataField fieldName="DATO:" fieldContents="Probably"/>


        <StatusBar style="auto" />
      
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
