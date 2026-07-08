import { Slot } from "expo-router";
import { AuthProvider } from "@/context/AuthContext";

import "../../assets/global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
