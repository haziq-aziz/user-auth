import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import TitleBar from "@/components/ui/TitleBar";
import CustomButton from "@/components/ui/CustomButton";
import { useAuth } from "@/hooks/useAuth";

export default function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <TitleBar title="Profile" bgColor="bg-red-600" />

      <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1 px-6">
        <View className="items-center mt-10">
          <View className="w-24 h-24 rounded-full bg-green-600 items-center justify-center mb-4">
            <Text className="text-white text-4xl font-bold">
              {user?.user_metadata?.name?.charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text className="text-2xl font-bold">
            {user?.user_metadata?.name ?? "User"}
          </Text>

          <Text className="text-gray-500 mt-1">{user?.email}</Text>
        </View>

        <View className="mt-10 gap-3">
          <View className="bg-gray-100 rounded-xl p-4">
            <Text className="text-gray-500">Account ID</Text>

            <Text className="font-medium mt-1">{user?.id}</Text>
          </View>

          <CustomButton
            title="Logout"
            outline={false}
            bgColor="bg-red-600"
            borderColor="border-red-800"
            onPress={handleLogout}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
