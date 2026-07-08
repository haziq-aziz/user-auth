import CustomButton from "@/components/ui/CustomButton";
import { useAuth } from "@/hooks/useAuth";
import { Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function HomeScreen() {
  const { logout } = useAuth();
  
  const handleLogout = async() => {
    try {
      await logout();
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Logout Failed", error.message);
    }
  }
    return (
      <SafeAreaView>
        <Text>Home Screen</Text>
        <CustomButton
          title="Logout"
          outline={false}
          onPress={handleLogout}
        />
      </SafeAreaView>
    );
}