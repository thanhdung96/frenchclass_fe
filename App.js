import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@/screens/security/LoginScreen";
import { HomeScreen } from "@/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View className="flex-1 justify-center bg-white mx-8">
      <NavigationContainer>

        <Stack.Navigator initialRouteName={"security"}>
          <Stack.Screen name={"login"} component={LoginScreen} />
        </Stack.Navigator>
        <Stack.Navigator name={"home"}>
          <Stack.Screen name={"home_screen"} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
