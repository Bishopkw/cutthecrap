import { SafeAreaView, ScrollView, ViewStyle, View } from "react-native";

interface KBScreenWrapperProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  style?: ViewStyle;
}

export default function KBScreenWrapper({
  children,
  footer,
  style,
}: Readonly<KBScreenWrapperProps>) {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          style={[
            {
              padding: 16,
            },
            style,
          ]}
        >
          {children}
        </ScrollView>
        <View style={{}}></View>
      </SafeAreaView>
      {footer}
    </>
  );
}
