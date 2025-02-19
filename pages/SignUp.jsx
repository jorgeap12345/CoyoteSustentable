import logoSus1 from "../assets/images/logoSus1.png"
import { View, ScrollView, Image, StyleSheet, Text, Linking} from "react-native"
import { LargeInput, MultOptionInput, SmallInput } from "../components/InputFields";
import { ButtonLarge } from '../components/Buttons';
import { StatusBar } from 'expo-status-bar';
import { GlobalStyles } from '../GlobalStyles';
import { useForm } from 'react-hook-form';


export function SignUp(){

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

    const onSubmit = (data) => console.log(data)

    return(
    <View style={styles.pageContainer}>
        <Image source={logoSus1} style={styles.logoSustentabilidad}/>

        <View style={styles.titleContainer}>
            <Text style={[GlobalStyles.textLarge, GlobalStyles.greenText]}>
                ¡INICIA SESIÓN!
            </Text>
        </View>

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
            
        </ScrollView>

        <View style={styles.buttonsContainer}>
                        <ButtonLarge buttonLabel='INICIAR SESION' pressHandler={handleSubmit(onSubmit)}/>
                        
                    <View>
                        <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, GlobalStyles.regular, {letterSpacing: 0}]}>
                                ¿No tienes cuenta?
                        </Text>
                        <Text onPress={() => Linking.openURL('http://google.com')} style={[GlobalStyles.textMedium, GlobalStyles.greenText]}>
                            REGISTRATE
                        </Text>
                    </View>
            </View>
        
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
        gap: 10,
        justifyContent: 'flex-end',
        paddingVertical: 35,
        paddingHorizontal: 25
    },
})