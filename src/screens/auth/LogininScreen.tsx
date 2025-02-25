import React, { useState } from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, Pressable} from 'react-native';


interface Props {}

function LogininScreen({}: Props) {
    const [phonenumber, setPhonenumber] = useState<string>("")
    return (
        <KeyboardAvoidingView className="items-center justify-center flex-1 w-full align-middle bg-wy100">
        <Image
          source={require("../../../assets/images/logo/appLogo.png")}
          style={{ width: 100  , height: 100 }}
        />
        <Text
          style={{ fontFamily: "Rubik-Bold" }}
          className="mb-1 mt-8 text-xl text-gray700"
        >
          הזמן מספר טלפון
        </Text>
        <TextInput
          keyboardType="phone-pad"
          keyboardAppearance="default"
          onChangeText={setPhonenumber}
          value={phonenumber}
          className="w-3/5 p-2 border-2 rounded-lg border-gray500"
        />
            <Pressable className={"px-8 py-3 bg-pink500 rounded-2xl mt-4 justify-center align-middle items-center "}>
                <Text style={{ fontFamily: "Rubik-Bold" }} className={"text-2xl text-wy100"}>התחבר</Text>
            </Pressable>
      </KeyboardAvoidingView>
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