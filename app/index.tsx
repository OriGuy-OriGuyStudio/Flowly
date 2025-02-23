import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { Button, FlatList, StyleSheet, Text, View } from "react-native"
import {
  addNewClient,
  deleteClient,
  getClientById,
  getClients,
  updateClient,
} from "../src/services/firestoreService"
import { Client } from "../src/types/firestoreSchemas"
import AuthScreen from "../src/screens/auth/AuthScreen"

interface Props {}

function Home({}: Props) {
  return (
    <View style={styles.container}>
      <AuthScreen />

      <StatusBar style="auto" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
})
