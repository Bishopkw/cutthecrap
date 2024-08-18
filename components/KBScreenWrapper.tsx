import { SafeAreaView, ScrollView, View, ViewStyle } from "react-native";

interface KBScreenWrapperProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  style?: ViewStyle;
}

export default function KBScreenWrapper({
  children,
  header,
  footer,
  style,
}: Readonly<KBScreenWrapperProps>) {
  return (
    <>
      <SafeAreaView>
        <View style={{ padding: 16 }}>{header}</View>
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
      </SafeAreaView>
      {footer}
    </>
  );
}
