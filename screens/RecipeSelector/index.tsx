import { RecipeType, RootStackParamList } from "@/types";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Pressable, ImageBackground, View } from "react-native";

import recipes from "@/assets/data/recipes.json";

import KBScreenWrapper from "@/components/KBScreenWrapper";
import KBSpacer from "@/components/KBSpacer";
import KBTypography from "@/components/KBTypography";
import { BlurView } from "expo-blur";

type RecipeSelectorScreenProps = {
  route: RouteProp<RootStackParamList, "RecipeSelector">;
  navigation: StackNavigationProp<RootStackParamList, "RecipeSelector">;
};

export default function RecipeSelectorScreen({
  route,
  navigation,
}: Readonly<RecipeSelectorScreenProps>) {
  return (
    <KBScreenWrapper>
      {recipes.map((recipe, index) => (
        <RecipeItemComponent
          key={`recipe-item-${index}-${recipe.title}`}
          recipe={recipe}
          navigation={navigation}
        />
      ))}
    </KBScreenWrapper>
  );
}

interface RecipeItemComponentProps {
  recipe: RecipeType;
  navigation: StackNavigationProp<RootStackParamList, "RecipeSelector">;
}

function RecipeItemComponent({
  recipe,
  navigation,
}: Readonly<RecipeItemComponentProps>): React.JSX.Element {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("RecipeDetail", { recipe: recipe });
      }}
    >
      <ImageBackground
        source={{uri: recipe.imageURL}}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 24,
          overflow: "hidden",
        }}
      >
        <BlurView intensity={12} style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <KBTypography variant="header" style={{ color: "#fff" }}>
              {recipe.title}
            </KBTypography>
          </View>
        </BlurView>
      </ImageBackground>
      <KBSpacer size={32} />
    </Pressable>
  );
}
