import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>List of Items</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: 425,
        height: 30,
        paddingTop: 100,
        backgroundColor: 'red',
    },

    title: {
        textAlign: 'center',
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
    },

})