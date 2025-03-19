import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import logoSus from '../assets/images/logoSus1.png';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from "../GlobalStyles";
import { useRouter } from "expo-router";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export function StudentHeaderBar() {

    const router = useRouter();

    function SideMenu() {
        const [isOpen, setIsOpen] = useState(false);
    
        return (
            <View>
                {isOpen && (
                <>
                    <View style={styles.sideMenu}>
                        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                            <Ionicons name="menu" size={40} color="#053828" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push("./QRScanner")}>
                            <Text style={[GlobalStyles.textLarge, GlobalStyles.greenText, {textAlign: "left"}]}>Inicio</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push("./Profile")}>
                            <Text style={[GlobalStyles.textLarge, GlobalStyles.greenText, {textAlign: "left"}]}>Perfil</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => router.push("./QRScanner")}>
                            <Text style={[GlobalStyles.textLarge, GlobalStyles.greenText, {textAlign: "left"}]}>Horas</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => router.push("/")}>
                            <Text style={[GlobalStyles.textLarge, GlobalStyles.greenText, {textAlign: "left"}]}>Cerrar Sesión</Text>
                        </TouchableOpacity>
                        
                        
                    </View>
                </>
                )}

                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                    <Ionicons name="menu" size={40} color="#053828" />
                </TouchableOpacity>
    
                
            </View>
        );
    }


    return (
        <View style={styles.headerContainer}>
            <SideMenu/>
            
            <View>
                <Image source={logoSus} style={styles.logo} />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,

    },

    logo: {
        width: "100%",
        height: 70,
        paddingRight: 47,
        resizeMode: 'contain',
        
    },
    sideMenu: {
        position: "absolute",
        left: -30,
        top: -80,
        bottom: 0,
        minWidth: 260,
        width: "70%",
        height: screenHeight + 80,
        zIndex: 5,
        backgroundColor: "#A6D5AB",
        paddingTop: 80,
        paddingHorizontal: 29,
        gap: 10, 
    }
});
