import {
  TextInput,
  View,
  Text,
  TextInputProps,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface TextFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  isPassword?: boolean;
}

export default function TextField({
  label,
  error,
  isPassword = false,
  ...props
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full mb-4">
      {label && (
        <Text className="text-sm font-medium text-gray-700 mb-2">{label}</Text>
      )}

      <View className="flex-row items-center border border-gray-300 rounded-xl px-4">
        <TextInput
          className="flex-1 py-3 text-base"
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor="#9CA3AF"
          {...props}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
}
