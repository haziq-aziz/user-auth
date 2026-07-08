import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TextField from "@/components/ui/TextField";
import CustomButton from "@/components/ui/CustomButton";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-5xl font-bold text-green-600 mb-8">damai</Text>

        <TextField
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <TextField
          label="Password"
          placeholder="Enter your password"
          isPassword
        />

        <View className="w-full mb-4">
          <CustomButton title="Log in" outline={false} />
        </View>

        <View className="w-full mb-4">
          <CustomButton
            title="Create Account"
            outline={true}
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
