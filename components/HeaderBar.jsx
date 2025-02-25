import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';
import logoSus from '../assets/images/logoSus1.png';
import { Ionicons } from '@expo/vector-icons';

export function HeaderBar({ onMenuPress }) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onMenuPress}>
                <Ionicons name="menu" size={45} color="#053828" />
            </TouchableOpacity>
            
            <Image source={logoSus} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 1,
        paddingHorizontal: 10,
        backgroundColor: '#E6FFE8',

    },
    logo: {
        width: "100%",
        height: 82,
        paddingRight: 47,
        resizeMode: 'contain',
        
    }
});
