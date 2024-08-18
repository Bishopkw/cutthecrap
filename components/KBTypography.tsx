import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { useFonts } from 'expo-font';

interface KBTypographyProps {
  variant?: "header" | "body";
  children?: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

export default function KBTypography({
  variant = "body",
  children,
  style,
}: Readonly<KBTypographyProps>) {
  const [fontsLoaded] = useFonts({
    PoppinsBlack: require('../assets/fonts/Poppins-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const VARIANT_STYLE = StyleSheet.create({
    header: {
      fontSize: 24,
      fontWeight: "bold",
      fontFamily: "PoppinsBlack",
    },
    body: {
      fontSize: 16,
      fontWeight: "normal",
      fontFamily: "PoppinsBlack",
    },
  });

  return (
    <Text style={[VARIANT_STYLE[variant], style]}>
      {children}
    </Text>
  );
}