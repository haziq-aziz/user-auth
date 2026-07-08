import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import TextField from "@/components/ui/TextField";
import CustomButton from "@/components/ui/CustomButton";
import TopBar from "@/components/ui/TopBar";

export default function SignupScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TopBar title="Create Account" />
      <View className="flex-1 px-6 py-6">
        <TextField
          label="Username"
          placeholder="Enter your username"
          autoCapitalize="none"
        />

        <TextField
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextField
          label="Password"
          placeholder="Enter your password"
          isPassword
        />

        <TextField
          label="Repeat Password"
          placeholder="Confirm your password"
          isPassword
        />

        <View className="mt-6 gap-3">
          <CustomButton
            title="Sign Up"
            outline={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
