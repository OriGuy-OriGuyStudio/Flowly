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

interface Props {}

function Home({}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="הוסף לקוח דsדמה"
        onPress={() =>
          addNewClient({
            name: "אורי גיא",
            email: "origuy@test.com",
            phone: "054-1234567",
          })
        }
      />
      <Button
        title="עדכן לקוח דמה"
        onPress={() =>
          updateClient("8UCTC6xzwu3jyzDOYiZk", {
            email: "origuy@studio.com",
          })
        }
      />
      <Button
        title="מחק לקוח דמה"
        onPress={() => deleteClient("rXiJrgmfdSZ41h1UZB3S")}
      />
      <Button
        title="קבל לקוח"
        onPress={() => getClientById("8UCTC6zwu3jyzDOYiZk")}
      />

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
