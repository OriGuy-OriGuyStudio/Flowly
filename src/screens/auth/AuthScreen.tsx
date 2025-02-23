import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface Props {}

function AuthScreen({}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AuthScreen</Text>
    </View>
  )
}

export default AuthScreen

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
