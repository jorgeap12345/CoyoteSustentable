import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';
import logoU from '../assets/images/logoU.png'; 
import logoSus from '../assets/images/logoSus.png';
import { ButtonLarge } from '../components/Buttons';


const Dashboard = () => {
return (
    <View style={Styles.container}>
        <Image source={logoU} style={{ width: 200, height: 55 }} />
        <Image source={logoSus} style={{ paddingTop: 20, width: 354, height: 272 }} />
        <View style={Styles.textContainer}>
            <Text style={[GlobalStyles.textLarge, GlobalStyles.greenText]}>Bienvenido(A)</Text>
        </View>

        <View style={Styles.buttonsContainer}>
            <ButtonLarge buttonLabel='INICIAR SESION'/>
            <ButtonLarge buttonLabel='REGISTRARSE' buttonColor='#00984A'/>
        </View>
 
    </View>
);
};

export default Dashboard;

const Styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            gap: 10,
        }
        ,
        textContainer: {
            alignSelf: 'stretch',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            padding: 10
        }
    ,
        buttonsContainer: {
            alignSelf: 'stretch',
            height: '100%',
            flex: 1,
            alignItems: 'center',
            gap: 10,
            justifyContent: 'flex-end',
            paddingVertical: 35,
            paddingHorizontal: 25
        }
    }
)