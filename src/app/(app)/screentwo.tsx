import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleBar from "@/components/ui/TitleBar";

export default function ScreenTwo() {
  return (
    <View className="flex-1 bg-white">
      <TitleBar title="Screen Two" bgColor="bg-purple-600" />

      <SafeAreaView
        edges={["left", "right", "bottom"]}
        className="flex-1 items-center justify-center"
      >
        <Text className="text-2xl font-bold">Screen Two</Text>
      </SafeAreaView>
    </View>
  );
}
