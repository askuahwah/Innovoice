import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import style from "./login_style";
import Logo from "../assets/logo.png";
import Home from "../Home/home";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleinput = () => {
    // if (email === "askuahwah@gmail.com" && password === "12345678") {
    //   navigation.navigate("Home");
    // } else {
    //   alert("Invalid email or password");
    // }
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={style.safe}>
      <View style={style.Login_main}>
        <View>
          <Image source={Logo} />
        </View>
        <View style={style.login_information}>
          <TextInput
            style={style.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={style.input}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="LOG IN" onPress={handleinput} />
        </View>
      </View>
    </SafeAreaView>
  );
}
