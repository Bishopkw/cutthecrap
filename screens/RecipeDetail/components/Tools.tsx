import KBSpacer from "@/components/KBSpacer";
import KBTypography from "@/components/KBTypography";
import { View } from "react-native";

interface Tool {
    item: string;
    }

export default function ToolsComponent() {
  const test_tools: Tool[] = [
    {
        item: "Waffle Maker",
    },
  ];
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
        <KBTypography>{test_tools.length} {test_tools.length <= 1 ? 'item' : 'items'}</KBTypography>
      </View>

      <KBSpacer size={16} />

      <View
        style={{
        }}
      >
        {test_tools.map((ingredient) => (
          <>
            <ToolComponent key={ingredient.item} tool={ingredient} />
            <KBSpacer orientation="horizontal" size={8} />
          </>
        ))}
      </View>
    </>
  );
}

interface ToolComponentProps {
    tool: Tool;
    }

function ToolComponent({
  tool,
}: Readonly<ToolComponentProps>) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <KBTypography>{tool.item}</KBTypography>
    </View>
  );
}
