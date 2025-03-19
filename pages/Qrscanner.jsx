import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert, AppState, Linking } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';
import { StudentHeaderBar } from '../components/HeaderBar';
import { StatusBar } from 'expo-status-bar';
import { ButtonQRScreen } from '../components/Buttons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useCameraPermissions, CameraView} from "expo-camera";

export default function Qrscanner({workDayState, setWorkDayState}) {

    function DefaultViewport(){

        return(
            <>
                <View style={styles.qrIconContainer}>
                    <Ionicons name="qr-code-outline" size={130} color="#053828"></Ionicons>
                </View>

                <ButtonQRScreen buttonLabel='Habilitar Camara'
                pressHandler={async () => {
                    const permissionResponse = await requestCameraPermision();
                    if (permissionResponse?.granted) {
                        setViewportScreen(<ActiveCameraViewport/>)
                    } else {
                        Alert.alert("Ha habido un error con los permisos de camara.");
                    }}}
                />
            </>
        )
    }

    function ActiveCameraViewport(){

        const qrLock = useRef(false);

        return(
            <>
            <CameraView
                style={[StyleSheet.absoluteFillObject, { borderRadius: 40 }]}
                facing="back"
                onBarcodeScanned={({ data }) => {
                    if (data && !qrLock.current) {
                        qrLock.current = true;

                        setTimeout(async () => {
                            await Alert.alert(data);

                            setWorkDayState(prevState => {
                                const newState = !prevState;
                                setViewportScreen(newState ? <ActiveWorkDay /> : <FinalizedWorkDay />);
                                return newState;
                            });
                        }, 300);
                    }
                }}
            />
            </>
        )
    }

    function ActiveWorkDay(){

        return(
            <>
                <View style={styles.qrIconContainer}>
                    <Text style={[GlobalStyles.textMedium, GlobalStyles.lightGreenText]}>El registro se ha realizado exitosamente!</Text>
                </View>

                <View style={styles.registerTextContainer}>
                    <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, {textAlign: "left"}]}>Contenido: </Text>
                    <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, {textAlign: "left"}]}>Inicio: Lunes 25 de Noviembre de 2024, 14:00:00 pm </Text>
                </View>

                <ButtonQRScreen buttonLabel='Finalizar Jornada'
                pressHandler={async () => {
                    const permissionResponse = await requestCameraPermision();
                    if (permissionResponse?.granted) {
                        setViewportScreen(<ActiveCameraViewport/>)
                    } else {
                        Alert.alert("Ha habido un error con los permisos de camara.");
                    }}}
                />
            </>
        )
    }

    function FinalizedWorkDay(){

        return(
            <>
                          
                    <View style={styles.qrIconContainer}>
                        <Text style={[GlobalStyles.textMedium, GlobalStyles.lightGreenText]}>El registro se ha realizado exitosamente!</Text>
                    </View>

                    <View style={styles.registerTextContainer}>
                        <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, {textAlign: "left"}]}>Contenido: </Text>
                        <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, {textAlign: "left"}]}>Inicio: Lunes 25 de Noviembre de 2024, 14:00:00 pm </Text>
                        <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, {textAlign: "left"}]}>Final: Lunes 25 de Noviembre de 2024, 17:00:00 pm </Text>
                        <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, {textAlign: "left"}]}>Total: 03:00:00 </Text>
                    </View>

                    <ButtonQRScreen buttonLabel='Iniciar otra jornada'
                    pressHandler={async () => {
                        const permissionResponse = await requestCameraPermision();
                        if (permissionResponse?.granted) {
                            setViewportScreen(<ActiveCameraViewport/>)
                        } else {
                            Alert.alert("Ha habido un error con los permisos de camara.");
                        }}}
                    />
            </>
        )
    }

    

    const [viewportScreen, setViewportScreen] = useState(<DefaultViewport/>)
    //Container states index:
    // DefaultViewport = Default, inactive and capable of asking for camera access
    // ActiveCameraViewport = Active camera, viewport should display camera footage and be able to scan QR codes
    // ActiveWorkDay = Work hours started, diplays time of registry start and button to go back to active camera and end the day
    // FinalizedWorkDay = Work hours finished, diplays time of registry start, time of the registry end, and button to go back to active camera and start another registry


    //Camera permision handlers
    const [cameraPermision, requestCameraPermision] =  useCameraPermissions()
    const isCameraPremissionGranted = Boolean(cameraPermision?.granted)

    

    useEffect(() => {
        
    })

    return (
        <SafeAreaView style={GlobalStyles.appContainer}> 
            <View>
                <StudentHeaderBar />

                
                <ScrollView>

                    <View style={styles.qrContainer}>

                        {viewportScreen}
                        

                        
                        
                    </View>

                    
                    <View style={styles.instructionsContainer}>
                        {workDayState ? <Text style={[GlobalStyles.textMedium, GlobalStyles.greenText, {letterSpacing: 3}]}>JORNADA EN CURSO</Text> : <></>}
                        <Text style={[GlobalStyles.textSmall, GlobalStyles.greenText, {textAlign: "justify"}]}>✅ Utiliza tu cámara para escanear el código QR</Text>
                        <Text style={[GlobalStyles.textSmall, GlobalStyles.greenText, {textAlign: "justify"}]}>✅ Revisa que los datos sean correctos</Text>
                    </View>
                </ScrollView>

                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    qrContainer: {
        flex:1,

        height: 470,
        alignSelf: 'stretch',

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B9E0BD',

        padding: 20,

        borderRadius: 40,
        
    },

    instructionsContainer: {
        alignSelf: 'center',
        justifyContent: 'flex-end',
        
        gap: 10,

        paddingVertical: 35,
        paddingHorizontal: 25,

    },

    qrIconContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    registerTextContainer:{
        flex: 2,
        justifyContent: "flex-end",
        paddingBottom: 25
    },
});
