import logoSus1 from "../assets/images/logoSus1.png"
import { View, ScrollView, Image, StyleSheet, Text, Linking, Alert} from "react-native"
import { useState } from "react";
import { LargeInput, MultOptionInput, SmallInput } from "../components/InputFields";
import { ButtonLarge } from '../components/Buttons';
import { StatusBar } from 'expo-status-bar';
import { GlobalStyles } from '../GlobalStyles';
import { useForm } from 'react-hook-form';

function StudentSignUp({pageToggle}){

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Email: "",
            Password: "",
        },
    })

    const onSubmit = (data) => {
        console.log(data);
        Alert.alert("Success");
    };

    // This function now properly checks errors
    const TestError = () => {
        if (Object.keys(errors).length > 0) {
            let firstError = Object.values(errors)[0].message;
            Alert.alert("Error", firstError);
        }
    };

    return(
        <>
            <ScrollView style={GlobalStyles.scrollContainer}>
                <View style={styles.formContainer}>

                    <SmallInput field="NOMBRE COMPLETO" control={control} inputValue="Fullname"/>

                    <SmallInput field="CORREO INSTITUCIONAL" control={control} inputValue="Email"/>

                    <SmallInput field="CONFIRMAR CORREO" control={control} inputValue="EmailConfirm"/>

                    <SmallInput field="CONTRASEÑA" control={control} inputValue="Password"/>

                    <SmallInput field="CONFIRMAR CONTRASEÑA" control={control} inputValue="PasswordConfirm"/>

                    <MultOptionInput field="BECA A ASPIRAR" control={control} inputValue="Beca"
                    options={[
                        { label: "Beca Academica", value: "Beca Academica"},
                        { label: "Beca Socioeconomica", value: "Beca Socioeconomica"},
                        { label: "No me pagan lo suficiente para saber todas las becas", value: "Lol"}
                    ]} />
                </View>
                


                <View style={styles.buttonsContainer}>

                    <ButtonLarge buttonLabel='REGISTRARSE' pressHandler={handleSubmit(onSubmit, TestError)}/>
                            
                    <View style={{gap: 10}}>
                        <Text onPress={() => Linking.openURL('http://google.com')} style={[GlobalStyles.textSmall, GlobalStyles.greenText]}>
                            YA TENGO UNA CUENTA
                        </Text>

                        <Text onPress={pageToggle} style={[GlobalStyles.textSmall, GlobalStyles.greenText]}>
                            SOY VOLUNTARIO
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

function VolunteerSignUp({pageToggle}){

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Email: "",
            Password: "",
        },
    })

    const onSubmit = (data) => {
        console.log(data);
        Alert.alert("Success");
    };

    // This function now properly checks errors
    const TestError = () => {
        if (Object.keys(errors).length > 0) {
            let firstError = Object.values(errors)[0].message;
            Alert.alert("Error", firstError);
        }
    };

    return(
        <>
            <ScrollView style={GlobalStyles.scrollContainer}>
                <View style={styles.formContainer}>

                    <SmallInput field="NOMBRE COMPLETO" control={control} inputValue="Fullname"/>

                    <SmallInput field="CORREO" control={control} inputValue="Email"/>

                    <SmallInput field="CONFIRMAR CORREO" control={control} inputValue="EmailConfirm"/>

                    <SmallInput field="CONTRASEÑA" control={control} inputValue="Password"/>

                    <SmallInput field="CONFIRMAR CONTRASEÑA" control={control} inputValue="PasswordConfirm"/>

                </View>
                


                <View style={styles.buttonsContainer}>

                    <ButtonLarge buttonLabel='REGISTRARSE' pressHandler={handleSubmit(onSubmit, TestError)}/>
                            
                    <View style={{gap: 10}}>
                        <Text onPress={() => Linking.openURL('http://google.com')} style={[GlobalStyles.textSmall, GlobalStyles.greenText]}>
                            YA TENGO UNA CUENTA
                        </Text>

                        <Text onPress={pageToggle} style={[GlobalStyles.textSmall, GlobalStyles.greenText]}>
                            SOY ESTUDIANTE DE LA UPSRJ
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export function SignUp(){

    const [isStudentSignUpDisplayed, setDisplayedPage] = useState(true)

    const pageToggleHandler = (() => {setDisplayedPage(!isStudentSignUpDisplayed)})

    return(
    <View style={styles.pageContainer}>
        <Image source={logoSus1} style={styles.logoSustentabilidad}/>

        <View style={styles.titleContainer}>
            <Text style={[GlobalStyles.textLarge, GlobalStyles.greenText]}>
                ¡REGISTRATE!
            </Text>
        </View>

        {isStudentSignUpDisplayed ? <StudentSignUp pageToggle={pageToggleHandler}/> : <VolunteerSignUp pageToggle={pageToggleHandler}/>}
        
        <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
    pageContainer:{
        flex: 1,
        alignItems: 'center',
        gap: 10,
        width: "100%",
        height: "100%"
    },

    logoSustentabilidad:{
        minHeight: "auto",
        maxHeight: 130,
        width: 210
    },

    titleContainer:{
        alignSelf: 'stretch',
        minHeight: 85,
        padding: 10,
        paddingBottom: 25,
        alignItems: 'center',
        justifyContent: "center"
    },

    formContainer:{
        alignSelf: 'stretch',
        minHeight: 150,
        padding: 10,
        paddingBottom: 25,
        alignItems: 'center',
        justifyContent: "center",
        gap: 10
    },

    buttonsContainer: {
        alignSelf: 'stretch',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        gap: 12,
        justifyContent: 'flex-end',
        paddingVertical: 35,
        paddingHorizontal: 25
    },
})