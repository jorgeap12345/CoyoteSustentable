import {StyleSheet, View, Text, TouchableHighlight, Button, TextInput, Alert } from "react-native";
import { useForm, Controller  } from 'react-hook-form';
import { GlobalStyles } from "../GlobalStyles";
import { useState, useRef } from "react";
import {Picker} from '@react-native-picker/picker';


export function LargeInput({control, isRequired = true, errors, field="EJEMPLO"}){
    {/* Yes, the rendered text input is INSIDE the "Controller" */}
    return(
    
    <View style={styles.inputContainer}>
        <Text style={[GlobalStyles.textMedium, GlobalStyles.lightGreenText, {textAlign: "left"}, {paddingLeft: 14}]}>{field}</Text>
    <Controller
        control={control}
        rules={{
        required: isRequired,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
            style={[GlobalStyles.textMedium, styles.textInputAreaLarge]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
        />
        )}
        name={field}
    />
    {/* errors.field && <Text>Campo Requerido</Text> NOT WORKING FOR NOW, REPAIR LATER*/}
    </View>
    
    )
}

export function SmallInput({control, isRequired = true, errors, field="EJEMPLO"}){
    {/* Yes, the rendered text input is INSIDE the "Controller" */}
    return(
    
    <View style={styles.inputContainer}>
        <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, {textAlign: "left"}, {paddingLeft: 12}]}>{field}</Text>
    <Controller
        control={control}
        rules={{
        required: isRequired,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
            style={[GlobalStyles.textSmall, styles.textInputAreaSmall ]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
        />
        )}
        name={field}
    />
    {/* errors.field && <Text>Campo Requerido</Text> NOT WORKING FOR NOW, REPAIR LATER*/}
    </View>
    
    )
}

export function MultOptionInput({control, isRequired = true, errors, field="EJEMPLO", options}){
    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    {/* Yes, the rendered text input is INSIDE the "Controller" */}
    return(
    
    <View style={styles.inputContainer}>
        <Text style={[GlobalStyles.textMedium, GlobalStyles.lightGreenText, {textAlign: "left"}, {paddingLeft: 14}]}>{field}</Text>
    <Controller
        control={control}
        rules={{
        required: isRequired,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <Picker
                ref={pickerRef}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        )}
        name={field}
    />
    {/* errors.field && <Text>Campo Requerido</Text> NOT WORKING FOR NOW, REPAIR LATER*/}
    </View>
    
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        width: '100%',
        maxWidth: 470,
        height: "auto",
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