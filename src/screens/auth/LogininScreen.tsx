import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

function LogininScreen({}: Props) {
    return (
        <View style={styles.container}>
             <Text style={styles.text}>LogininScreen</Text>
        </View>
    );
}

export default LogininScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
    },
});