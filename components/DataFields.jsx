import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../GlobalStyles";

export function DataField({fieldName, fieldContents}) {
    {/* For desired order, the outer container should align the fields to the left. 
        Currently bugged, cant style exactly like figma, pending.*/}
    return(
        
        <View style={styles.dataFieldContainer}>

                <Text style={[GlobalStyles.textSmall, GlobalStyles.lightGreenText, styles.fieldName]}> 
                    {fieldName}
                </Text>


                <Text style={[GlobalStyles.textSmall, GlobalStyles.greenText, {textAlign: "left", paddingLeft: 5}]}> 
                    {fieldContents}
                </Text>

            
        </View>
    )
}

const styles = StyleSheet.create({
    dataFieldContainer:{
        width: "100%",
        justifyContent: "center",
        alignContent: "flex-start",
        maxWidth: 470,
        height: "auto",
    },

    fieldName:{
        width: "auto",
        textAlign: "left",
        paddingVertical: 5,
        backgroundColor: "#96D09B",
        borderRadius: 5,
        paddingLeft: 5
    }
})