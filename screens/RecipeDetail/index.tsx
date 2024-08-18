import { Image, Pressable, StyleSheet, View } from "react-native";

import KBTypography from "@/components/KBTypography";
import { PropsWithChildren } from "react";
import TagsComponent from "./components/Tags";
import KBSpacer from "@/components/KBSpacer";
import IngredientsComponent from "./components/Ingredients";
import ToolsComponent from "./components/Tools";
import KBScreenWrapper from "@/components/KBScreenWrapper";
import AntDesign from "@expo/vector-icons/AntDesign";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types";

type RecipeDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'RecipeSteps'>;
  navigation: StackNavigationProp<RootStackParamList, 'RecipeSteps'>;
};

export default function RecipeDetailScreen({ route, navigation }: RecipeDetailScreenProps): React.JSX.Element {
  return (
    <KBScreenWrapper
      footer={
        <View
          style={{
            backgroundColor: "#fffffff0",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("RecipeSteps");
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff4",
                width: "100%",
                flex: 1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "80%",
                  backgroundColor: "blue",
                  flex: 1,
                  alignItems: "center",
                  padding: 16,
                  margin: 16,
                  borderRadius: 16,
                }}
              >
                <KBTypography style={{ color: "white" }}>
                  Let's Cook!
                </KBTypography>
              </View>
            </View>
          </Pressable>

          <KBSpacer></KBSpacer>
        </View>
      }
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("RecipeSelector");
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
        <View
          style={{
            aspectRatio: 1,
            borderWidth: 1,
            borderColor: "#000000",
            borderRadius: 100,
          }}
        >
          <AntDesign
            name="heart"
            size={24}
            color="black"
            style={{
              padding: 8,
            }}
          />
        </View>
      </View>

      <Image
        source={require("@/assets/images/waffles.jpg")}
        style={{ width: "100%", height: 200, borderRadius: 24 }}
      />
      <KBSpacer size={16} />
      <KBTypography variant="header">Waffles</KBTypography>
      <RecipeFactsComponent />
      <KBSpacer size={16} />
      <TagsComponent />
      <KBSpacer size={16} />
      <IngredientsComponent />
      <KBSpacer size={16} />
      <ToolsComponent />
    </KBScreenWrapper>
  );
}

function RecipeFactsComponent() {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#000",
        padding: 16,
        borderRadius: 24,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <RecipeFactComponent>Serving Size: 1</RecipeFactComponent>
      <RecipeFactComponent>Cal: 218</RecipeFactComponent>
      <RecipeFactComponent>Fat: 10g</RecipeFactComponent>
      <RecipeFactComponent>Chol: 25mg</RecipeFactComponent>
      <RecipeFactComponent>Sodium: 250mg</RecipeFactComponent>
      <RecipeFactComponent>Carbs: 27g</RecipeFactComponent>
      <RecipeFactComponent>Protein: 6g</RecipeFactComponent>
    </View>
  );
}

interface RecipeFactComponentProps extends PropsWithChildren {
  children?: React.ReactNode;
}

function RecipeFactComponent({ children }: Readonly<RecipeFactComponentProps>) {
  return (
    <View style={{ width: "25%" }}>
      <KBTypography variant="body">{children}</KBTypography>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
