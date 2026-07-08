import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  outline: boolean;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}

export default function CustomButton({
  title,
  outline = false,
  bgColor = "bg-green-600",
  borderColor = "border-green-800",
  textColor = "text-white",
  ...props
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      className={`
        ${outline ? "bg-transparent" : bgColor}
        ${borderColor}
      ${outline ? "border-2 border-b-4" : "border-b-4"}
        rounded-xl
        py-3
        w-full
        items-center
        justify-center
      `}
      {...props}
    >
      <Text
        className={`
          ${textColor}
          font-semibold
          text-base
          uppercase
        `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
