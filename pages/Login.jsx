import logoSus1 from "../assets/images/logoSus1.png"
import { View, ScrollView, Image, StyleSheet, Text, Linking} from "react-native"
import { LargeInput } from "../components/InputFields";
import { ButtonLarge } from '../components/Buttons';
import { StatusBar } from 'expo-status-bar';
import { GlobalStyles } from '../GlobalStyles';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";


export function Login({setIsInLogin}){

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

    const router = useRouter();

    return(
    <SafeAreaView style={GlobalStyles.appContainer}>
        <View style={styles.pageContainer}>
            <Image source={logoSus1} style={styles.logoSustentabilidad}/>

            <View style={styles.titleContainer}>
                <Text style={[GlobalStyles.textLarge, GlobalStyles.greenText]}>
                    ¡INICIA SESIÓN!
                </Text>
            </View>

            <ScrollView style={GlobalStyles.scrollContainer}>
                <View style={styles.formContainer}>
                    <LargeInput field="CORREO" control={control} inputValue="Email"/>
                    <LargeInput field="CONTRASEÑA" control={control} inputValue="Password"/>
                    <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, GlobalStyles.regular, {letterSpacing: 0}]}>
                        ¿Haz olvidado tu contraseña?
                    </Text>
                </View>
                
            

            <View style={styles.buttonsContainer}>
                    <ButtonLarge buttonLabel="INICIAR SESION" pressHandler={() => router.push("/student/QRScanner")} />
                            
                        <View>
                            <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, GlobalStyles.regular, {letterSpacing: 0}]}>
                                    ¿No tienes cuenta?
                            </Text>
                            <Text onPress={() => setIsInLogin(false)} style={[GlobalStyles.textMedium, GlobalStyles.greenText]}>
                                REGISTRATE
                            </Text>
                        </View>
                </View>
                </ScrollView>
            
                    <StatusBar style="auto" />
        </View>
    </SafeAreaView>
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