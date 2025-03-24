import React, { useState } from 'react';
import { StudentHeaderBar } from "../components/HeaderBar";
import { SafeAreaViewñ } from "react-native-safe-area-context";
import { View, Image, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from "../GlobalStyles";

export default function Profile(){

      return(
            <SafeAreaView style={GlobalStyles.appContainer}> 

               <StudentHeaderBar/>

            </SafeAreaView>
      )
   }