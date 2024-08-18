import KBSpacer from "@/components/KBSpacer";
import KBTypography from "@/components/KBTypography";
import { Measurements, RecipeType } from "@/types";
import { View } from "react-native";

import measurements from "@/assets/data/measurements.json";

interface IngredientsComponentProps {
  recipe: RecipeType;
}

export default function IngredientsComponent({
  recipe,
}: Readonly<IngredientsComponentProps>) {
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
        <KBTypography variant="header">Ingredients</KBTypography>
        <KBTypography>
          {recipe.ingredients.length}{" "}
          {recipe.ingredients.length <= 1 ? "item" : "items"}
        </KBTypography>
      </View>

      <KBSpacer size={16} />

      <View style={{}}>
        {recipe.ingredients.map((ingredient) => (
          <>
            <IngredientComponent
              key={ingredient.item}
              ingredient={ingredient}
            />
            <KBSpacer orientation="horizontal" size={8} />
          </>
        ))}
      </View>
    </>
  );
}

interface IngredientComponentProps {
  ingredient: RecipeType["ingredients"][number];
}

function IngredientComponent({
  ingredient,
}: Readonly<IngredientComponentProps>) {
  const measurementsData: Measurements = measurements;

  let displayMeasurement;

  if (ingredient.quantity === 1) {
    // Use singular measurement
    displayMeasurement = `${ingredient.quantity} ${ingredient.measurement}`;
  } else if (measurementsData[ingredient.measurement]?.plural) {
    // Use plural measurement
    displayMeasurement = `${ingredient.quantity} ${
      measurementsData[ingredient.measurement]?.plural
    }`;
  } else if (ingredient.quantity === -1) {
    // Special to taste measurement
    displayMeasurement = `To Taste`;
  } else {
    // Fail safe
    displayMeasurement = `${ingredient.quantity} ${ingredient.measurement}`;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <KBTypography>{ingredient.item}</KBTypography>
      <KBTypography>{displayMeasurement}</KBTypography>
    </View>
  );
}
