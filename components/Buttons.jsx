import {StyleSheet, View, Text, TouchableHighlight, Alert} from "react-native";
import { GlobalStyles } from "../GlobalStyles";

export function ButtonLarge({buttonColor = "#0b532e", buttonLabel = "TEXTO DE BOTON", pressHandler}){

    const onPressButton = () => {
        Alert.alert('You tapped the button!');
    };
    
    return(
        <TouchableHighlight  
            style={[styles.buttonLargeContainer, {backgroundColor: buttonColor}]} 
            underlayColor="rgb(12, 69, 39)" 
            onPress={pressHandler}>
                <View  >
                    <Text style={[GlobalStyles.textMedium]}>{buttonLabel}</Text>
                </View>
        </TouchableHighlight>
    )
}

export function ButtonThin({buttonColor = "#0B532E", buttonLabel = "TEXTO DE BOTON"}){

    const onPressButton = () => {
        Alert.alert('You tapped the button!');
    };
    
    return(
        <TouchableHighlight  
            style={[styles.buttonThinContainer, {backgroundColor: buttonColor}]} 
            underlayColor="rgb(12, 69, 39)" 
            onPress={onPressButton}>
                <View  >
                    <Text style={[GlobalStyles.textSmall]}>{buttonLabel}</Text>
                </View>
        </TouchableHighlight>
    )
}

export function ButtonQRScreen({buttonColor = "#96D09B", buttonLabel = "TEXTO DE BOTON"}){
    
    const onPressButton = () => {
        Alert.alert('You tapped the button!');
    };
    
    return(
        <TouchableHighlight  
            style={[styles.buttonQRScreenContainer, {backgroundColor: buttonColor}]} 
            underlayColor="#88c08c" 
            onPress={onPressButton}>
                <View  >
                    <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText]}>{buttonLabel}</Text>
                </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonLargeContainer:{
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        maxWidth: 450,
        minHeight: 68,
        height: "auto",

        paddingTop: 18,
        paddingBottom: 18,
        paddingRight: 0,
        paddingLeft: 0,

        borderRadius: 30
    },

    buttonThinContainer:{
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        maxWidth: 450,
        minHeight: 29,
        height: "auto",

        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 20,
        paddingLeft: 20,

        borderRadius: 30
    },

    buttonQRScreenContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        width: '100%',
        maxWidth: 470,
        minHeight: 66,
        padding: 8,
        borderRadius: 12,
        marginTop:"auto",
    }


})