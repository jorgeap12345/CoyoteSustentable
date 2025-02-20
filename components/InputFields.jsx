import {StyleSheet, View, Text, TouchableHighlight, Button, TextInput, Alert } from "react-native";
import { useForm, Controller  } from 'react-hook-form';
import { GlobalStyles } from "../GlobalStyles";
import { useState, useRef } from "react";
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';


export function LargeInput({control, isRequired = true, errors, field="EJEMPLO", inputValue="NOT SET"}){
    {/* Yes, the rendered text input is INSIDE the "Controller" */}
    return(
    
    <View style={styles.inputContainer}>
        <Text style={[GlobalStyles.textMedium, GlobalStyles.lightGreenText, {textAlign: "left"}, {paddingLeft: 14}]}>{field}</Text>
    <Controller
        control={control}
        rules={{
        required: "Campo invalido: " + field,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
            style={[GlobalStyles.textMedium, styles.textInputAreaLarge]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
        />
        )}
        name={inputValue}
    />
    {/* errors.field && <Text>Campo Requerido</Text> NOT WORKING FOR NOW, REPAIR LATER*/}
    </View>
    
    )
}

export function SmallInput({control, isRequired = true, errors, field="EJEMPLO", inputValue="NOT SET"}){
    {/* Yes, the rendered text input is INSIDE the "Controller" */}
    return(
    
    <View style={styles.inputContainer}>
        <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, {textAlign: "left"}, {paddingLeft: 12}]}>{field}</Text>
    <Controller
        control={control}
        rules={{
        required: "Campo invalido: " + field,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
            style={[GlobalStyles.textSmall, styles.textInputAreaSmall ]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
        />
        )}
        name={inputValue}
    />
    {/* errors.field && <Text>Campo Requerido</Text> NOT WORKING FOR NOW, REPAIR LATER*/}
    </View>
    
    )
}

export function MultOptionInput({control, isRequired = true, errors, field="EJEMPLO", options = ["PRUEBA 1", "PRUEBA 2"], inputValue="NOT SET"}){

    {/* Yes, the rendered text input is INSIDE the "Controller" */}
    return(
    
    <View style={styles.inputContainer}>
        <Text 
            style={[GlobalStyles.textMedium, GlobalStyles.lightGreenText, {textAlign: "left"}, {paddingLeft: 14}]}>{field}
        </Text>

        <View style={styles.textInputAreaSmall}>
            <Controller
                control={control}
                rules={{
                required: "Campo invalido: " + field,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <RNPickerSelect
                    textInputProps={{ pointerEvents: "none" }}
                    onValueChange={onChange} // Update the value in react-hook-form
                    onBlur={onBlur} // Trigger blur event for validation
                    value={value || ""} // Bind to the value from react-hook-form
                    items={options} // Options to populate the dropdown
                    style={{
                    inputAndroid: { borderBottomWidth: 1, padding: 0, color:"black", fontFamily: 'Roboto',}, // Styling for Android
                    inputIOS: { borderBottomWidth: 0, paddingTop: 10, paddingBottom: 10, fontFamily: 'Roboto', color:"black",}, // Styling for iOS
                    iconContainer: { top: 15, right: 12 },
                    }}
                    placeholder={{ label: "Select an option...", value: undefined }} // Placeholder for the dropdown
                />
                )}
                name={inputValue}
            />
            {/* errors.field && <Text>Campo Requerido</Text> NOT WORKING FOR NOW, REPAIR LATER*/}
        </View>
    </View>
    
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        width: '100%',
        maxWidth: 470,
        height: "auto",
        gap: 6
    },

    textInputAreaLarge:{
        width: '100%',
        minHeight: 40,
        backgroundColor: "#96D09B",
        paddingHorizontal: 20,
        borderRadius: 40,
        color: "black",
        textAlign: "left"
    },

    textInputAreaSmall:{
        width: '100%',
        minHeight: 30,
        backgroundColor: "#96D09B",
        paddingHorizontal: 20,
        borderRadius: 40,
        color: "black",
        textAlign: "left"
    },
})