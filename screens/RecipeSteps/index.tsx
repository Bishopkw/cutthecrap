import KBScreenWrapper from "@/components/KBScreenWrapper";
import KBTypography from "@/components/KBTypography";
import { RootStackParamList } from "@/types";
import { AntDesign } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Pressable } from "react-native";

interface RecipeDetailScreenProps {
  route: RouteProp<RootStackParamList, "RecipeSteps">;
  navigation: StackNavigationProp<RootStackParamList, "RecipeSteps">;
}

export default function RecipeStepsScreen({
  route,
  navigation,
}: Readonly<RecipeDetailScreenProps>): React.JSX.Element {
  const { recipe } = route.params;
  return (
    <KBScreenWrapper>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("RecipeDetail", { recipe: recipe });
          }}
          style={{
            aspectRatio: 1,
            borderWidth: 1,
            borderColor: "#000000",
            borderRadius: 100,
          }}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={{
              padding: 8,
            }}
          />
        </Pressable>
      </View>
      {recipe.instructions.map((instruction, index) => (
        <>
          <KBTypography>{`Step ${index + 1}:`}</KBTypography>
          <KBTypography>{instruction}</KBTypography>
        </>
      ))}
    </KBScreenWrapper>
  );
}
