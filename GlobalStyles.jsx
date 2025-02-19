import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const GlobalStyles = StyleSheet.create(
    {
        appContainer: {
            flex: 1,
            backgroundColor: '#E6FFE8',
            alignItems: 'center',
            paddingHorizontal: 18,
            paddingVertical: 10
        },

        textLarge:{
            fontSize: 30,
            color: "white",
            fontFamily: 'Roboto',
            fontWeight: "bold",
            letterSpacing: 4,
            textAlign: "center"
        },

        textMedium:{
            fontSize: 24,
            color: "white",
            fontFamily: 'Roboto',
            fontWeight: "bold",
            letterSpacing: 2,
            textAlign: "center"
        },

        textSmall:{
            fontSize: 18,
            color: "white",
            fontFamily: 'Roboto',
            fontWeight: "bold",
            letterSpacing: 2,
            textAlign: "center"
        },

        regular:{
            fontWeight: "normal"
        },

        lightGreenText:{
            color: "#285743"
        },

        greenText:{
            color: "#053828"
        }
        
        
    }
)