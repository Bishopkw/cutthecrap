import KBSpacer from "@/components/KBSpacer";
import KBTypography from "@/components/KBTypography";
import { RecipeType } from "@/types";
import { View } from "react-native";

interface ToolsComponentProps {
  recipe: RecipeType;
}

export default function ToolsComponent({
  recipe,
}: Readonly<ToolsComponentProps>) {
  return (
    <>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <KBTypography variant="header">Tools</KBTypography>
        <KBTypography>
          {recipe.tools.length} {recipe.tools.length <= 1 ? "item" : "items"}
        </KBTypography>
      </View>

      <KBSpacer size={16} />

      <View style={{}}>
        {recipe.tools.map((tool) => (
          <>
            <ToolComponent key={tool} tool={tool} />
            <KBSpacer orientation="horizontal" size={8} />
          </>
        ))}
      </View>
    </>
  );
}

interface ToolComponentProps {
  tool: string;
}

function ToolComponent({ tool }: Readonly<ToolComponentProps>) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <KBTypography>{tool}</KBTypography>
    </View>
  );
}
