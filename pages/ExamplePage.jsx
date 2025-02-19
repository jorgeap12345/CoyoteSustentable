import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import { ButtonLarge, ButtonQRScreen, ButtonThin } from '../components/Buttons';
import { useForm } from 'react-hook-form';
import { LargeInput, MultOptionInput, SmallInput } from '../components/InputFields';
import { DataField } from '../components/DataFields';

export default function ExamplePage() {



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
  

  return (
    <>
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
    </>
  );
}
