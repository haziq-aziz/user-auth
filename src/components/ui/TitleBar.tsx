import { View, Text } from "react-native";

interface TitleBarProps {
    title: string;
    bgColor: string;
}

export default function TitleBar({ title, bgColor }: TitleBarProps) {
    
    return (
        <View className={`flex-row items-center px-6 pt-16 pb-4 ${bgColor}`}>
            <Text className="flex-1 text-center text-xl text-white uppercase">
                {title}
            </Text>
        </View>
    )
}