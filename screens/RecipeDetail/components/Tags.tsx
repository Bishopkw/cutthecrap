import { ScrollView, View } from "react-native";

import KBTypography from "@/components/KBTypography";
import { PropsWithChildren } from "react";
import KBSpacer from "@/components/KBSpacer";

export default function TagsComponent() {
  const test_tags = ["Breakfast", "Fast", "Easy"];
  return (
    <ScrollView
      horizontal
      style={{
        flexDirection: "row",
      }}
    >
      {test_tags.map((tag) => (
        <>
          <TagComponent key={tag}>{tag}</TagComponent>
          <KBSpacer orientation="horizontal" size={8} />
        </>
      ))}
    </ScrollView>
  );
}

interface TagComponentProps extends PropsWithChildren {
  children?: string;
}

function TagComponent({ children }: Readonly<TagComponentProps>) {
  return (
    <View
      style={{
        backgroundColor: "#43927d20",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
      }}
    >
      <KBTypography style={{ color: "#43927d" }}>{children}</KBTypography>
    </View>
  );
}
