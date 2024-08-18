import KBScreenWrapper from "@/components/KBScreenWrapper";
import KBSpacer from "@/components/KBSpacer";
import KBTypography from "@/components/KBTypography";
import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";

export default function RecipeSelectorScreen() {
  const navigation = useNavigation();
  const test_recipes = [
    {
      title: "Waffle",
      tags: ["Breakfast", "Fast", "Easy"],
      tools: ["Waffle Maker"],
    },
  ];
  return (
    <KBScreenWrapper>
      {test_recipes.map((recipe) => (
        <Pressable key={recipe.title} onPress={
          () => {
            navigation.navigate("RecipeDetail", { recipe: recipe });
          }
        }>
          <KBTypography variant="header">{recipe.title}</KBTypography>
          <KBSpacer size={16} />
        </Pressable>
      ))}
    </KBScreenWrapper>
  );
}
