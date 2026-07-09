import CustomButton from "@/components/ui/CustomButton";
import { useAuth } from "@/hooks/useAuth";
import { Text, Alert, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import TitleBar from "@/components/ui/TitleBar";

import { Images } from "@/constants/images";

export default function HomeScreen() {
  const { logout, user } = useAuth();
  
  const handleLogout = async() => {
    try {
      await logout();
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Logout Failed", error.message);
    }
  };
    return (
      <View className="flex-1 bg-white">
        <TitleBar title="Home" bgColor="bg-green-600" />

        <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1">
          <View className="relative">
            <Image source={Images.hero_bg} className="w-full" />
            <View className="absolute inset-0 justify-center items-start mx-6">
              <Text className="text-2xl font-bold">Welcome back,</Text>
              <Text className="text-xl font-medium">
                {user?.user_metadata?.name}
              </Text>
            </View>
          </View>

          <View className="mx-6">
            <View className="rounded-2xl overflow-hidden mb-4">
              <Image
                source={Images.backdrop_bg}
                className="w-full h-48"
                resizeMode="cover"
              />
            </View>

            <View className="w-full mb-4">
              <CustomButton title="" outline={false} />
            </View>
          </View>
          <View className="bg-slate-100 h-48 justify-center px-6">
            <View className="w-full h-24 bg-white rounded-lg" />
          </View>
        </SafeAreaView>
      </View>
    );
};