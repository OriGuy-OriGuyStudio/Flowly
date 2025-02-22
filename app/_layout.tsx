import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface Props {}

function Layout({}: Props) {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      ></Stack>
    </>
  )
}

export default Layout

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
