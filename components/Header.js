import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useFonts, Magra_400Regular } from '@expo-google-fonts/magra';

const Header = ({ headtext }) => {
    let [fontsLoaded] = useFonts({
        Magra_400Regular,
      });

    if (!fontsLoaded) {
    return null;
    }

    return (
      <View style={styles.header}>
        <View style={styles.line}>
            <Text style={styles.text}>{headtext}</Text>
         </View>
      </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Magra_400Regular',
        fontSize: 45,
    },
    line: {
        borderBottomWidth: 2,
        width: '100%',
        borderBottomColor: '#D9D9D9', 
        paddingBottom: 15,
        alignItems: 'center',
        marginTop: 20,
    }
});

export default Header