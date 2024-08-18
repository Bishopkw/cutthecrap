import { ScrollView, View } from "react-native";

import KBTypography from "@/components/KBTypography";
import { PropsWithChildren } from "react";
import KBSpacer from "@/components/KBSpacer";
import { RecipeType } from "@/types";

interface TagsComponentProps {
  recipe: RecipeType;
}

export default function TagsComponent({
  recipe,
}: Readonly<TagsComponentProps>) {
  return (
    <ScrollView
      horizontal
      style={{
        flexDirection: "row",
      }}
    >
      {recipe.tags.map((tag) => (
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
