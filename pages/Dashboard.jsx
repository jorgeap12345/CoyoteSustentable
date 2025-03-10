import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';
import logoU from '../assets/images/logoU.png'; 
import logoSus from '../assets/images/logoSus.png';
import { ButtonLarge } from '../components/Buttons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";


const Dashboard = ({setIsInLogin}) => {

    const router = useRouter();

return (
    <SafeAreaView style={GlobalStyles.appContainer}>
        <View style={styles.container}>
            <Image source={logoU} style={styles.bannerUniversidad} />
            <Image source={logoSus} style={styles.logoSustentabilidad} />
            
            <View style={styles.textContainer}>
                <Text style={[GlobalStyles.textLarge, GlobalStyles.greenText]}>Bienvenido(a)</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <ButtonLarge buttonLabel='INICIAR SESION' pressHandler={() => {setIsInLogin(true), router.push("./UserManager") }}/>
                <ButtonLarge buttonLabel='REGISTRARSE' pressHandler={() => {setIsInLogin(false), router.push("./UserManager")}} buttonColor='#00984A'/>
            </View>

            <StatusBar style="auto" />
    
        </View>
    </SafeAreaView>
);
};

export default Dashboard;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            gap: 10,
            width: "100%"
        },

        textContainer: {
            alignSelf: 'stretch',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            padding: 10
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

        bannerUniversidad:{
            maxWidth: 200,
            maxHeight: 55
        },

        logoSustentabilidad:{
            minHeight: "auto",
            maxHeight: 200,
            width: 255
        }
    }
)