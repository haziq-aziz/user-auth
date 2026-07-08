import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface TopBarProps {
  title: string;
  onBack?: () => void;
}

export default function TopBar({ title, onBack }: TopBarProps) {
  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View className="flex-row items-center px-6 py-4 border-b border-gray-200">
      <TouchableOpacity
        onPress={handleBack}
        className="w-10 h-10 items-center justify-center"
      >
        <Ionicons name="arrow-back" size={24} color="#9ca3af" />
      </TouchableOpacity>

      <Text className="flex-1 text-center text-xl text-gray-400 font-bold mr-10 uppercase">
        {title}
      </Text>
    </View>
  );
}
