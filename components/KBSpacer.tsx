import { View } from "react-native";

interface KBSpacerProps {
  size?: number;
  orientation?: "horizontal" | "vertical";
}

export default function KBSpacer({
  size = 16,
  orientation = "vertical",
}: Readonly<KBSpacerProps>) {
  if (orientation === "horizontal") {
    return <View style={{ width: size }} />;
  }
  return <View style={{ height: size }} />;
}
