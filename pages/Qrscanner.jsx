import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';
import { HeaderBar } from '../components/HeaderBar';
import { StatusBar } from 'expo-status-bar';
import { ButtonQRScreen } from '../components/Buttons';
import {logoU} from '../assets/images/logoU.png';

const Qrscanner = () => {
    return (
        <View style={GlobalStyles.appContainer}>
            <HeaderBar />

            

            {/* Contenedor del QR */}
            <View style={styles.qrContainer}>
            
            {/* Imagen del QR */}
            <Image source={logoU} style={styles.qrImage} />
            
            {/* Botón para activar la cámara */}
            <ButtonQRScreen style={styles.ButtonQRScreen} buttonLabel='Permitir el acceso a la camara'  />

            </View>

            {/* Instrucciones */}
            <View style={styles.instructionsContainer}>
                <Text style={[GlobalStyles.textSmall, styles.instruction]}>✅ Utiliza tu cámara para escanear el código QR</Text>
                <Text style={[GlobalStyles.textSmall, styles.instruction]}>✅ Revisa que los datos sean correctos</Text>
            </View>

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    qrContainer: {
        flex:1,
        height: '100%',
        alignSelf: 'stretch',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B9E0BD',
        padding: 20,
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        
    },
    qrImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    cameraButton: {
        marginTop: 20,
        backgroundColor: '#A4D4AE',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    cameraButtonText: {
        color: '#053828',
        fontSize: 16,
        fontWeight: 'bold',
    },
    instructionsContainer: {
        alignSelf: 'center', // Centra el contenedor y permite que su altura se ajuste
        alignItems: 'center', // Centra los elementos horizontalmente
        justifyContent: 'flex-end', // Los elementos se alinean abajo dentro del contenedor
        gap: 10,
        paddingVertical: 35,
        paddingHorizontal: 25,
        backgroundColor: '#E6FFE8',
        paddingTop: 20,
    },
    instruction: {
        color: '#053828',
        marginBottom: 5,
        textAlign: "justify"
    },

    ButtonQRScreen :{
        backgroundColor: '#A4D4AE',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    }
});

export default Qrscanner;
