import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RoomProvider } from './src/Redux/reduxContext';
import Home from "./src/Home/home";
import Login from "./src/Login/login";
import Card from "./src/Card/card";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <RoomProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        hidden={false}
        // translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Card" component={Card} />
        </Stack.Navigator>
      </NavigationContainer>
    </RoomProvider>
  );
}


