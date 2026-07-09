import { Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import TextField from "@/components/ui/TextField";
import CustomButton from "@/components/ui/CustomButton";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function LoginScreen() {
  const { login } = useAuth();

  const [email, setEmail] =  useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Login Failed", "Invalid email or password.");
      console.log("Login error:", error.message)
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-5xl font-bold text-green-600 mb-8">damai</Text>

        <TextField
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
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

        <View className="w-full mb-4">
          <CustomButton 
          title="Log in" 
          outline={false}
          onPress={handleLogin}  
        />
        </View>

        <View className="w-full mb-4">
          <CustomButton
            title="Create Account"
            outline={true}
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
            onPress={() => router.push("/signup")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
