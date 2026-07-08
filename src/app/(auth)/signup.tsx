import { Text, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import TextField from "@/components/ui/TextField";
import CustomButton from "@/components/ui/CustomButton";
import TopBar from "@/components/ui/TopBar";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function SignupScreen() {
  const { signup } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signup(username, email, password);
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Signup Failed", error.message);
    }
  }
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TopBar title="Create Account" />
      <View className="flex-1 px-6 py-6">

        <TextField
          label="Username"
          placeholder="Enter your username"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />

        <TextField
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextField
          label="Password"
          placeholder="Enter your password"
          isPassword
          value={password}
          onChangeText={setPassword}
        />

        <TextField
          label="Repeat Password"
          placeholder="Confirm your password"
          isPassword
          value={repeatPassword}
          onChangeText={setRepeatPassword}
        />

        <View className="mt-6 gap-3">
          <CustomButton
            title="Sign Up"
            outline={false}
            onPress={handleSignup}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
